import { Typography, Box } from "@mui/material";
import Section from "./Section";

const examples = [
	{
		id: "overview-dashboard",
		image: "/static/example1.png",
		caption: "Screenshot 1: Overview of the dashboard.",
	},
	{
		id: "detailed-features",
		image: "/static/example2.png",
		caption: "Screenshot 2: Detailed view of the features.",
	},
	{
		id: "interactive-demo",
		image: "/static/example3.png",
		caption: "Screenshot 3: Interactive demonstration of the agent.",
	},
];

const Examples: React.FC = () => {
	return (
		<Section id="examples">
			<Typography variant="h3" component="h2" gutterBottom>
				Examples
			</Typography>
			{examples.map((example) => (
				<Box key={example.id} sx={{ mb: 4 }}>
					<img
						src={example.image}
						alt={`Example ${example.id}`}
						style={{
							maxWidth: "100%",
							display: "block",
							margin: "0 auto",
						}}
					/>
					<Typography variant="body1" sx={{ mt: 1 }}>
						{example.caption}
					</Typography>
				</Box>
			))}
		</Section>
	);
};

export default Examples; 