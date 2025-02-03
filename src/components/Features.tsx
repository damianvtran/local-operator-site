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
				Local Operator empowers you with:
			</Typography>
			<Grid container spacing={4} justifyContent="center">
				<Grid item xs={12} sm={6} md={4}>
					<FeatureCard>
						<CardContent sx={{ flex: 1 }}>
							<Typography variant="h5" sx={{ height: defaultTitleHeight, mb: 2 }}>
								Interactive Interface
							</Typography>
							<Typography variant="body2" sx={{ height: defaultBodyHeight }}>
								Engage with an AI assistant via a dynamic CLI and FastAPI web interface, making it easy to execute commands.
							</Typography>
						</CardContent>
					</FeatureCard>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<FeatureCard>
						<CardContent sx={{ flex: 1 }}>
							<Typography variant="h5" sx={{ height: defaultTitleHeight, mb: 2 }}>
								Intelligent & Safe Execution
							</Typography>
							<Typography variant="body2" sx={{ height: defaultBodyHeight }}>
								Execute multi-step tasks with self-correction and integrated safety checks to ensure secure operations.
							</Typography>
						</CardContent>
					</FeatureCard>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<FeatureCard>
						<CardContent sx={{ flex: 1 }}>
							<Typography variant="h5" sx={{ height: defaultTitleHeight, mb: 2 }}>
								Flexible Model Support
							</Typography>
							<Typography variant="body2" sx={{ height: defaultBodyHeight }}>
								Leverage local models with Ollama or integrate with cloud-hosted solutions like OpenAI and DeepSeek via LangChain.
							</Typography>
						</CardContent>
					</FeatureCard>
				</Grid>
			</Grid>
		</Section>
	);
};

export default Features;