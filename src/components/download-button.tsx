import { styled } from "@mui/material/styles";
import type { SxProps, Theme } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faWindows, faLinux } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { keyframes } from "@emotion/react";
import { useGithubRelease } from "../hooks/use-github-release";
// @ts-ignore - MUI Tooltip has type issues
import { Tooltip } from "@mui/material";
import { trackEvent } from "./GoogleAnalytics";

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(56, 201, 106, 0.4);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(56, 201, 106, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(56, 201, 106, 0);
  }
`;

/**
 * Styled download button with pulse animation and OS-specific icon
 */
const StyledDownloadButton = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  borderRadius: 12,
  textTransform: 'none',
  fontWeight: 600,
  textDecoration: 'none',
  color: '#ffffff',
  backgroundColor: theme.palette.secondary.main,
  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
  animation: `${pulse} 2s infinite`,
  cursor: 'pointer',
  border: 'none',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
    transform: 'translateY(-3px) scale(1.03)',
    boxShadow: '0 8px 16px rgba(38, 188, 133, 0.3)',
    textDecoration: 'none',
    color: '#ffffff',
  }
}));

/**
 * Button icon container for consistent spacing
 */
const ButtonIconContainer = styled('span')({
  display: 'flex',
  alignItems: 'center',
  gap: 12
});

/**
 * Spinner animation for loading state
 */
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

/**
 * Styled spinner component for loading state
 */
const LoadingSpinner = styled(FontAwesomeIcon)(({ theme }) => ({
  animation: `${spin} 1s linear infinite`,
  color: theme.palette.common.white,
}));

/**
 * Version badge component
 */
const VersionBadge = styled('span')(({ theme }) => ({
  position: 'absolute',
  top: '-10px',
  right: '-10px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: '0.7rem',
  padding: theme.spacing(0.5, 1),
  borderRadius: '12px',
  fontWeight: 'bold',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
}));

/**
 * Detects the user's operating system
 * @returns An object containing the OS name and icon
 */
const detectOS = (): { name: string; icon: React.ReactNode } => {
  const userAgent = window.navigator.userAgent;
  
  if (userAgent.indexOf("Win") !== -1) {
    return { name: "Windows", icon: <FontAwesomeIcon icon={faWindows} size="lg" /> };
  }
  if (userAgent.indexOf("Mac") !== -1) {
    return { name: "macOS", icon: <FontAwesomeIcon icon={faApple} size="lg" /> };
  }
  if (userAgent.indexOf("Linux") !== -1) {
    return { name: "Linux", icon: <FontAwesomeIcon icon={faLinux} size="lg" /> };
  }
  
  // Default fallback
  return { name: "your device", icon: <FontAwesomeIcon icon={faDownload} size="lg" /> };
};

type DownloadButtonProps = {
  /**
   * Custom text to display instead of the default "Download for [OS]"
   */
  customText?: string;
  /**
   * Additional props to pass to the anchor element
   */
  className?: string;
  /**
   * Optional custom URL for the download (will be overridden by GitHub release URL if available)
   */
  href?: string;
  /**
   * Optional click handler
   */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  /**
   * Optional style overrides using MUI's sx prop pattern
   */
  sx?: SxProps<Theme>;
  /**
   * Whether the button should take up the full width of its container
   */
  fullWidth?: boolean;
  /**
   * GitHub repository owner
   */
  repoOwner?: string;
  /**
   * GitHub repository name
   */
  repoName?: string;
  /**
   * Whether to show the version badge
   */
  showVersion?: boolean;
};

/**
 * A reusable download button component that detects the user's OS
 * and displays an appropriate icon and text. Automatically fetches
 * the latest release from GitHub if repoOwner and repoName are provided.
 */
export const DownloadButton: React.FC<DownloadButtonProps> = ({ 
  customText,
  href = "https://github.com/damianvtran/local-operator-ui/releases/latest",
  sx,
  fullWidth,
  repoOwner = "damianvtran",
  repoName = "local-operator-ui",
  showVersion = true,
  ...props 
}) => {
  const os = detectOS();
  const { isLoading, error, downloadUrl, version } = useGithubRelease(repoOwner, repoName);
  
  // Use the dynamic URL if available, otherwise fall back to the provided href
  const finalHref = downloadUrl || href;
  
  // Determine if we should show the version badge
  const shouldShowVersion = showVersion && version && !isLoading && !error;
  
  // Determine button content based on loading/error state
  const renderButtonContent = () => {
    if (isLoading) {
      return (
        <ButtonIconContainer>
          <LoadingSpinner icon={faSpinner} size="lg" />
          <span>Loading download...</span>
        </ButtonIconContainer>
      );
    }
    
    if (error) {
      // @ts-ignore - MUI Tooltip has type issues
      return (
        <Tooltip title={`Error: ${error}. Using fallback download link.`}>
          <ButtonIconContainer>
            {os.icon}
            <span>{customText || `Download for ${os.name}`}</span>
          </ButtonIconContainer>
        </Tooltip>
      );
    }
    
    return (
      <ButtonIconContainer>
        {os.icon}
        <span>{customText || `Download for ${os.name}`}</span>
      </ButtonIconContainer>
    );
  };
  
  /**
   * Initiates a download without navigating away from the current page
   * @param url - The URL to download
   */
  const initiateDownload = (url: string) => {
    // Create a hidden anchor element
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = ''; // This tells the browser to download the file
    downloadLink.style.display = 'none';
    
    // Add to the DOM, click it, and remove it
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  // Handle click event to track downloads with Google Analytics
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent default navigation
    event.preventDefault();
    
    // Track the download event
    trackEvent('download', {
      os: os.name,
      version: version || 'unknown',
      download_url: finalHref,
    });
    
    // Initiate the download programmatically
    initiateDownload(finalHref);
    
    // Call the user-provided onClick handler if it exists
    if (props.onClick) {
      props.onClick(event);
    }
  };
  
  return (
    <StyledDownloadButton
      href={finalHref}
      rel="noopener"
      onClick={handleClick}
      style={{
        width: fullWidth ? '100%' : 'auto',
        position: 'relative',
        ...(sx as React.CSSProperties)
      }}
      {...props}
    >
      {renderButtonContent()}
      {shouldShowVersion && (
        <VersionBadge>{version}</VersionBadge>
      )}
    </StyledDownloadButton>
  );
};
