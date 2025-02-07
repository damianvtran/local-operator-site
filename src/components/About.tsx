import { Typography, Button, Box, Container, Grid } from "@mui/material";
import type { ButtonProps } from "@mui/material"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faShieldHalved, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Section from "./Section";
import { styled } from "@mui/material/styles";

const HighlightBox = styled(Box)(({ theme }) => ({
	padding: theme.spacing(3),
	borderRadius: 16,
	backgroundColor: 'rgba(56, 201, 106, 0.1)',
	marginBottom: theme.spacing(4),
}));

const IconContainer = styled(Box)(({ theme }) => ({
	width: 56,
	height: 56,
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
	marginLeft: "auto",
	marginRight: "auto"
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
	fontWeight: 600,
	marginBottom: theme.spacing(1),
	color: theme.palette.text.primary,
	textAlign: "center"
}));

const ActionButton = styled(Button)<ButtonProps<"a">>(({ theme }) => ({
	padding: theme.spacing(1.5, 4),
	fontSize: '1.1rem',
	borderRadius: 8,
	textTransform: 'none',
	'&:hover': {
		transform: 'translateY(-2px)',
		transition: 'transform 0.2s'
	}
}));

const About: React.FC = () => {
	return (
		<Section id="about">
			<Container maxWidth="lg">
				<Box textAlign="center" mb={6}>
					<Typography 
						variant="h3" 
						component="h2" 
						gutterBottom
						sx={{ 
							fontWeight: 700,
							color: '#FFFFFF'
						}}
					>
						About Local Operator
					</Typography>
					<Typography variant="h6" color="textSecondary" sx={{ mb: 4, maxWidth: 800, mx: "auto" }}>
						Your intelligent Python assistant that runs on your local machine to help you get things done with less effort.
					</Typography>
				</Box>

				<Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
					<Grid item xs={12} md={4}>
						<IconContainer>
							<FontAwesomeIcon icon={faRobot} />
						</IconContainer>
						<FeatureTitle variant="h6">
							AI-Powered Agent
						</FeatureTitle>
						<Typography variant="body2" color="textSecondary" align="center">
							Conversational interface that plans and executes Python code to achieve your goals
						</Typography>
					</Grid>
					<Grid item xs={12} md={4}>
						<IconContainer>
							<FontAwesomeIcon icon={faShieldHalved} />
						</IconContainer>
						<FeatureTitle variant="h6">
							Secure Execution
						</FeatureTitle>
						<Typography variant="body2" color="textSecondary" align="center">
							Built-in safety checks and user confirmation prompts ensure safe code execution
						</Typography>
					</Grid>
					<Grid item xs={12} md={4}>
						<IconContainer>
							<FontAwesomeIcon icon={faCode} />
						</IconContainer>
						<FeatureTitle variant="h6">
							Open Source
						</FeatureTitle>
						<Typography variant="body2" color="textSecondary" align="center">
							MIT Licensed and free to use, with support for both local and cloud-hosted models
						</Typography>
					</Grid>
				</Grid>

				<HighlightBox>
					<Typography variant="body1" sx={{ textAlign: 'center' }}>
						We welcome your feedback and contributions to help make advanced AI tools accessible to everyone.
						Join our community and help shape the future of local AI assistance.
					</Typography>
				</HighlightBox>

				<Box textAlign="center">
					<ActionButton
						variant="contained"
						color="primary"
						href="https://github.com/damianvtran/local-operator"
						component="a"
						rel="noopener noreferrer"
						target="_blank"
						startIcon={<FontAwesomeIcon icon={faGithub} />}
					>
						View on GitHub
					</ActionButton>
				</Box>
			</Container>
		</Section>
	);
};

export default About;
