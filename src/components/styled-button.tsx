import { Button, type ButtonProps, styled } from "@mui/material";

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
	margin: theme.spacing(1),
	padding: theme.spacing(2),
}));

export default StyledButton;
