import { Typography, Box } from "@mui/material";
import Section from "./Section";

const examples = [
	{
		id: "overview-dashboard",
		image: "/static/lo-mpg-example.gif",
		caption: "Agentic model experimentation with Local Operator.",
	},
	{
		id: "detailed-features",
		image: "/static/lo-git-example.gif",
		caption: "Local git automation with Local Operator.",
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