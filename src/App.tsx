import About from "@components/About";
import Splash from "@components/Splash";
import Features from "@components/Features";
import GetStarted from "@components/GetStarted";
import Examples from "@components/Examples";
import Footer from "@components/Footer";
import NavigationBar from "@components/NavigationBar";
import SEO from "@components/SEO";
import GoogleAnalytics from "@components/GoogleAnalytics";
import { Box, Container, Link } from "@mui/material";

const App: React.FC = () => {
  return (
    <>
      <Link
        href="#main-content"
        sx={{
          position: "absolute",
          top: "-48px",
          left: "0",
          backgroundColor: "#000",
          color: "#fff",
          padding: "8px",
          zIndex: 100,
          transition: "top 0.3s",
          "&:focus": { top: "0" }
        }}
      >
        Skip to main content
      </Link>
      
      <Box>
        <SEO />
        <GoogleAnalytics />
        <NavigationBar />
        <Splash />
        <main id="main-content">
          <Container sx={{ my: 4 }}>
            <About />
            <Features />
            <Examples />
            <GetStarted />
          </Container>
        </main>
        <Footer />
      </Box>
    </>
  );
};

export default App;