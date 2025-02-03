import { Typography, Button } from "@mui/material";
import Section from "./Section";

const About: React.FC = () => {
	return (
		<Section id="about">
			<Typography variant="h3" component="h2" gutterBottom>
				About Local Operator
			</Typography>
			<Typography variant="body1" sx={{ mb: 3 }}>
				Local Operator is an open source Python environment for on-device agents.
				It leverages a conversational chat interface with agentic planning to execute code
				sequentially with self-correction—all while providing a safe, local execution environment.
			</Typography>
			<Button variant="contained" color="primary">
				Explore the Docs
			</Button>
		</Section>
	);
};

export default About;
