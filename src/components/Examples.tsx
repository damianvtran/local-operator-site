import { Typography, Box } from "@mui/material";
import Section from "./Section";
import loMpgExample from "@assets/lo-mpg-example.gif";
import loGitExample from "@assets/lo-git-example.gif";
import { styled } from "@mui/material/styles";

const CaptionText = styled(Typography)(({ theme }) => ({
	color: theme.palette.caption,
}));

const examples = [
	{
		id: "overview-dashboard",
		image: loMpgExample,
		captionTitle: "Agentic Model Experimentation",
		caption: "A user asks the agent to experiment with a few different machine learning approaches to find the best fit for a dataset.  The model creates its own script on the fly, analyzes the results in steps, and then selects the best performing approach on its own.",
	},
	{
		id: "detailed-features",
		image: loGitExample,
		captionTitle: "Local Git Automation",
		caption: "A user asks the agent to review the unstaged diffs in the repository, come up with a suitable commit message, and then stage, commit, and push the changes to the remote repository.",
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
					<Box sx={{ mt: 1 }}>
						<Typography variant="h6" gutterBottom>
							{example.captionTitle}
						</Typography>
						<CaptionText variant="body1">
							{example.caption}
						</CaptionText>
					</Box>
				</Box>
			))}
		</Section>
	);
};

export default Examples;