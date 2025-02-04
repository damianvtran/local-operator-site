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
	Box,
	useMediaQuery,
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
		<Box onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} sx={{ width: 250 }}>
			<List>
				{navItems.map((item) => (
					<ListItem key={item.id} disablePadding>
						<ListItemButton onClick={() => handleScroll(item.id)}>
							<ListItemText primary={item.label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<>
			<AppBar position="static">
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
						>
							<FontAwesomeIcon icon={faBars} />
						</IconButton>
					)}
				</Toolbar>
			</AppBar>
			<Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
				{drawer}
			</Drawer>
		</>
	);
};

export default NavigationBar; 