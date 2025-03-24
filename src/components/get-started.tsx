import { Typography, Button, Box, Paper, Container, useMediaQuery } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import { Section } from "./section";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { DownloadButton } from "./download-button";
import { useTheme } from "@mui/material/styles";

const InstallBox = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(3),
	background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, rgba(16, 19, 23, 0.95) 100%)`,
	boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',
	borderRadius: 16,
	marginBottom: theme.spacing(4),
	border: '1px solid rgba(56, 201, 106, 0.05)',
	position: 'relative',
	overflow: 'hidden',
	'& code': {
		backgroundColor: 'rgba(10, 10, 10, 0.8)',
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

const MobileNotice = styled(Box)(({ theme }) => ({
	padding: theme.spacing(2),
	backgroundColor: 'rgba(56, 201, 106, 0.1)',
	borderRadius: 8,
	border: '1px solid rgba(56, 201, 106, 0.3)',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: theme.spacing(2),
	marginBottom: theme.spacing(2)
}));

export const GetStarted: React.FC = () => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

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
					
					{isDesktop ? (
						<Box textAlign="center" mb={2}>
							<DownloadButton />
						</Box>
					) : (
						<MobileNotice>
							<FontAwesomeIcon icon={faDesktop} size="lg" color={theme.palette.primary.main} />
							<Typography variant="body1">
								Local Operator is currently only available for desktop devices. Please visit this page on your computer to download.
							</Typography>
						</MobileNotice>
					)}
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

