import { Typography, Grid, Card, CardContent } from "@mui/material";
import Section from "./Section";

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
					<Card
						sx={{
							height: "100%",
							backgroundColor: "primary.dark",
							color: "primary.contrastText",
							p: 2,
						}}
					>
						<CardContent>
							<Typography variant="h5" gutterBottom>
								Conversational Interface
							</Typography>
							<Typography variant="body2">
								Interact naturally with agents using chat.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<Card
						sx={{
							height: "100%",
							backgroundColor: "primary.dark",
							color: "primary.contrastText",
							p: 2,
						}}
					>
						<CardContent>
							<Typography variant="h5" gutterBottom>
								Agentic Planning
							</Typography>
							<Typography variant="body2">
								Execute multi-step tasks with dynamic self-correction.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<Card
						sx={{
							height: "100%",
							backgroundColor: "primary.dark",
							color: "primary.contrastText",
							p: 2,
						}}
					>
						<CardContent>
							<Typography variant="h5" gutterBottom>
								Safe Execution
							</Typography>
							<Typography variant="body2">
								Run your code securely and locally without external dependencies.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Section>
	);
};

export default Features; 