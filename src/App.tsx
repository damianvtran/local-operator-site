import About from "@components/About";
import Splash from "@components/Splash";
import Features from "@components/Features";
import GetStarted from "@components/GetStarted";
import Examples from "@components/Examples";
import Footer from "@components/Footer";
import NavigationBar from "@components/NavigationBar";
import SEO from "@components/SEO";
import GoogleAnalytics from "@components/GoogleAnalytics";
import { Box, Container } from "@mui/material";

const App: React.FC = () => {
	return (
		<Box>
			<SEO />
			<GoogleAnalytics />
			<NavigationBar />
			<Splash />
			<Container sx={{ my: 4 }}>
				<About />
				<Features />
				<Examples />
				<GetStarted />
			</Container>
			<Footer />
		</Box>
	);
};

export default App;
