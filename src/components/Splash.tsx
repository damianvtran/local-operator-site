import { Box, Container, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/material/styles";
import loLogoDarkMode from "@assets/lo-logo-dark-mode.png";
import loLogoLightMode from "@assets/lo-logo-light-mode.png";

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

const AnimatedLogo = styled("img")({
  animation: `${fadeInUp} 1.2s ease-out forwards`,
  opacity: 0,
  height: 'auto',
  maxWidth: '500px',
  width: '100%',
  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  }
});

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

const Splash: React.FC = () => {
  const theme = useTheme();
  const largeLogo = theme.palette.mode === 'dark' 
    ? loLogoDarkMode
    : loLogoLightMode;

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
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2, py: { xs: 8, md: 6 } }}>
        <Box 
          display="flex" 
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          sx={{ mt: { xs: 4, md: 8 } }}
        >
          <Box sx={{ mb: 0, minHeight: { xs: '200px', sm: '300px', md: '400px' }, display: 'flex', alignItems: 'center' }}>
            <AnimatedLogo
              src={largeLogo}
              alt="Local Operator Banner Logo"
            />
          </Box>
          
          <AnimatedContent>
            <GradientText 
              variant="h2"
              gutterBottom
              sx={{
                fontSize: {
                  xs: '2rem',
                  sm: '3rem',
                  md: '3.75rem'
                },
                fontWeight: 700,
                mb: 3
              }}
            >
              Local Operator: On-device Agentic Task Execution
            </GradientText>
            
            <Typography 
              variant="h5" 
              component="p" 
              gutterBottom
              color="text.secondary"
              sx={{
                fontSize: {
                  xs: '1.5rem',
                  sm: '1.75rem'
                },
                mb: 4,
                maxWidth: '800px',
                mx: 'auto'
              }}
            >
              On-Device Python Agents with Conversational Intelligence
            </Typography>

            <ActionButton
              variant="contained"
              color="primary"
              size="large"
              onClick={scrollToAbout}
            >
              Learn More
            </ActionButton>
          </AnimatedContent>
        </Box>
      </Container>
    </Box>
  );
};

export default Splash;