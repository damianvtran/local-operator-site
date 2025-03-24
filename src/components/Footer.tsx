import { Box, Container, Typography, Grid, Link as MuiLink } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import loLogoDarkMode from '@assets/lo-logo-dark-mode.png';
import loLogoLightMode from '@assets/lo-logo-light-mode.png';

const FooterContainer = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	color: theme.palette.text.secondary,
	borderTop: `1px solid ${theme.palette.divider}`,
	paddingTop: theme.spacing(6),
	paddingBottom: theme.spacing(6),
	marginTop: theme.spacing(8),
}));

const LogoImage = styled('img')({
	width: 100,
	height: 100,
	marginBottom: 16,
	transition: 'transform 0.2s ease-in-out',
	'&:hover': {
		transform: 'scale(1.05)',
	},
});

const FooterLink = styled(MuiLink)(({ theme }) => ({
	color: theme.palette.text.secondary,
	textDecoration: 'none',
	'&:hover': {
		color: theme.palette.primary.main,
	},
}));

const FooterRouterLink = styled(RouterLink)(({ theme }) => ({
	color: theme.palette.text.secondary,
	textDecoration: 'none',
	margin: theme.spacing(0, 2),
	'&:hover': {
		color: theme.palette.primary.main,
	},
}));

const Footer: React.FC = () => {
	const theme = useTheme();
	const smallLogo = theme.palette.mode === 'dark'
		? loLogoDarkMode
		: loLogoLightMode;

	return (
		<FooterContainer>
			<Container maxWidth="lg">
				<Grid container spacing={4} justifyContent="center">
					<Grid item xs={12} textAlign="center">
						<LogoImage
							src={smallLogo}
							alt="Local Operator Logo"
						/>
						<Typography variant="body2" sx={{ mb: 2 }}>
							Empowering humans with local AI assistance
						</Typography>
						<Box sx={{ mb: 2 }}>
							<FooterLink href="#features" sx={{ mx: 2 }}>Features</FooterLink>
							<FooterLink href="#examples" sx={{ mx: 2 }}>Examples</FooterLink>
							<FooterLink href="#getstarted" sx={{ mx: 2 }}>Get Started</FooterLink>
						</Box>
						<Box sx={{ mb: 2 }}>
							<FooterRouterLink to="/privacy-policy">Privacy Policy</FooterRouterLink>
							<FooterRouterLink to="/terms-and-conditions">Terms & Conditions</FooterRouterLink>
						</Box>
						<Typography variant="body2" color="text.secondary">
							&copy; {new Date().getFullYear()} Local Operator. All rights reserved.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</FooterContainer>
	);
};

export default Footer;
