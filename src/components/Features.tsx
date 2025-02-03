import { Typography, Grid, Card, CardContent } from "@mui/material";
import Section from "./Section";
import { styled } from "@mui/material/styles";

const FeatureCard = styled(Card)(({ theme }) => ({
	height: "100%",
	backgroundColor: theme.palette.primary.dark,
	color: theme.palette.primary.contrastText,
	padding: theme.spacing(2),
	display: "flex",
	flexDirection: "column",
}));

const Features: React.FC = () => {
	return (
		<Section id="features">
			<Typography variant="h3" component="h2" gutterBottom>
				Features
			</Typography>
			<Typography variant="body1" sx={{ mb: 4 }}>
				Local Operator empowers you with:
			</Typography>
			<Grid container spacing={4} justifyContent="center">
				<Grid item xs={12} sm={6} md={3}>
					<FeatureCard>
						<CardContent sx={{ flex: 1 }}>
							<Typography variant="h5" sx={{ height: 64, mb: 2 }}>
								Conversational Interface
							</Typography>
							<Typography variant="body2" sx={{ height: 48 }}>
								Interact naturally with agents using chat.
							</Typography>
						</CardContent>
					</FeatureCard>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<FeatureCard>
						<CardContent sx={{ flex: 1 }}>
							<Typography variant="h5" sx={{ height: 64, mb: 2 }}>
								Agentic Planning
							</Typography>
							<Typography variant="body2" sx={{ height: 48 }}>
								Execute multi-step tasks with dynamic self-correction.
							</Typography>
						</CardContent>
					</FeatureCard>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<FeatureCard>
						<CardContent sx={{ flex: 1 }}>
							<Typography variant="h5" sx={{ height: 64, mb: 2 }}>
								Safe Execution
							</Typography>
							<Typography variant="body2" sx={{ height: 48 }}>
								Run your code securely and locally without external dependencies.
							</Typography>
						</CardContent>
					</FeatureCard>
				</Grid>
			</Grid>
		</Section>
	);
};

export default Features;