import { Box, Container, Typography, Button, Tooltip, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faWindows, faLinux, faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import uiPreview from "/public/ui-preview.png";
import loLogoDarkMode from "@assets/lo-logo-dark-mode.png";
import loLogoLightMode from "@assets/lo-logo-light-mode.png";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: theme.spacing(4),
  left: theme.spacing(4),
  zIndex: 10,
  animation: `${fadeInRight} 1s ease-out forwards`,
  opacity: 0,
  [theme.breakpoints.down('md')]: {
    top: theme.spacing(2),
    left: theme.spacing(2),
  }
}));

const Logo = styled("img")({
  height: 50,
  width: 'auto',
  marginRight: '12px'
});

const AnimatedPreview = styled("img")(({ theme }) => ({
  animation: `${fadeInUp} 1.2s ease-out forwards`,
  opacity: 0,
  height: 'auto',
  maxWidth: '1050px',
  width: '100%',
  filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5))',
  transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.4s ease-in-out',
  borderRadius: '16px',
  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'}`,
  '&:hover': {
    transform: 'scale(1.03) translateY(-8px)',
    filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.6))',
  }
}));

const AnimatedContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'delay',
})<{ delay?: string }>(({ delay = '0.5s' }) => ({
  animation: `${fadeIn} 1.5s ease-out forwards`,
  opacity: 0,
  animationDelay: delay
}));

const AnimatedLeftContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'delay',
})<{ delay?: string }>(({ delay = '0.3s' }) => ({
  animation: `${fadeInRight} 1.2s ease-out forwards`,
  opacity: 0,
  animationDelay: delay
}));

const AnimatedRightContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'delay',
})<{ delay?: string }>(({ delay = '0.3s' }) => ({
  animation: `${fadeInLeft} 1.2s ease-out forwards`,
  opacity: 0,
  animationDelay: delay
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(90deg, #38C96A 30%, #26BC85 90%)'
    : 'linear-gradient(90deg, #2A9D54 30%, #1A8A61 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  textShadow: '0 0 30px rgba(56, 201, 106, 0.2)'
}));

const GlassPanel = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark' 
    ? 'rgba(20, 20, 20, 0.7)' 
    : 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: '24px',
  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
  padding: theme.spacing(4),
  boxShadow: theme.palette.mode === 'dark'
    ? '0 10px 30px rgba(0, 0, 0, 0.3)'
    : '0 10px 30px rgba(0, 0, 0, 0.1)',
}));

const ActionButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  borderRadius: 12,
  textTransform: 'none',
  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
  fontWeight: 600,
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 16px rgba(56, 201, 106, 0.25)'
  }
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  borderRadius: 12,
  textTransform: 'none',
  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
  fontWeight: 600,
  backgroundColor: theme.palette.secondary.main,
  animation: `${pulse} 2s infinite`,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
    transform: 'translateY(-3px) scale(1.03)',
    boxShadow: '0 8px 16px rgba(38, 188, 133, 0.3)'
  }
}));

const FeatureBadge = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: theme.spacing(0.75, 2),
  borderRadius: 20,
  fontSize: '0.875rem',
  fontWeight: 500,
  marginBottom: theme.spacing(2),
  background: 'rgba(56, 201, 106, 0.15)',
  border: '1px solid rgba(56, 201, 106, 0.3)',
  color: theme.palette.primary.light,
}));

// Main wrapper with background gradient
const MainWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.primary.contrastText,
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: 0
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: theme.palette.mode === 'dark'
      ? 'radial-gradient(circle at 30% 30%, rgba(56, 201, 106, 0.15) 0%, rgba(0, 0, 0, 0) 70%), radial-gradient(circle at 70% 70%, rgba(38, 188, 133, 0.1) 0%, rgba(0, 0, 0, 0) 70%)'
      : 'radial-gradient(circle at 30% 30%, rgba(56, 201, 106, 0.08) 0%, rgba(255, 255, 255, 0) 70%), radial-gradient(circle at 70% 70%, rgba(38, 188, 133, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
    zIndex: 1
  }
}));

// Container with positioning and padding
const ContentContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6)
  }
}));

// Mobile layout container
const MobileLayout = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  marginTop: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(6)
  }
}));

// Mobile heading text
const MobileHeadingText = styled(GradientText)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.5rem'
  }
}));

// Mobile subheading text
const MobileSubheadingText = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  marginBottom: theme.spacing(4),
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.5rem'
  }
}));

// Preview image container for mobile
const MobilePreviewContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  marginTop: theme.spacing(2),
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  }
}));

// Mobile buttons container
const MobileButtonsContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16
});

// Mobile animated content wrapper
const MobileAnimatedContentWrapper = styled(AnimatedContent)({
  marginTop: 16,
  width: '100%'
});

// Desktop grid container
const DesktopGridContainer = styled(Grid)({
  minHeight: '90vh'
});

// Desktop left grid item
const DesktopLeftGridItem = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(6)
  }
}));

// Desktop heading text
const DesktopHeadingText = styled(GradientText)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  lineHeight: 1.2,
  [theme.breakpoints.up('md')]: {
    fontSize: '2.75rem'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3.25rem'
  }
}));

// Desktop subheading text
const DesktopSubheadingText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  lineHeight: 1.5,
  [theme.breakpoints.up('md')]: {
    fontSize: '1.25rem'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.5rem'
  }
}));

// Desktop buttons container
const DesktopButtonsContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isTablet',
})<{ isTablet: boolean }>(({ isTablet, theme }) => ({
  display: 'flex',
  flexDirection: isTablet ? 'column' : 'row',
  gap: theme.spacing(2)
}));

// Desktop preview container
const DesktopPreviewContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  [theme.breakpoints.up('lg')]: {
    paddingRight: theme.spacing(4)
  }
}));

// Button icon container
const ButtonIconContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 12
});

// Learn more button icon container
const LearnMoreButtonIconContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 8
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

const Splash: React.FC = () => {
  const theme = useTheme();
  const os = detectOS();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const logo = theme.palette.mode === 'dark' ? loLogoDarkMode : loLogoLightMode;

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const headerOffset = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setTimeout(() => {
        aboutSection.tabIndex = -1;
        aboutSection.focus();
      }, 1000);
    }
  };

  return (
    <MainWrapper>
      {/* Logo in top left */}
      <LogoContainer>
        <Logo src={logo} alt="Local Operator Logo" />
        <Typography variant="gradientTitle">Local Operator</Typography>
      </LogoContainer>

      <ContentContainer maxWidth="xl">
        {isMobile ? (
          // Mobile layout - stacked
          <MobileLayout>
            <AnimatedContent delay="0.3s">
              <FeatureBadge>
                AI-Powered Productivity
              </FeatureBadge>
              
              <MobileHeadingText 
                variant="h2"
                gutterBottom
              >
                AI Agent Assistants On Your Device
              </MobileHeadingText>
              
              <MobileSubheadingText 
                variant="h5" 
                gutterBottom
                color="text.secondary"
              >
                Agents Working On Demand with Conversational Intelligence
              </MobileSubheadingText>
            </AnimatedContent>
            
            <MobilePreviewContainer>
              {/* @ts-ignore - MUI Tooltip has type issues */}
              <Tooltip title="UI Preview of Local Operator">
                <AnimatedPreview
                  src={uiPreview}
                  alt="Local Operator UI Preview"
                />
              </Tooltip>
            </MobilePreviewContainer>
            
            <MobileAnimatedContentWrapper delay="0.7s">
              <MobileButtonsContainer>
                <DownloadButton
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{ maxWidth: '320px' }}
                >
                  <ButtonIconContainer>
                    {os.icon}
                    <span>Download for {os.name}</span>
                  </ButtonIconContainer>
                </DownloadButton>
                
                <ActionButton
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={scrollToAbout}
                  fullWidth
                  sx={{ maxWidth: '320px' }}
                >
                  <LearnMoreButtonIconContainer>
                    <span>Learn More</span>
                    <FontAwesomeIcon icon={faArrowRight} size="sm" />
                  </LearnMoreButtonIconContainer>
                </ActionButton>
              </MobileButtonsContainer>
            </MobileAnimatedContentWrapper>
          </MobileLayout>
        ) : (
          // Desktop layout - side by side with glass panel
          <DesktopGridContainer container spacing={4} alignItems="center">
            <DesktopLeftGridItem item xs={12} lg={5}>
              <AnimatedLeftContent>
                <GlassPanel>
                  <FeatureBadge>
                    Open Source Agentic AI
                  </FeatureBadge>
                  
                  <DesktopHeadingText 
                    variant="h2"
                    gutterBottom
                  >
                    AI Agent Assistants On Your Device
                  </DesktopHeadingText>
                  
                  <DesktopSubheadingText 
                    variant="h5" 
                    gutterBottom
                    color="text.secondary"
                  >
                    Agents Working On Demand with Conversational Intelligence
                  </DesktopSubheadingText>
                  
                  <DesktopButtonsContainer isTablet={isTablet}>
                    <DownloadButton
                      variant="contained"
                      size="large"
                      fullWidth={isTablet}
                    >
                      <ButtonIconContainer>
                        {os.icon}
                        <span>Download for {os.name}</span>
                      </ButtonIconContainer>
                    </DownloadButton>
                    
                    <ActionButton
                      variant="outlined"
                      color="primary"
                      size="large"
                      onClick={scrollToAbout}
                      fullWidth={isTablet}
                    >
                      <LearnMoreButtonIconContainer>
                        <span>Learn More</span>
                        <FontAwesomeIcon icon={faArrowRight} size="sm" />
                      </LearnMoreButtonIconContainer>
                    </ActionButton>
                  </DesktopButtonsContainer>
                </GlassPanel>
              </AnimatedLeftContent>
            </DesktopLeftGridItem>
            
            <Grid item xs={12} lg={7}>
              <AnimatedRightContent>
                <DesktopPreviewContainer>
                  {/* @ts-ignore - MUI Tooltip has type issues */}
                  <Tooltip title="UI Preview of Local Operator">
                    <AnimatedPreview
                      src={uiPreview}
                      alt="Local Operator UI Preview"
                    />
                  </Tooltip>
                </DesktopPreviewContainer>
              </AnimatedRightContent>
            </Grid>
          </DesktopGridContainer>
        )}
      </ContentContainer>
    </MainWrapper>
  );
};

export default Splash;
