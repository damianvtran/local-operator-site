import { Typography, Button, Box, Container, Grid } from "@mui/material";
import type { ButtonProps } from "@mui/material"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptop, faBrain } from '@fortawesome/free-solid-svg-icons';
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
						Limitless AI Assistance
					</Typography>
					<Typography variant="h6" color="textSecondary" sx={{ mb: 4, maxWidth: 800, mx: "auto" }}>
						From casual conversation to complex problem-solving, Local Operator adapts to your needs and works on your device
					</Typography>
				</Box>

				<Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
					<Grid item xs={12} md={4}>
						<IconContainer>
							<FontAwesomeIcon icon={faCode} />
						</IconContainer>
						<FeatureTitle variant="h6">
							Code-Powered Versatility
						</FeatureTitle>
						<Typography variant="body2" color="textSecondary" align="center">
							Uses code as a universal tool to create custom solutions, breaking free from pre-defined capabilities to solve problems creatively
						</Typography>
					</Grid>
					<Grid item xs={12} md={4}>
						<IconContainer>
							<FontAwesomeIcon icon={faLaptop} />
						</IconContainer>
						<FeatureTitle variant="h6">
							Local Environment Access
						</FeatureTitle>
						<Typography variant="body2" color="textSecondary" align="center">
							Works directly with your files and applications without files leaving your device, providing assistance across your entire digital workspace
						</Typography>
					</Grid>
					<Grid item xs={12} md={4}>
						<IconContainer>
							<FontAwesomeIcon icon={faBrain} />
						</IconContainer>
						<FeatureTitle variant="h6">
							Adaptive Intelligence
						</FeatureTitle>
						<Typography variant="body2" color="textSecondary" align="center">
							Plans, reflects, and iteratively improves to handle complex research, analysis, and development tasks
						</Typography>
					</Grid>
				</Grid>

				<HighlightBox>
					<Typography variant="body1" sx={{ textAlign: 'center' }}>
						Switch seamlessly between casual conversation and complex tasks - from telling knock-knock jokes to building comprehensive competitive analysis reports on the fly. One assistant, unlimited capabilities.
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
