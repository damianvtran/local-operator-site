import { Box } from "@mui/material";
import type { BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const Section = styled(Box)<BoxProps>(({ theme }) => ({
	padding: theme.spacing(8, 8),
	[theme.breakpoints.down("md")]: {
		padding: theme.spacing(8, 6),
	},
	[theme.breakpoints.down("sm")]: {
		padding: theme.spacing(6, 4),
	},
	backgroundColor: theme.palette.background.paper,
	borderRadius: 2,
	boxShadow: theme.shadows[3],
	textAlign: "center",
	marginBottom: theme.spacing(4),
}));

export default Section; 