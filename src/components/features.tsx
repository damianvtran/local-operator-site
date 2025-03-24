import { Typography, Grid, Card, CardContent, Box } from "@mui/material";
import { Section } from "./section";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
	faTerminal,
	faServer, 
	faShieldHalved,
	faCodeBranch,
	faHistory,
	faDesktop
} from "@fortawesome/free-solid-svg-icons";

const FeatureCard = styled(Card)(({ theme }) => ({
	height: "100%",
	backgroundColor: theme.palette.background.paper,
	color: theme.palette.primary.contrastText,
	transition: "transform 0.2s ease-in-out",
	"&:hover": {
		transform: "translateY(-4px)",
	},
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
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
	fontWeight: 600,
	marginBottom: theme.spacing(1),
	color: theme.palette.text.primary,
}));

const FeatureBody = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.secondary,
	lineHeight: 1.6,
}));

export const Features: React.FC = () => {
	return (
		<Section id="features">
			<Typography variant="h3" component="h2" gutterBottom>
				Useful Features
			</Typography>
			<Typography variant="body1" sx={{ mb: 6, maxWidth: 800, mx: "auto" }}>
				Not just agents, but a new suite of tools to build with agentic AI
			</Typography>
			<Grid container spacing={4} justifyContent="center">
				<Grid item xs={12} sm={6} md={4}>
					<FeatureCard elevation={0}>
						<CardContent sx={{ p: 4, textAlign: "left" }}>
							<IconContainer>
								<FontAwesomeIcon icon={faTerminal} />
							</IconContainer>
							<FeatureTitle variant="h6">
								Interactive CLI Interface
							</FeatureTitle>
							<FeatureBody variant="body2">
								Automate tasks programmatically with agents through a command line interface.
							</FeatureBody>
						</CardContent>
					</FeatureCard>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<FeatureCard elevation={0}>
						<CardContent sx={{ p: 4, textAlign: "left" }}>
							<IconContainer>
								<FontAwesomeIcon icon={faServer} />
							</IconContainer>
							<FeatureTitle variant="h6">
								Server Mode
							</FeatureTitle>
							<FeatureBody variant="body2">
								Run as a FastAPI server to interact with the agents via a web interface, enabling secure remote access.
							</FeatureBody>
						</CardContent>
					</FeatureCard>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<FeatureCard elevation={0}>
						<CardContent sx={{ p: 4, textAlign: "left" }}>
							<IconContainer>
								<FontAwesomeIcon icon={faShieldHalved} />
							</IconContainer>
							<FeatureTitle variant="h6">
								Code Safety Verification
							</FeatureTitle>
							<FeatureBody variant="body2">
								Leverages independent AI safety checks that analyze code for dangerous operations and prompt for user confirmation.
							</FeatureBody>
						</CardContent>
					</FeatureCard>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<FeatureCard elevation={0}>
						<CardContent sx={{ p: 4, textAlign: "left" }}>
							<IconContainer>
								<FontAwesomeIcon icon={faCodeBranch} />
							</IconContainer>
							<FeatureTitle variant="h6">
								Contextual Execution
							</FeatureTitle>
							<FeatureBody variant="body2">
								Maintains execution context between code blocks, enabling seamless multi-step tasks with self-correction.
							</FeatureBody>
						</CardContent>
					</FeatureCard>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<FeatureCard elevation={0}>
						<CardContent sx={{ p: 4, textAlign: "left" }}>
							<IconContainer>
								<FontAwesomeIcon icon={faHistory} />
							</IconContainer>
							<FeatureTitle variant="h6">
								Conversation History
							</FeatureTitle>
							<FeatureBody variant="body2">
								Agents learn from your interaction history for context-aware and continuous conversation, and can be shared with others to replicate your results.
							</FeatureBody>
						</CardContent>
					</FeatureCard>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<FeatureCard elevation={0}>
						<CardContent sx={{ p: 4, textAlign: "left" }}>
							<IconContainer>
								<FontAwesomeIcon icon={faDesktop} />
							</IconContainer>
							<FeatureTitle variant="h6">
								Local Model Support
							</FeatureTitle>
							<FeatureBody variant="body2">
								Supports on-device execution using local models like Ollama, providing enhanced privacy and performance.
							</FeatureBody>
						</CardContent>
					</FeatureCard>
				</Grid>
			</Grid>
		</Section>
	);
};