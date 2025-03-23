import { useState } from "react";
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
import navigationLogo from "@assets/apple-icon-180x180.png"

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

	const handleScroll = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
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
				</Box>
				<Divider sx={{ opacity: 0.1 }} />
				<List sx={{ p: 2 }}>
					{navItems.map((item) => (
						<ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
							<ListItemButton
								onClick={() => {
									handleScroll(item.id);
									setDrawerOpen(false);
								}}
							>
								<ListItemText
									primary={
										<Typography sx={{ fontWeight: 500 }}>
											{item.label}
										</Typography>
									}
								/>
							</ListItemButton>
						</ListItem>
					))}
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
							<LogoImage
								src={smallLogo}
								alt="Local Operator Logo"
								expanded={true}
								width={40}
								height={40}
							/>
							<Typography variant="gradientTitle" sx={{ flexGrow: 1 }}>
								Local Operator
							</Typography>
							{!isMobile &&
								navItems.map((item) => (
									<Button
										key={item.id}
										onClick={() => handleScroll(item.id)}
										size="small"
										variant="nav"
									>
										{item.label}
									</Button>
								))}
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
