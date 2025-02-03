import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import loLogoDarkMode from "../../public/lo-logo-dark-mode.png";
import loLogoLightMode from "../../public/lo-logo-light-mode.png";

const NavigationBar: React.FC = () => {
  const theme = useTheme();
  const smallLogo =
    theme.palette.mode === "dark"
      ? loLogoDarkMode
      : loLogoLightMode;

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ minHeight: 80 }}>
        <img
          src={smallLogo}
          alt="Local Operator Logo"
          style={{ width: 60, height: 60, marginRight: "8px" }}
        />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Local Operator
        </Typography>
        <Button color="inherit" onClick={() => handleScroll("about")} size="small">
          About
        </Button>
        <Button color="inherit" onClick={() => handleScroll("features")} size="small">
          Features
        </Button>
        <Button color="inherit" onClick={() => handleScroll("examples")} size="small">
          Examples
        </Button>
        <Button color="inherit" onClick={() => handleScroll("getstarted")} size="small">
          Get Started
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar; 