import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Footer: React.FC = () => {
  const theme = useTheme();
  const smallLogo = theme.palette.mode === 'dark'
    ? '/public/lo-logo-dark-mode.png'
    : '/public/lo-logo-light-mode.png';

  return (
    <Box
      sx={{
        backgroundColor: "grey.900",
        color: "grey.300",
        py: 3,
        mt: 6,
      }}
    >
      <Container sx={{ textAlign: "center" }}>
        <img
          src={smallLogo}
          alt="Local Operator Logo"
          style={{ width: 120, height: 120, marginBottom: '8px' }}
        />
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Local Operator. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 