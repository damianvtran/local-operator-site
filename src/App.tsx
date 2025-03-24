import { About } from "@components/about";
import { Splash } from "@components/splash";
import { Features } from "@components/features";
import { GetStarted } from "@components/get-started";
import { Examples } from "@components/examples";
import { SEO } from "@components/seo";
import { GoogleAnalytics } from "@components/google-analytics";
import { MediaFeed } from "@components/media-feed";
import { Box, Container, Link } from "@mui/material";
import { useEffect } from "react";

/**
 * Scrolls to the section specified in the hash
 * @param hash The hash from the URL (without the #)
 */
const scrollToSection = (hash: string) => {
  if (!hash) return;
  
  // Use a more robust approach with multiple attempts
  const attemptScroll = (attemptsLeft: number) => {
    const section = document.getElementById(hash);
    if (section) {
      // Found the section, scroll to it
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      console.log(`Scrolled to section: ${hash}`);
    } else if (attemptsLeft > 0) {
      // Section not found yet, try again after a delay
      console.log(`Section ${hash} not found, ${attemptsLeft} attempts left`);
      setTimeout(() => attemptScroll(attemptsLeft - 1), 200);
    } else {
      console.log(`Failed to find section: ${hash}`);
    }
  };
  
  // Start with 5 attempts, spaced 200ms apart
  attemptScroll(5);
};

export const App: React.FC = () => {
  // Handle hash in URL when component mounts
  useEffect(() => {
    // Get hash from URL (without the #)
    const hash = window.location.hash.slice(1);
    
    // Add a listener for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      if (newHash) {
        scrollToSection(newHash);
      }
    };
    
    // Initial scroll if hash exists
    if (hash) {
      // Delay the initial scroll to ensure the DOM is fully loaded
      setTimeout(() => scrollToSection(hash), 300);
    }
    
    // Add hash change listener
    window.addEventListener('hashchange', handleHashChange);
    
    // Clean up
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
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
