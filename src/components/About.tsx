import { Typography, Button } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Section from "./Section";

const About: React.FC = () => {
	return (
		<Section id="about">
			<Typography variant="h3" component="h2" gutterBottom>
				About Local Operator
			</Typography>
			<Typography variant="body1" sx={{ mb: 3 }}>
				Local Operator is a Python-based agent that runs locally on your device, enabling secure execution of commands through a conversational chat interface. The agent plans a series of steps to achieve a user goal and executes the code sequentially with self-correction. With built-in safety checks and user confirmation prompts, it ensures a safe environment for running Python code. It supports both local models (e.g., via Ollama) and cloud-hosted models from providers like OpenAI and DeepSeek.
				<br /><br />
				This project is open source, licensed under the MIT License, and free to use. We welcome your feedback and contributions to help make advanced AI tools accessible to everyone.
			</Typography>
			<Button 
				variant="contained" 
				color="primary"
				href="https://github.com/damianvtran/local-operator"
				target="_blank"
				startIcon={<FontAwesomeIcon icon={faGithub} />}
			>
				View on GitHub
			</Button>
		</Section>
	);
};

export default About;
