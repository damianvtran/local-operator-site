import { Typography, Button, Box, Paper, Container } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import Section from "./Section";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { DownloadButton } from "./download-button";

const InstallBox = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(3),
	backgroundColor: theme.palette.background.paper,
	borderRadius: 16,
	marginBottom: theme.spacing(4),
	'& code': {
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(2),
		borderRadius: 8,
		display: 'block',
		margin: theme.spacing(2, 0),
		fontSize: '1.1rem',
		textAlign: 'center'
	}
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

const GetStarted: React.FC = () => {
	return (
		<Section id="getstarted">
			<Container maxWidth="md">
				<Box textAlign="center" mb={6}>
					<Typography 
						variant="h3" 
						component="h2" 
						gutterBottom
						sx={{ 
							fontWeight: 700,
							background: 'linear-gradient(90deg, #38C96A 30%, #26BC85 90%)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent'
						}}
					>
						Ready to Get Started?
					</Typography>
					<Typography variant="h6" color="textSecondary" sx={{ mb: 4 }}>
						Begin your journey with Local Operator in just a few steps
					</Typography>
				</Box>

				<InstallBox elevation={2}>
					<Typography variant="h6" gutterBottom fontWeight={600}>
						Download Local Operator
					</Typography>
					<Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
						Get the latest version for your operating system and start using Local Operator right away.
					</Typography>
					<Box textAlign="center" mb={2}>
						<DownloadButton />
					</Box>
				</InstallBox>

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

export default GetStarted;
