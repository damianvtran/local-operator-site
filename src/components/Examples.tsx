import { Typography, Grid, Card, CardContent, CardMedia, Dialog } from "@mui/material";
import Section from "./Section";
import loMpgExample from "@assets/lo-mpg-example.gif";
import loGitExample from "@assets/lo-git-example.gif";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const ExampleCard = styled(Card)(({ theme }) => ({
	height: "100%",
	backgroundColor: theme.palette.background.paper,
	borderRadius: 16,
	overflow: "hidden",
	transition: "transform 0.2s ease-in-out",
	cursor: "pointer",
	"&:hover": {
		transform: "translateY(-4px)",
	},
}));

const ExampleMedia = styled(CardMedia)({
	height: 0,
	paddingTop: "64%",
	backgroundSize: "cover",
	backgroundPosition: "top",
});

const ExampleContent = styled(CardContent)(({ theme }) => ({
	padding: theme.spacing(3),
}));

const ExampleTitle = styled(Typography)(({ theme }) => ({
	fontWeight: 600,
	marginBottom: theme.spacing(1),
	color: theme.palette.text.primary,
}));

const ExampleDescription = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.secondary,
	lineHeight: 1.6,
}));

const FullscreenMedia = styled(CardMedia)({
	width: '100%',
	height: '100%',
	backgroundSize: 'contain',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
});

const examples = [
	{
		id: "overview-dashboard",
		image: loMpgExample,
		title: "Agentic Model Experimentation",
		description: "A user asks the agent to experiment with a few different machine learning approaches to find the best fit for a dataset. The model creates its own script on the fly, analyzes the results in steps, and then selects the best performing approach on its own.",
	},
	{
		id: "detailed-features",
		image: loGitExample,
		title: "Local Git Automation",
		description: "A user asks the agent to review the unstaged diffs in the repository, come up with a suitable commit message, and then stage, commit, and push the changes to the remote repository.",
	},
];

const Examples: React.FC = () => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const handleCardClick = (image: string) => {
		setSelectedImage(image);
	};

	const handleClose = () => {
		setSelectedImage(null);
	};

	return (
		<Section id="examples">
			<Typography variant="h3" component="h2" gutterBottom>
				Examples
			</Typography>
			<Typography variant="body1" sx={{ mb: 6, maxWidth: 800, mx: "auto" }}>
				See Local Operator in action with these real-world examples
			</Typography>
			<Grid container spacing={4}>
				{examples.map((example) => (
					<Grid item xs={12} key={example.id}>
						<ExampleCard elevation={0} onClick={() => handleCardClick(example.image)}>
							<ExampleMedia
								image={example.image}
								title={example.title}
							/>
							<ExampleContent>
								<ExampleTitle variant="h5">
									{example.title}
								</ExampleTitle>
								<ExampleDescription variant="body2">
									{example.description}
								</ExampleDescription>
							</ExampleContent>
						</ExampleCard>
					</Grid>
				))}
			</Grid>

			<Dialog
				open={!!selectedImage}
				onClose={handleClose}
				maxWidth="xl"
				fullWidth
				onClick={handleClose}
			>
				<FullscreenMedia
					image={selectedImage || ''}
					sx={{ height: { xs: '50vh', sm: '80vh' } }}
				/>
			</Dialog>
		</Section>
	);
};

export default Examples;