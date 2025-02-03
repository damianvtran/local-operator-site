import { Typography, Button } from "@mui/material";
import Section from "./Section";

const GetStarted: React.FC = () => {
	return (
		<Section id="getstarted">
			<Typography variant="h3" component="h2" gutterBottom>
				Get Started
			</Typography>
			<Typography variant="body1" sx={{ mb: 3 }}>
				Begin your journey with Local Operator by installing the CLI tool:
				<br /><br />
				<code>pip install local-operator</code>
				<br /><br />
				For detailed instructions, usage examples, and configuration guidance, check out our documentation and consider contributing to the project.
			</Typography>
			<Button
				variant="contained"
				color="secondary"
				href="https://github.com/damianvtran/local-operator"
				target="_blank"
			>
				View Documentation
			</Button>
		</Section>
	);
};

export default GetStarted; 