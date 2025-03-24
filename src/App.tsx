import About from "@components/About";
import Splash from "@components/Splash";
import Features from "@components/Features";
import GetStarted from "@components/GetStarted";
import Examples from "@components/Examples";
import SEO from "@components/SEO";
import GoogleAnalytics from "@components/GoogleAnalytics";
import MediaFeed from "@components/MediaFeed";
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
        <Splash />
        <Container sx={{ my: 4 }}>
          <About />
          <Examples />
          <Features />
          <GetStarted />
          <MediaFeed />
        </Container>
      </Box>
    </>
  );
};

export default App;
