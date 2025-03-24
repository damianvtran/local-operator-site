import { Box, Container, Typography, Grid, Link as MuiLink, Stack, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import loLogoDarkMode from '@assets/lo-logo-dark-mode.png';
import loLogoLightMode from '@assets/lo-logo-light-mode.png';

/**
 * Styled component for the footer container with gradient background
 */
const FooterContainer = styled(Box)(({ theme }) => ({
	background: `linear-gradient(to bottom, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
	color: theme.palette.text.secondary,
	borderTop: `1px solid ${theme.palette.divider}`,
	paddingTop: theme.spacing(8),
	paddingBottom: theme.spacing(6),
	paddingLeft: theme.spacing(8),
  paddingRight: theme.spacing(8),
	marginTop: theme.spacing(8),
}));

/**
 * Styled component for the footer logo
 */
const LogoImage = styled('img')({
	width: 100,
	height: 100,
	marginBottom: 16,
	transition: 'transform 0.2s ease-in-out',
	'&:hover': {
		transform: 'scale(1.05)',
	},
});

/**
 * Styled component for section headings in the footer
 */
const FooterHeading = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.primary,
	fontWeight: 600,
	marginBottom: theme.spacing(2),
	fontSize: '1rem',
}));

/**
 * Styled component for regular links in the footer
 */
const FooterLink = styled(MuiLink)(({ theme }) => ({
	color: theme.palette.text.secondary,
	textDecoration: 'none',
	fontSize: '0.875rem',
	display: 'block',
	marginBottom: theme.spacing(1),
	transition: 'color 0.2s ease-in-out',
	'&:hover': {
		color: theme.palette.primary.main,
	},
}));

/**
 * Styled component for router links in the footer
 */
const FooterRouterLink = styled(RouterLink)(({ theme }) => ({
	color: theme.palette.text.secondary,
	textDecoration: 'none',
	fontSize: '0.875rem',
	display: 'block',
	marginBottom: theme.spacing(1),
	transition: 'color 0.2s ease-in-out',
	'&:hover': {
		color: theme.palette.primary.main,
	},
}));

/**
 * Footer component that appears at the bottom of all pages
 */
const Footer: React.FC = () => {
	const theme = useTheme();
	const smallLogo = theme.palette.mode === 'dark'
		? loLogoDarkMode
		: loLogoLightMode;

	return (
		<FooterContainer>
			<Container maxWidth="lg">
				<Grid container spacing={4}>
					{/* Company Info Column */}
					<Grid item xs={12} md={4}>
						<Stack alignItems={{ xs: 'center', md: 'flex-start' }}>
							<LogoImage
								src={smallLogo}
								alt="Local Operator Logo"
							/>
							<Typography variant="body2" sx={{ mb: 2, textAlign: { xs: 'center', md: 'left' } }}>
								Empowering humans with local AI assistance
							</Typography>
							<Typography variant="body2" sx={{ mb: 1 }}>
								contact@local-operator.com
							</Typography>
						</Stack>
					</Grid>

					{/* Product Column */}
					<Grid item xs={12} sm={6} md={2}>
						<FooterHeading>
							Product
						</FooterHeading>
						<FooterLink href="#features">Features</FooterLink>
						<FooterLink href="#examples">Examples</FooterLink>
						<FooterLink href="#getstarted">Get Started</FooterLink>
						<FooterLink href="#media-feed">Community</FooterLink>
					</Grid>

					{/* Resources Column */}
					<Grid item xs={12} sm={6} md={2}>
						<FooterHeading>
							Resources
						</FooterHeading>
						<FooterLink href="https://github.com/damianvtran/local-operator" target="_blank">Documentation</FooterLink>
						<FooterLink href="https://medium.com/@damianvtran" target="_blank">Blog</FooterLink>
					</Grid>

					{/* Company Column */}
					<Grid item xs={12} sm={6} md={2}>
						<FooterHeading>
							Company
						</FooterHeading>
						<FooterRouterLink to="/privacy-policy">Privacy Policy</FooterRouterLink>
						<FooterRouterLink to="/terms-and-conditions">Terms & Conditions</FooterRouterLink>
					</Grid>

					{/* Connect Column */}
					<Grid item xs={12} sm={6} md={2}>
						<FooterHeading>
							Connect
						</FooterHeading>
						<FooterLink href="https://github.com/damianvtran/local-operator" target="_blank">GitHub</FooterLink>
						<FooterLink href="https://discord.gg/cSXBfBMd" target="_blank">Discord</FooterLink>
					</Grid>
				</Grid>

				<Divider sx={{ my: 4, opacity: 0.1 }} />
				
				<Box sx={{ textAlign: 'center' }}>
					<Typography variant="body2" color="text.secondary">
						&copy; {new Date().getFullYear()} Local Operator. All rights reserved.
					</Typography>
				</Box>
			</Container>
		</FooterContainer>
	);
};

export default Footer;
