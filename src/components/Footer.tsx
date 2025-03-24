import { Box, Container, Typography, Grid, Link as MuiLink, Stack, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
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
const FooterLink = styled(MuiLink, {
	shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active }) => ({
	color: active ? theme.palette.primary.main : theme.palette.text.secondary,
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
const FooterRouterLink = styled(RouterLink, {
	shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active }) => ({
	color: active ? theme.palette.primary.main : theme.palette.text.secondary,
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
 * Handles navigation to a section
 * If on the main page, smoothly scrolls to the section
 * If on another page, navigates to the main page with the section hash
 * @param sectionId The ID of the section to navigate to
 * @param setActiveSection Function to update the active section state
 */
const handleSectionNavigation = (sectionId: string, setActiveSection?: (id: string) => void) => {
	// Check if we're on the main page
	if (window.location.pathname === "/") {
		const section = document.getElementById(sectionId);
		if (section) {
			const headerOffset = 80;
			const elementPosition = section.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.scrollY - headerOffset;
			
			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth"
			});
		} else {
			// If section not found, scroll to top
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		}
	} else {
		// If not on the main page, navigate to the main page with the section hash
		// Clear active section before navigating
		if (setActiveSection) {
			setActiveSection("");
		}
		
		// Use window.location.replace to ensure a full page reload
		// This is important for the hash to be processed correctly
		if (sectionId) {
			window.location.replace(`/#${sectionId}`);
		} else {
			window.location.replace("/");
		}
	}
};

// Navigation items that match the ones in navigation-bar.tsx
const navItems = [
	{ id: "about", label: "About" },
	{ id: "examples", label: "Examples" },
	{ id: "features", label: "Features" },
	{ id: "getstarted", label: "Get Started" },
	{ id: "media-feed", label: "Community" },
];

/**
 * Footer component that appears at the bottom of all pages
 */
export const Footer: React.FC = () => {
	const theme = useTheme();
	const smallLogo = theme.palette.mode === 'dark'
		? loLogoDarkMode
		: loLogoLightMode;
	
	const [activeSection, setActiveSection] = useState<string>("");

	/**
	 * Determines which section is currently in view based on scroll position
	 */
	const updateActiveSection = useCallback(() => {
		// Only track scroll on main page
		if (window.location.pathname !== "/") {
			// Clear active section if not on main page
			setActiveSection("");
			return;
		}

		// Get all sections
		const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
		
		// If no sections found, return
		if (sections.length === 0) return;

		// Calculate which section is currently in view
		const scrollPosition = window.scrollY + 100; // Add offset for header

		// Find the current section
		for (const section of sections) {
			if (!section) continue;
			
			const sectionTop = section.offsetTop;
			const sectionHeight = section.offsetHeight;
			
			if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
				setActiveSection(section.id);
				return;
			}
		}

		// If we're at the top of the page before any section
		if (scrollPosition < (sections[0]?.offsetTop || 0)) {
			setActiveSection("");
		}
	}, []);

	// Add scroll event listener and pathname change listener
	useEffect(() => {
		// Check pathname on mount and clear active section if not on main page
		if (window.location.pathname !== "/") {
			setActiveSection("");
		}

		window.addEventListener("scroll", updateActiveSection);
		// Initial check
		updateActiveSection();
		
		return () => {
			window.removeEventListener("scroll", updateActiveSection);
		};
	}, [updateActiveSection]);

	// Get current pathname
	const currentPath = window.location.pathname;

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
								onClick={() => {
									if (currentPath === "/") {
										window.scrollTo({ top: 0, behavior: "smooth" });
									} else {
										window.location.href = "/";
									}
								}}
								style={{ cursor: "pointer" }}
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
						<FooterLink 
							href="#features" 
							active={activeSection === "features"}
							onClick={(e) => {
								e.preventDefault();
								handleSectionNavigation("features", setActiveSection);
							}}
						>
							Features
						</FooterLink>
						<FooterLink 
							href="#examples" 
							active={activeSection === "examples"}
							onClick={(e) => {
								e.preventDefault();
								handleSectionNavigation("examples", setActiveSection);
							}}
						>
							Examples
						</FooterLink>
						<FooterLink 
							href="#getstarted" 
							active={activeSection === "getstarted"}
							onClick={(e) => {
								e.preventDefault();
								handleSectionNavigation("getstarted", setActiveSection);
							}}
						>
							Get Started
						</FooterLink>
						<FooterLink 
							href="#media-feed" 
							active={activeSection === "media-feed"}
							onClick={(e) => {
								e.preventDefault();
								handleSectionNavigation("media-feed", setActiveSection);
							}}
						>
							Community
						</FooterLink>
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
						<FooterRouterLink 
							to="/privacy-policy" 
							active={currentPath === "/privacy-policy"}
							onClick={(e) => {
								if (currentPath === "/privacy-policy") {
									e.preventDefault();
									window.scrollTo({ top: 0, behavior: "smooth" });
								}
							}}
						>
							Privacy Policy
						</FooterRouterLink>
						<FooterRouterLink 
							to="/terms-and-conditions" 
							active={currentPath === "/terms-and-conditions"}
							onClick={(e) => {
								if (currentPath === "/terms-and-conditions") {
									e.preventDefault();
									window.scrollTo({ top: 0, behavior: "smooth" });
								}
							}}
						>
							Terms & Conditions
						</FooterRouterLink>
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
