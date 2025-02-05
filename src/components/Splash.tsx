import { Box, Container, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import loLogoDarkMode from "@assets/lo-logo-dark-mode.png";
import loLogoLightMode from "@assets/lo-logo-light-mode.png";

const Splash: React.FC = () => {
  const theme = useTheme();
  const largeLogo = theme.palette.mode === 'dark' 
    ? loLogoDarkMode
    : loLogoLightMode;

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
      aboutSection.tabIndex = -1;
      aboutSection.focus();
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
        <Box display="flex" justifyContent="center" sx={{ mb: 2 }}>
          <img
            src={largeLogo}
            alt="Local Operator Banner Logo"
            style={{ maxWidth: '450px', width: '100%', height: 'auto' }}
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