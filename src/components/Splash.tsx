import { Box, Container, Typography, Button, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faWindows, faLinux, faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import uiPreview from "/public/ui-preview.png";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
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

const AnimatedPreview = styled("img")(({ theme }) => ({
  animation: `${fadeInUp} 1.2s ease-out forwards`,
  opacity: 0,
  height: 'auto',
  maxWidth: '1050px',
  width: '100%',
  filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4))',
  transition: 'transform 0.3s ease-in-out, filter 0.3s ease-in-out',
  borderRadius: '12px',
  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
  '&:hover': {
    transform: 'scale(1.02) translateY(-5px)',
    filter: 'drop-shadow(0 12px 20px rgba(0, 0, 0, 0.5))',
  }
}));

const AnimatedContent = styled(Box)({
  animation: `${fadeIn} 1.5s ease-out forwards`,
  opacity: 0,
  animationDelay: '0.5s'
});

const GradientText = styled(Typography)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(90deg, #38C96A 30%, #26BC85 90%)'
    : 'linear-gradient(90deg, #2A9D54 30%, #1A8A61 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent'
}));

const ActionButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  borderRadius: 8,
  textTransform: 'none',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 12px rgba(56, 201, 106, 0.2)'
  }
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  borderRadius: 8,
  textTransform: 'none',
  transition: 'all 0.3s ease-in-out',
  marginLeft: theme.spacing(2),
  backgroundColor: theme.palette.secondary.main,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 12px rgba(38, 188, 133, 0.2)'
  }
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
    <Box
      sx={{
        backgroundColor: "background.default",
        color: "primary.contrastText",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle at 50% 50%, rgba(56, 201, 106, 0.1) 0%, rgba(0, 0, 0, 0) 70%)'
            : 'radial-gradient(circle at 50% 50%, rgba(56, 201, 106, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
          zIndex: 1
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, py: { xs: 6, md: 4 } }}>
        <Box 
          display="flex" 
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          sx={{ mt: { xs: 2, md: 4 } }}
        >
          <AnimatedContent>
            <GradientText 
              variant="h2"
              gutterBottom
              sx={{
                fontSize: {
                  xs: '2rem',
                  sm: '2.75rem',
                  md: '3rem'
                },
                fontWeight: 700,
                mb: 2
              }}
            >
              Local Operator: AI Agent Assistants On Your Device
            </GradientText>
            
            <Typography 
              variant="h5" 
              component="p" 
              gutterBottom
              color="text.secondary"
              sx={{
                fontSize: {
                  xs: '1.25rem',
                  sm: '1.5rem'
                },
                mb: 3,
                maxWidth: '800px',
                mx: 'auto'
              }}
            >
              Agents Running Code on Demand with Conversational Intelligence
            </Typography>
          </AnimatedContent>
          
          <Box sx={{ 
            mb: 5, 
            mt: 3,
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            px: { xs: 2, sm: 4, md: 6 }
          }}>
            {/* @ts-ignore - MUI Tooltip has type issues */}
            <Tooltip title="UI Preview of Local Operator">
              <AnimatedPreview
                src={uiPreview}
                alt="Local Operator UI Preview"
              />
            </Tooltip>
          </Box>
          
          <AnimatedContent sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: { xs: 2, sm: 0 } }}>
              <ActionButton
                variant="contained"
                color="primary"
                size="large"
                onClick={scrollToAbout}
              >
                Learn More
              </ActionButton>
              
              <DownloadButton
                variant="contained"
                size="large"
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  {os.icon}
                  <span>Download for {os.name}</span>
                </Box>
              </DownloadButton>
            </Box>
          </AnimatedContent>
        </Box>
      </Container>
    </Box>
  );
};

export default Splash;
