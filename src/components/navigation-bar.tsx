import { useState, useEffect, useCallback } from "react";
import {
	AppBar,
	Container,
	Toolbar,
	Button,
	Typography,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	useMediaQuery,
	Box,
	Divider,
	alpha,
} from "@mui/material";
import { useTheme, styled, keyframes } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import navigationLogo from "@assets/apple-icon-180x180.png";
import { Link as RouterLink } from "react-router-dom";

const navItems = [
	{ id: "about", label: "About" },
	{ id: "examples", label: "Examples" },
	{ id: "features", label: "Features" },
	{ id: "getstarted", label: "Get Started" },
	{ id: "media-feed", label: "Community" },
];


/**
 * Pulse animation for the logo
 */
const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0.4);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(var(--primary-rgb), 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0);
  }
`;

const LogoImage = styled("img", {
	shouldForwardProp: (prop) => prop !== "expanded",
})<{ expanded: boolean }>(({ theme, expanded }) => {
	// Extract RGB values from primary color for use in animations
	const primaryColor = theme.palette.primary.main;
	const primaryRgb = primaryColor
		.replace(
			/^#?([a-f\d])([a-f\d])([a-f\d])$/i,
			(_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`,
		)
		.substring(1)
		.match(/.{2}/g)
		?.map((x) => Number.parseInt(x, 16))
		.join(", ");

	return {
		height: 34,
    width: 34,
		marginRight: expanded ? theme.spacing(1.5) : 0,
		transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
		filter: `drop-shadow(0 0 8px ${alpha(theme.palette.primary.main, 0.3)})`,
		position: "relative",
		zIndex: 2,
		"--primary-rgb": primaryRgb, // CSS variable for use in keyframes
		"&:hover": {
			transform: "scale(1.12) rotate(5deg)",
			filter: `drop-shadow(0 0 12px ${alpha(theme.palette.primary.main, 0.5)})`,
			animation: `${pulse} 1.5s infinite`,
		},
	};
});

/**
 * Static AppBar component that stays at the top of the page
 */
const StaticAppBar = styled(AppBar)(() => ({
	borderBottom: '1px solid rgba(255,255,255,0.1)',
}));

/**
 * NavigationBar component that appears at the top of the page
 */
const NavigationBar: React.FC = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const smallLogo = navigationLogo;
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

	/**
	 * Handles navigation to a section
	 * If on the main page, smoothly scrolls to the section
	 * If on another page, navigates to the main page with the section hash
	 */
	const navigateToSection = (sectionId: string) => {
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
			}
		} else {
			// If not on the main page, navigate to the main page with the section hash
			// Clear active section before navigating
			setActiveSection("");
			
			// Use window.location.replace to ensure a full page reload
			// This is important for the hash to be processed correctly
			if (sectionId) {
				window.location.replace(`/#${sectionId}`);
			} else {
				window.location.replace("/");
			}
		}
	};

	const [drawerOpen, setDrawerOpen] = useState(false);
	const toggleDrawer =
		(open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "Shift")
			) {
				return;
			}
			setDrawerOpen(open);
		};
	const drawer = (
		<nav>
			<Box
				component="div"
				sx={{
					width: 280,
					height: "100%",
					bgcolor: "rgba(10,10,10,0.8)",
					borderRight: "1px solid",
					borderColor: "divider",
					backdropFilter: "blur(10px)",
				}}
			>
				<Box
					sx={{
						p: 3,
						display: "flex",
						alignItems: "center",
						gap: 2,
					}}
				>
					<RouterLink to="/#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 2 }} onClick={() => setDrawerOpen(false)}>
						<LogoImage
							src={smallLogo}
							alt="Local Operator Logo"
							expanded={true}
							width={32}
							height={32}
						/>
						<Typography variant="gradientTitle">
							Local Operator
						</Typography>
					</RouterLink>
				</Box>
				<Divider sx={{ opacity: 0.1 }} />
				<List sx={{ p: 2 }}>
					{navItems.map((item) => {
						// Check if this is the current section
						const isActive = activeSection === item.id;
						return (
							<ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
								<ListItemButton
									onClick={() => {
										navigateToSection(item.id);
										setDrawerOpen(false);
									}}
									sx={{
										"& .MuiTypography-root": {
											color: isActive ? 'primary.main' : 'inherit',
											fontWeight: isActive ? 600 : 500,
										}
									}}
								>
									<ListItemText
										primary={
											<Typography>
												{item.label}
											</Typography>
										}
									/>
								</ListItemButton>
							</ListItem>
						);
					})}
					<Divider sx={{ my: 2, opacity: 0.1 }} />
					<ListItem disablePadding sx={{ mb: 1 }}>
						<ListItemButton
							component={RouterLink}
							to={window.location.pathname === "/privacy-policy" ? "/#privacy" : "/privacy-policy#"}
							onClick={(e) => {
								if (window.location.pathname === "/privacy-policy") {
									e.preventDefault();
									window.scrollTo({ top: 0, behavior: "smooth" });
								}
								setDrawerOpen(false);
							}}
							sx={{
								"& .MuiTypography-root": {
									color: window.location.pathname === "/privacy-policy" ? 'primary.main' : 'inherit',
									fontWeight: window.location.pathname === "/privacy-policy" ? 600 : 500,
								}
							}}
						>
							<ListItemText
								primary={
									<Typography>
										Privacy Policy
									</Typography>
								}
							/>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding sx={{ mb: 1 }}>
						<ListItemButton
							component={RouterLink}
							to={window.location.pathname === "/terms-and-conditions" ? "/#terms" : "/terms-and-conditions#"}
							onClick={(e) => {
								if (window.location.pathname === "/terms-and-conditions") {
									e.preventDefault();
									window.scrollTo({ top: 0, behavior: "smooth" });
								}
								setDrawerOpen(false);
							}}
							sx={{
								"& .MuiTypography-root": {
									color: window.location.pathname === "/terms-and-conditions" ? 'primary.main' : 'inherit',
									fontWeight: window.location.pathname === "/terms-and-conditions" ? 600 : 500,
								}
							}}
						>
							<ListItemText
								primary={
									<Typography>
										Terms & Conditions
									</Typography>
								}
							/>
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</nav>
	);

	return (
		<>
			<header>
				<StaticAppBar position="fixed">
					<Container maxWidth="lg">
						<Toolbar sx={{ minHeight: { xs: 56, sm: 80 } }}>
							<Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
								<RouterLink to="/#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
									<LogoImage
										src={smallLogo}
										alt="Local Operator Logo"
										expanded={true}
										width={40}
										height={40}
									/>
									<Typography variant="gradientTitle">
										Local Operator
									</Typography>
								</RouterLink>
							</Box>
							{!isMobile &&
								navItems.map((item) => {
									// Check if this is the current section
									const isActive = activeSection === item.id;
									return (
										<Button
											key={item.id}
											onClick={() => navigateToSection(item.id)}
											size="small"
											variant="nav"
											sx={{
												color: isActive ? 'primary.main' : 'inherit',
												fontWeight: isActive ? 600 : 400,
											}}
										>
											{item.label}
										</Button>
									);
								})}
							{isMobile && (
								<IconButton
									edge="end"
									onClick={toggleDrawer(true)}
									aria-label="Open navigation menu"
								>
									<FontAwesomeIcon icon={faBars} />
								</IconButton>
							)}
						</Toolbar>
					</Container>
				</StaticAppBar>
			</header>
			<Drawer
				anchor="left"
				open={drawerOpen}
				onClose={toggleDrawer(false)}
				PaperProps={{
					sx: {
						bgcolor: "rgba(10,10,10,0.8)",
						backgroundImage: "none",
						backdropFilter: "blur(10px)",
					},
				}}
			>
				{drawer}
			</Drawer>
		</>
	);
};

export default NavigationBar;
