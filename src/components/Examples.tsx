import { Typography, Box } from "@mui/material";
import Section from "./Section";
import loMpgExample from "../../public/lo-mpg-example.gif";
import loGitExample from "../../public/lo-git-example.gif";

const examples = [
	{
		id: "overview-dashboard",
		image: loMpgExample,
		caption: "Agentic model experimentation with Local Operator.",
	},
	{
		id: "detailed-features",
		image: loGitExample,
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