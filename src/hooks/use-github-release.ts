import { useState, useEffect } from "react";

type ReleaseAsset = {
  name: string;
  browser_download_url: string;
};

type GitHubRelease = {
  tag_name: string;
  assets: ReleaseAsset[];
  prerelease: boolean;
};

type ReleaseInfo = {
  isLoading: boolean;
  error: string | null;
  downloadUrl: string | null;
  version: string | null;
};

/**
 * Custom hook to fetch the latest release from a GitHub repository
 * and determine the appropriate download URL based on the user's OS
 * 
 * @param repoOwner - The GitHub repository owner
 * @param repoName - The GitHub repository name
 * @returns Object containing loading state, error, download URL and version
 */
export const useGithubRelease = (
  repoOwner: string,
  repoName: string
): ReleaseInfo => {
  const [releaseInfo, setReleaseInfo] = useState<ReleaseInfo>({
    isLoading: true,
    error: null,
    downloadUrl: null,
    version: null,
  });

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        // Fetch the latest releases from GitHub API
        const response = await fetch(
          `https://api.github.com/repos/${repoOwner}/${repoName}/releases`
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const releases = await response.json();

        // Find the first release that is not a pre-release and has latest.yml
        const validRelease = findValidRelease(releases);

        if (!validRelease) {
          setReleaseInfo({
            isLoading: false,
            error: "No valid release found",
            downloadUrl: null,
            version: null,
          });
          return;
        }

        // Get the appropriate download URL based on the user's OS
        const downloadUrl = getDownloadUrlForOS(validRelease.assets);

        setReleaseInfo({
          isLoading: false,
          error: null,
          downloadUrl,
          version: validRelease.tag_name,
        });
      } catch (error) {
        setReleaseInfo({
          isLoading: false,
          error: error instanceof Error ? error.message : "Unknown error",
          downloadUrl: null,
          version: null,
        });
      }
    };

    fetchLatestRelease();
  }, [repoOwner, repoName]);

  return releaseInfo;
};

/**
 * Finds a valid release that is not a pre-release and has latest.yml
 * @param releases - Array of GitHub releases
 * @returns The first valid release or null if none found
 */
const findValidRelease = (releases: GitHubRelease[]): GitHubRelease | null => {
  if (!releases || releases.length === 0) {
    return null;
  }

  // Look for releases that have latest.yml and don't have beta in the assets
  for (const release of releases) {
    const assets = release.assets || [];
    
    // Check if this release has latest.yml
    const hasLatestYml = assets.some((asset: ReleaseAsset) => 
      asset.name.includes("latest.yml") || asset.name.includes("latest-mac.yml")
    );
    
    if (!hasLatestYml) {
      continue;
    }

    // Check if any of the assets have "beta" in the name
    const hasBetaAssets = assets.some((asset: ReleaseAsset) => 
      asset.name.toLowerCase().includes("beta")
    );
    
    if (!hasBetaAssets) {
      return release;
    }
  }

  return null;
};

/**
 * Gets the appropriate download URL based on the user's OS
 * @param assets - Array of release assets
 * @returns The download URL for the user's OS or null if not found
 */
const getDownloadUrlForOS = (assets: ReleaseAsset[]): string | null => {
  if (!assets || assets.length === 0) {
    return null;
  }

  // Detect OS
  const userAgent = window.navigator.userAgent;
  let fileExtension: string;
  
  if (userAgent.indexOf("Win") !== -1) {
    // Windows - look for x64.exe
    fileExtension = "x64.exe";
  } else if (userAgent.indexOf("Mac") !== -1) {
    // macOS - look for .dmg
    fileExtension = ".dmg";
  } else if (userAgent.indexOf("Linux") !== -1) {
    // Linux - look for .deb
    fileExtension = ".deb";
  } else {
    // Default fallback - use the first asset
    return assets[0].browser_download_url;
  }

  // Find the asset with the matching extension
  const matchingAsset = assets.find((asset) => 
    asset.name.endsWith(fileExtension) && !asset.name.toLowerCase().includes("beta")
  );

  return matchingAsset ? matchingAsset.browser_download_url : null;
};
