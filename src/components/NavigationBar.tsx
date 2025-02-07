import { useState } from "react";
import {
	AppBar,
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
import { useTheme } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import loLogoDarkMode from "@assets/lo-logo-dark-mode.png";
import loLogoLightMode from "@assets/lo-logo-light-mode.png";

const navItems = [
	{ id: "about", label: "About" },
	{ id: "features", label: "Features" },
	{ id: "examples", label: "Examples" },
	{ id: "getstarted", label: "Get Started" },
];

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
					bgcolor: "background.paper",
					borderRight: "1px solid",
					borderColor: "divider",
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
					<Typography variant="h6" sx={{ fontWeight: 600 }}>
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
								sx={{
									borderRadius: 1,
									"&:hover": {
										bgcolor: "action.hover",
									},
									py: 1.5,
								}}
							>
								<ListItemText
									primary={item.label}
									primaryTypographyProps={{
										sx: { fontWeight: 500 }
									}}
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
				<AppBar position="fixed" sx={{ top: 0 }}>
					<Toolbar sx={{ minHeight: { xs: 56, sm: 80 } }}>
						<img
							src={smallLogo}
							alt="Local Operator Logo"
							style={{ width: 60, height: 60, marginRight: "8px" }}
						/>
						<Typography variant="h6" sx={{ flexGrow: 1 }}>
							Local Operator
						</Typography>
						{!isMobile &&
							navItems.map((item) => (
								<Button
									key={item.id}
									color="inherit"
									onClick={() => handleScroll(item.id)}
									size="small"
								>
									{item.label}
								</Button>
							))}
						{isMobile && (
							<IconButton
								color="inherit"
								edge="end"
								onClick={toggleDrawer(true)}
								sx={{ mr: 1 }}
								aria-label="Open navigation menu"
							>
								<FontAwesomeIcon icon={faBars} />
							</IconButton>
						)}
					</Toolbar>
				</AppBar>
			</header>
			<Drawer
				anchor="left"
				open={drawerOpen}
				onClose={toggleDrawer(false)}
				PaperProps={{
					sx: {
						bgcolor: "background.paper",
						backgroundImage: "none",
					}
				}}
			>
				{drawer}
			</Drawer>
		</>
	);
};

export default NavigationBar;