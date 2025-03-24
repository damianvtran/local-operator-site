import { Box, Container, Typography, Button, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { DownloadButton } from "./download-button";
import uiPreview from "/public/ui-preview.png";

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedPreview = styled("img")(({ theme }) => ({
  animation: `${fadeInLeft} 1.2s ease-out forwards`,
  opacity: 0,
  height: 'auto', // Reduced height to ensure proper spacing
  width: '110%',
  objectFit: 'contain',
  filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5))',
  transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.4s ease-in-out',
  borderRadius: '16px',
  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'}`,
  '&:hover': {
    transform: 'scale(1.03) translateY(-8px)',
    filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.6))',
  },
  [theme.breakpoints.between('md', 'lg')]: {
    width: '90%', // Match width with CTA box at md breakpoint
    maxWidth: '100%',
  },
  [theme.breakpoints.up('lg')]: {
    height: 'calc(100vh - 180px)',
    width: 'auto',
  }
}));

const AnimatedContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'delay',
})<{ delay?: string }>(({ delay = '0.5s' }) => ({
  animation: `${fadeIn} 1.5s ease-out forwards`,
  opacity: 0,
  animationDelay: delay
}));

const AnimatedLeftContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'delay',
})<{ delay?: string }>(({ delay = '0.3s' }) => ({
  animation: `${fadeInRight} 1.2s ease-out forwards`,
  opacity: 0,
  animationDelay: delay
}));

const AnimatedRightContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'delay',
})<{ delay?: string }>(({ delay = '0.3s' }) => ({
  animation: `${fadeInLeft} 1.2s ease-out forwards`,
  opacity: 0,
  animationDelay: delay
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(90deg, #38C96A 30%, #26BC85 90%)'
    : 'linear-gradient(90deg, #2A9D54 30%, #1A8A61 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  textShadow: '0 0 30px rgba(56, 201, 106, 0.2)'
}));

const GlassPanel = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark' 
    ? 'rgba(20, 20, 20, 0.7)' 
    : 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: '24px',
  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
  padding: theme.spacing(4),
  boxShadow: theme.palette.mode === 'dark'
    ? '0 10px 30px rgba(0, 0, 0, 0.3)'
    : '0 10px 30px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.between('md', 'lg')]: {
    padding: theme.spacing(5), // Increase padding at md breakpoint
    maxWidth: '90%', // Limit width at md breakpoint
    margin: '0 auto', // Center the panel
  }
}));

const ActionButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  borderRadius: 12,
  textTransform: 'none',
  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
  fontWeight: 600,
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 16px rgba(56, 201, 106, 0.25)'
  }
}));

const FeatureBadge = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: theme.spacing(0.75, 2),
  borderRadius: 20,
  fontSize: '0.875rem',
  fontWeight: 500,
  marginBottom: theme.spacing(2),
  background: 'rgba(56, 201, 106, 0.15)',
  border: '1px solid rgba(56, 201, 106, 0.3)',
  color: theme.palette.primary.light,
}));

// Main wrapper with background gradient
const MainWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.primary.contrastText,
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'flex-start',
  position: 'relative',
  overflow: 'hidden',
  paddingTop: theme.spacing(8),
  [theme.breakpoints.between('md', 'lg')]: {
    paddingTop: theme.spacing(10), // Add top padding at md-lg breakpoints to prevent navigation overlap
    alignItems: 'center',
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: theme.palette.mode === 'dark'
      ? 'radial-gradient(circle at 30% 30%, rgba(56, 201, 106, 0.15) 0%, rgba(0, 0, 0, 0) 70%), radial-gradient(circle at 70% 70%, rgba(38, 188, 133, 0.1) 0%, rgba(0, 0, 0, 0) 70%)'
      : 'radial-gradient(circle at 30% 30%, rgba(56, 201, 106, 0.08) 0%, rgba(255, 255, 255, 0) 70%), radial-gradient(circle at 70% 70%, rgba(38, 188, 133, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
    zIndex: 1
  }
}));

// Container with positioning and padding
const ContentContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6)
  }
}));

// Mobile layout container
const MobileLayout = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  marginTop: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(6)
  }
}));

// Mobile heading text
const MobileHeadingText = styled(GradientText)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.5rem'
  }
}));

// Mobile subheading text
const MobileSubheadingText = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  marginBottom: theme.spacing(4),
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.5rem'
  }
}));

// Preview image container for mobile
const MobilePreviewContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  marginTop: theme.spacing(2),
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  }
}));

// Mobile buttons container
const MobileButtonsContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16
});

// Mobile animated content wrapper
const MobileAnimatedContentWrapper = styled(AnimatedContent)({
  marginTop: 16,
  width: '100%'
});

// Desktop grid container
const DesktopGridContainer = styled(Grid)({
  minHeight: '90vh'
});

// Desktop left grid item
const DesktopLeftGridItem = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(6)
  }
}));

// Desktop heading text
const DesktopHeadingText = styled(GradientText)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  lineHeight: 1.2,
  [theme.breakpoints.up('md')]: {
    fontSize: '2.75rem'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3.25rem'
  }
}));

// Desktop subheading text
const DesktopSubheadingText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  lineHeight: 1.5,
  [theme.breakpoints.up('md')]: {
    fontSize: '1.25rem'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.5rem'
  }
}));

// Desktop buttons container
const DesktopButtonsContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isTablet',
})<{ isTablet: boolean }>(({ isTablet, theme }) => ({
  display: 'flex',
  flexDirection: isTablet ? 'column' : 'row',
  gap: theme.spacing(2)
}));

// Desktop preview container
const DesktopPreviewContainer = styled(Box)(({ theme }) => ({
  height: 'auto',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  margin: 'auto 0', // Center vertically
  paddingLeft: theme.spacing(0),
  paddingTop: theme.spacing(2.5), // Add top padding to shift image down by 20px
  [theme.breakpoints.between('md', 'lg')]: {
    paddingTop: theme.spacing(5), // Increase top padding at md breakpoint
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4), // Add margin top to move it down further
  },
  [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(8),
    paddingRight: theme.spacing(4),
    justifyContent: 'flex-start',
    height: 'calc(100vh - 160px)', // Reduced height to avoid touching nav bar
    marginTop: 0,
  }
}));

// Learn more button icon container
const LearnMoreButtonIconContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 8
});

export const Splash: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const scrollToAbout = () => {
    window.location.href = "/#about";
  };
  return (
    <MainWrapper>
      <ContentContainer maxWidth="lg">
        {isMobile ? (
          // Mobile layout - stacked
          <MobileLayout>
            <AnimatedContent delay="0.3s">
              <FeatureBadge>
                Open Source Agentic AI
              </FeatureBadge>
              
              <MobileHeadingText 
                variant="h2"
                gutterBottom
              >
                AI Agent Assistants On Your Device
              </MobileHeadingText>
              
              <MobileSubheadingText 
                variant="h5" 
                gutterBottom
                color="text.secondary"
              >
                Agents Working On Demand with Conversational Intelligence
              </MobileSubheadingText>
            </AnimatedContent>
            
            <MobilePreviewContainer>
              {/* @ts-ignore - MUI Tooltip has type issues */}
              <AnimatedPreview
                src={uiPreview}
                alt="Local Operator UI Preview"
              />
            </MobilePreviewContainer>
            
            <MobileAnimatedContentWrapper delay="0.7s">
              <MobileButtonsContainer>
                <ActionButton
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={scrollToAbout}
                  fullWidth
                  sx={{ maxWidth: '320px' }}
                >
                  <LearnMoreButtonIconContainer>
                    <span>Learn More</span>
                    <FontAwesomeIcon icon={faArrowRight} size="sm" />
                  </LearnMoreButtonIconContainer>
                </ActionButton>
              </MobileButtonsContainer>
            </MobileAnimatedContentWrapper>
          </MobileLayout>
        ) : (
          // Desktop layout - side by side with glass panel
          <DesktopGridContainer container spacing={4} alignItems="center">
            <DesktopLeftGridItem item xs={12} lg={5}>
              <AnimatedLeftContent>
                <GlassPanel>
                  <FeatureBadge>
                    Open Source Agentic AI
                  </FeatureBadge>
                  
                  <DesktopHeadingText 
                    variant="h2"
                    gutterBottom
                  >
                    AI Agent Assistants On Your Device
                  </DesktopHeadingText>
                  
                  <DesktopSubheadingText 
                    variant="h5" 
                    gutterBottom
                    color="text.secondary"
                  >
                    Agents Working On Demand with Conversational Intelligence
                  </DesktopSubheadingText>
                  
                  <DesktopButtonsContainer isTablet={isTablet}>
                    <DownloadButton fullWidth={isTablet} />
                    
                    <ActionButton
                      variant="outlined"
                      color="primary"
                      size="large"
                      onClick={scrollToAbout}
                      fullWidth={isTablet}
                    >
                      <LearnMoreButtonIconContainer>
                        <span>Learn More</span>
                        <FontAwesomeIcon icon={faArrowRight} size="sm" />
                      </LearnMoreButtonIconContainer>
                    </ActionButton>
                  </DesktopButtonsContainer>
                </GlassPanel>
              </AnimatedLeftContent>
            </DesktopLeftGridItem>
            
            <Grid item xs={12} lg={7}>
              <AnimatedRightContent>
                <DesktopPreviewContainer>
                  {/* @ts-ignore - MUI Tooltip has type issues */}
                  <AnimatedPreview
                    src={uiPreview}
                    alt="Local Operator UI Preview"
                  />
                </DesktopPreviewContainer>
              </AnimatedRightContent>
            </Grid>
          </DesktopGridContainer>
        )}
      </ContentContainer>
    </MainWrapper>
  );
};
