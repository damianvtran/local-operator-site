import About from "./components/About";
import Splash from "./components/Splash";
import Features from "./components/Features";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import { Box, Container } from "@mui/material";

const App: React.FC = () => {
	return (
		<Box>
			<NavigationBar />
			<Splash />
			<Container sx={{ my: 4 }}>
				<About />
				<Features />
				<GetStarted />
			</Container>
			<Footer />
		</Box>
	);
};

export default App;
