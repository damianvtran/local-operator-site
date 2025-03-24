import { Box } from "@mui/material";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

/**
 * Layout component that provides a consistent structure for all pages
 * Includes the navigation bar, main content area, and footer
 */
export const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Box>
      <NavigationBar />
      <Box component="main" id="main-content">
        {children || <Outlet />}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
