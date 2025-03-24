import { About } from "@components/about";
import { Splash } from "@components/splash";
import { Features } from "@components/features";
import { GetStarted } from "@components/get-started";
import { Examples } from "@components/examples";
import { SEO } from "@components/seo";
import { GoogleAnalytics } from "@components/google-analytics";
import { MediaFeed } from "@components/media-feed";
import { Box, Container, Link } from "@mui/material";

export const App: React.FC = () => {
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
          <Box id="privacy" sx={{ position: "absolute", top: "-80px" }} />
          <Box id="terms" sx={{ position: "absolute", top: "-80px" }} />
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
