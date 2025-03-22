import { styled } from "@mui/material/styles";
import type { SxProps, Theme } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faWindows, faLinux, faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { keyframes } from "@emotion/react";

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
  if (userAgent.indexOf("Android") !== -1) {
    return { name: "Android", icon: <FontAwesomeIcon icon={faAndroid} size="lg" /> };
  }
  if (userAgent.indexOf("iPhone") !== -1 || userAgent.indexOf("iPad") !== -1) {
    return { name: "iOS", icon: <FontAwesomeIcon icon={faApple} size="lg" /> };
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
   * Optional custom URL for the download
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
};

/**
 * A reusable download button component that detects the user's OS
 * and displays an appropriate icon and text.
 */
export const DownloadButton: React.FC<DownloadButtonProps> = ({ 
  customText,
  href = "https://github.com/damianvtran/local-operator/releases/latest",
  sx,
  fullWidth,
  ...props 
}) => {
  const os = detectOS();
  
  return (
    <StyledDownloadButton
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: fullWidth ? '100%' : 'auto',
        ...(sx as React.CSSProperties)
      }}
      {...props}
    >
      <ButtonIconContainer>
        {os.icon}
        <span>{customText || `Download for ${os.name}`}</span>
      </ButtonIconContainer>
    </StyledDownloadButton>
  );
};
