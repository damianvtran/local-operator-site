import { Typography, Grid, Card, CardContent } from "@mui/material";
import Section from "./Section";
import { styled } from "@mui/material/styles";

const FeatureCard = styled(Card)(({ theme }) => ({
	height: "100%",
	backgroundColor: theme.palette.background.paper,
	color: theme.palette.primary.contrastText,
	padding: theme.spacing(2),
	display: "flex",
	flexDirection: "column",
}));

const FeatureBody = styled(Typography)(({ theme }) => ({
	color: theme.palette.caption,
	height: 84,
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
	height: 72,
	marginBottom: theme.spacing(2),
}));

const Features: React.FC = () => {
	return (
		<Section id="features">
			<Typography variant="h3" component="h2" gutterBottom>
				Key Features
			</Typography>
			<Typography variant="body1" sx={{ mb: 4 }}>
				Local Operator equips your device with a robust suite of features:
			</Typography>
			<Grid container spacing={4} justifyContent="center">
				<Grid item xs={12} sm={6} md={4}>
					<FeatureCard>
						<CardContent sx={{ flex: 1 }}>
							<FeatureTitle variant="h5">
								Interactive CLI Interface
							</FeatureTitle>
							<FeatureBody variant="body2">
								Chat with an AI assistant that executes Python code locally through a dynamic command‐line interface.
							</FeatureBody>
						</CardContent>
					</FeatureCard>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<FeatureCard>
						<CardContent sx={{ flex: 1 }}>
							<FeatureTitle variant="h5">
								Server Mode
							</FeatureTitle>
							<FeatureBody variant="body2">
								Run as a FastAPI server to interact with the agent via a web interface, enabling secure remote access.
							</FeatureBody>
						</CardContent>
					</FeatureCard>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<FeatureCard>
						<CardContent sx={{ flex: 1 }}>
							<FeatureTitle variant="h5">
								Code Safety Verification
							</FeatureTitle>
							<FeatureBody variant="body2">
								Leverages built-in safety checks that analyze code for dangerous operations and prompt for user confirmation.
							</FeatureBody>
						</CardContent>
					</FeatureCard>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<FeatureCard>
						<CardContent sx={{ flex: 1 }}>
							<FeatureTitle variant="h5">
								Contextual Execution
							</FeatureTitle>
							<FeatureBody variant="body2">
								Maintains execution context between code blocks, enabling seamless multi-step tasks with self-correction.
							</FeatureBody>
						</CardContent>
					</FeatureCard>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<FeatureCard>
						<CardContent sx={{ flex: 1 }}>
							<FeatureTitle variant="h5">
								Conversation History
							</FeatureTitle>
							<FeatureBody variant="body2">
								Tracks your complete interaction history for context-aware and continuous conversation with the agent.
							</FeatureBody>
						</CardContent>
					</FeatureCard>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<FeatureCard>
						<CardContent sx={{ flex: 1 }}>
							<FeatureTitle variant="h5">
								Local Model Support
							</FeatureTitle>
							<FeatureBody variant="body2">
								Supports on-device execution using local models like Ollama, providing enhanced privacy and performance.
							</FeatureBody>
						</CardContent>
					</FeatureCard>
				</Grid>
			</Grid>
		</Section>
	);
};

export default Features;