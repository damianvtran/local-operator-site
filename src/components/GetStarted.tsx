import { Typography, Button } from "@mui/material";
import Section from "./Section";

const GetStarted: React.FC = () => {
	return (
		<Section id="getstarted">
			<Typography variant="h3" component="h2" gutterBottom>
				Get Started
			</Typography>
			<Typography variant="body1" sx={{ mb: 3 }}>
				Dive into Local Operator by reading the documentation, cloning the repository,
				and contributing to the project. Join our community to help shape the future of
				on-device agentic planning.
			</Typography>
			<Button
				variant="contained"
				color="secondary"
				href="https://github.com/local-operator/local-operator"
				target="_blank"
			>
				View on GitHub
			</Button>
		</Section>
	);
};

export default GetStarted; 