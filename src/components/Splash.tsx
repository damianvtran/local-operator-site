import { Box, Container, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Splash: React.FC = () => {
  const theme = useTheme();
  const largeLogo = theme.palette.mode === 'dark' 
    ? '/static/lo-logo-dark-mode.png' 
    : '/static/lo-logo-light-mode.png';

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        color: "primary.contrastText",
        py: 6,
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: 0,
      }}
    >
      <Container sx={{ mt: -8 }}>
        <Box display="flex" justifyContent="center" sx={{ mb: 2 }}>
          <img
            src={largeLogo}
            alt="Local Operator Banner Logo"
            style={{ maxWidth: '450px', width: '100%', height: 'auto' }}
          />
        </Box>
        <Typography variant="h2" component="h1" gutterBottom>
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