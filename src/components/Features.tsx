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

const Features: React.FC = () => {
	const defaultTitleHeight = 72;
	const defaultBodyHeight = 84;

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
							<Typography variant="h5" sx={{ height: defaultTitleHeight, mb: 2 }}>
								Interactive CLI Interface
							</Typography>
							<Typography variant="body2" sx={{ height: defaultBodyHeight }}>
								Chat with an AI assistant that executes Python code locally through a dynamic command‐line interface.
							</Typography>
						</CardContent>
					</FeatureCard>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<FeatureCard>
						<CardContent sx={{ flex: 1 }}>
							<Typography variant="h5" sx={{ height: defaultTitleHeight, mb: 2 }}>
								Server Mode
							</Typography>
							<Typography variant="body2" sx={{ height: defaultBodyHeight }}>
								Run as a FastAPI server to interact with the agent via a web interface, enabling secure remote access.
							</Typography>
						</CardContent>
					</FeatureCard>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<FeatureCard>
						<CardContent sx={{ flex: 1 }}>
							<Typography variant="h5" sx={{ height: defaultTitleHeight, mb: 2 }}>
								Code Safety Verification
							</Typography>
							<Typography variant="body2" sx={{ height: defaultBodyHeight }}>
								Leverages built-in safety checks that analyze code for dangerous operations and prompt for user confirmation.
							</Typography>
						</CardContent>
					</FeatureCard>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<FeatureCard>
						<CardContent sx={{ flex: 1 }}>
							<Typography variant="h5" sx={{ height: defaultTitleHeight, mb: 2 }}>
								Contextual Execution
							</Typography>
							<Typography variant="body2" sx={{ height: defaultBodyHeight }}>
								Maintains execution context between code blocks, enabling seamless multi-step tasks with self-correction.
							</Typography>
						</CardContent>
					</FeatureCard>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<FeatureCard>
						<CardContent sx={{ flex: 1 }}>
							<Typography variant="h5" sx={{ height: defaultTitleHeight, mb: 2 }}>
								Conversation History
							</Typography>
							<Typography variant="body2" sx={{ height: defaultBodyHeight }}>
								Tracks your complete interaction history for context-aware and continuous conversation with the agent.
							</Typography>
						</CardContent>
					</FeatureCard>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<FeatureCard>
						<CardContent sx={{ flex: 1 }}>
							<Typography variant="h5" sx={{ height: defaultTitleHeight, mb: 2 }}>
								Local Model Support
							</Typography>
							<Typography variant="body2" sx={{ height: defaultBodyHeight }}>
								Supports on-device execution using local models like Ollama, providing enhanced privacy and performance.
							</Typography>
						</CardContent>
					</FeatureCard>
				</Grid>
			</Grid>
		</Section>
	);
};

export default Features;