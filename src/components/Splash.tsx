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

const AnimatedLogo = styled("img")({
  animation: `${fadeInUp} 1s linear forwards`,
  opacity: 0, // Start invisible to prevent flash
  height: 'auto',
  maxWidth: '500px',
  width: '100%'
});

const Splash: React.FC = () => {
  const theme = useTheme();
  const largeLogo = theme.palette.mode === 'dark' 
    ? loLogoDarkMode
    : loLogoLightMode;

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const headerOffset = 80; // Account for fixed header height
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Set focus after scroll completes
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
        py: { xs: 8, md: 6 },
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: 0,
      }}
    >
      <Container sx={{ mt: { xs: -4, md: -8 } }}>
        <Box 
          display="flex" 
          justifyContent="center"
          sx={{ minHeight: { xs: '200px', sm: '300px', md: '400px' } }}
        >
          <AnimatedLogo
            src={largeLogo}
            alt="Local Operator Banner Logo"
          />
        </Box>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{
            fontSize: {
              xs: '2.5rem',
              sm: '3.75rem'
            }
          }}
        >
          Local Operator: On-device Agentic Task Execution
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          On-Device Python Agents with Conversational Intelligence
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 2 }}
          onClick={scrollToAbout}
        >
          Learn More
        </Button>
      </Container>
    </Box>
  );
};

export default Splash;