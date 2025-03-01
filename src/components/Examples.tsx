import { Typography, Grid, Card, CardContent, Box, Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import Section from "./Section";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKaggle } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faCode, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

const ExampleCard = styled(Card)(({ theme }) => ({
	height: "100%",
	backgroundColor: theme.palette.background.paper,
	borderRadius: 16,
	overflow: "hidden",
	transition: "transform 0.2s ease-in-out",
	"&:hover": {
		transform: "translateY(-4px)",
	},
}));

const ExampleContent = styled(CardContent)(({ theme }) => ({
	padding: theme.spacing(4),
	height: "100%",
	display: "flex",
	flexDirection: "column",
}));

const ExampleTitle = styled(Typography)(({ theme }) => ({
	fontWeight: 600,
	marginBottom: theme.spacing(1),
	color: theme.palette.text.primary,
	textAlign: "left",
}));

const ExampleDescription = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.secondary,
	lineHeight: 1.6,
	marginBottom: theme.spacing(2),
	flexGrow: 1,
	textAlign: "left",
}));

const IconContainer = styled(Box)(({ theme }) => ({
	width: 48,
	height: 48,
	borderRadius: "50%",
	backgroundColor: "rgba(56, 201, 106, 0.1)",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	marginBottom: theme.spacing(2),
	color: theme.palette.primary.main,
	"& svg": {
		fontSize: "1.5rem",
	},
}));

const ActionButton = styled(Button)<ButtonProps<"a">>(({ theme }) => ({
	padding: theme.spacing(1, 2),
	borderRadius: 8,
	textTransform: 'none',
	'&:hover': {
		transform: 'translateY(-2px)',
		transition: 'transform 0.2s'
	}
}));

const examples = [
	{
		id: "house-price",
		icon: faKaggle,
		title: "Advanced House Price Prediction with XGBoost",
		description: "A Local Operator agent tackles the Kaggle Home Data competition using sophisticated modeling techniques, systematic hyperparameter tuning with XGBoost, and comprehensive cross-validation strategies, achieving a top 5% live submission score.",
		link: "https://www.kaggle.com/code/damianvtran/local-operator-housing-prices-automl-top-5"
	},
	{
		id: "mnist",
		icon: faKaggle,
		title: "MNIST Digit Recognition with Deep Learning",
		description: "An end-to-end solution for the Kaggle Digit Recognizer competition generated from a single question to Local Operator, achieving 99.3% accuracy with CNN architecture, data augmentation, and ensemble methods.",
		link: "https://www.kaggle.com/code/damianvtran/local-operator-mnist-digits-auto-ml-99-3"
	},
  {
		id: "web-research",
		icon: faGlobe,
		title: "Web Research and Data Extraction Techniques",
		description: "A Local Operator agent searches the web for the right source, reads the site content, and implements web scraping techniques on the spot to extract a long list of data, processing semi-structured information into a clean CSV format with verification steps to ensure data completeness.",
		link: "https://github.com/damianvtran/local-operator/blob/main/examples/notebooks/web_research_scraping.ipynb"
	},
	{
		id: "github-pr",
		icon: faCode,
		title: "End-to-End Pull Request Workflow Automation",
		description: "This comprehensive notebook walks through the complete pull request creation process with a Local Operator agent, systematically reviewing code diffs, excluding unstaged changes, properly targeting branches, and completing PR templates.",
		link: "https://github.com/damianvtran/local-operator/blob/main/examples/notebooks/github_pr.ipynb"
	},
	{
		id: "business-pricing",
		icon: faMoneyBill,
		title: "Business Pricing and Margin Calculations",
		description: "A Local Operator agent calculates optimal subscription prices based on costs, margins, and projected increases. It computes costs, revenues, and prices for different tiers, aiding financial planning for SMBs.",
		link: "https://github.com/damianvtran/local-operator/blob/main/examples/notebooks/business_pricing_margin.ipynb"
	},
	{
		id: "titanic",
		icon: faKaggle,
		title: "Titanic Survival Prediction using LightGBM",
		description: "A practical notebook showing a Local Operator agent tackling the classic Kaggle Titanic survival prediction competition with LightGBM, detailed feature engineering, and handling of missing values.",
		link: "https://www.kaggle.com/code/damianvtran/local-operator-titanic-survivors-auto-ml"
	},
];

const Examples: React.FC = () => {
	return (
		<Section id="examples">
			<Typography variant="h3" component="h2" gutterBottom>
				Example Notebooks
			</Typography>
			<Typography variant="body1" sx={{ mb: 6, maxWidth: 800, mx: "auto" }}>
				Explore these Jupyter notebooks showcasing Local Operator's agent capabilities across various domains.
				Each notebook is exported from actual conversations with Local Operator agents performing on-device tasks.
			</Typography>
			<Grid container spacing={4}>
				{examples.map((example) => (
					<Grid item xs={12} md={6} key={example.id}>
						<ExampleCard elevation={0}>
							<ExampleContent>
								<IconContainer>
									<FontAwesomeIcon icon={example.icon} />
								</IconContainer>
								<ExampleTitle variant="h6">
									{example.title}
								</ExampleTitle>
								<ExampleDescription variant="body2">
									{example.description}
								</ExampleDescription>
								<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
									<ActionButton
										variant="outlined"
										color="primary"
										href={example.link}
										rel="noopener noreferrer"
										target="_blank"
									>
										View Notebook
									</ActionButton>
								</Box>
							</ExampleContent>
						</ExampleCard>
					</Grid>
				))}
			</Grid>
		</Section>
	);
};

export default Examples;