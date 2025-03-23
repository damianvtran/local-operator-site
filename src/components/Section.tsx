import { Box } from "@mui/material";
import type { BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const Section = styled(Box)<BoxProps>(({ theme }) => ({
  padding: theme.spacing(10, 8),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(8, 6),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(6, 4),
  },
  background: theme.palette.background.paper === '#ffffff' 
    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(245, 245, 250, 0.85))'
    : `linear-gradient(135deg, rgba(25, 25, 30, 0.3), rgba(18, 18, 24, 0.25), rgba(${56 * 0.1}, ${201 * 0.1}, ${106 * 0.1}, 0.5))`,
  borderRadius: 12,
  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
  textAlign: "center",
  marginBottom: theme.spacing(6),
  transition: "all 0.3s ease-in-out",
  position: "relative",
  overflow: "hidden",
  border: "1px solid rgba(255, 255, 255, 0.05)"
}));

export default Section; 