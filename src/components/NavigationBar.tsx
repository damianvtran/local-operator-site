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
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import loLogoDarkMode from "@assets/lo-logo-dark-mode.png";
import loLogoLightMode from "@assets/lo-logo-light-mode.png";

const navItems = [
	{ id: "about", label: "About" },
	{ id: "features", label: "Features" },
	{ id: "examples", label: "Examples" },
	{ id: "getstarted", label: "Get Started" },
	{ id: "media-feed", label: "Community" },
];

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
	const smallLogo =
		theme.palette.mode === "dark" ? loLogoDarkMode : loLogoLightMode;

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
					<img
						src={smallLogo}
						alt="Local Operator Logo"
						style={{ width: 40, height: 40 }}
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
							<img
								src={smallLogo}
								alt="Local Operator Logo"
								style={{ width: 60, height: 60, marginRight: "8px" }}
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
