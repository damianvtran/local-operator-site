import { Typography, Box, Card, CardContent } from "@mui/material";
import Section from "./Section";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGamepad, 
  faChartLine, 
  faBuilding, 
  faMoneyBillWave, 
  faVideo, 
  faLightbulb 
} from '@fortawesome/free-solid-svg-icons';

// Import video assets
import coderSpaceInvaders from "../assets/coder-space-invaders.mov";
import kaggleDataScience from "../assets/kaggle-data-science-house-prices.mov";
import mikeCompetitiveLandscape from "../assets/mike-competitive-landscape.mov";
import bobPortfolioValue from "../assets/bob-portfolio-value.mov";
import gracieHairMakeup from "../assets/gracie-hair-makeup.mov";
import mediaMaster from "../assets/media-master.mov";

const ScrollContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    maxHeight: "none",
    paddingRight: 0,
  }
}));

const VideoCard = styled(Card)(({ theme }) => ({
  background: theme.palette.mode === 'light'
    ? `linear-gradient(135deg, ${theme.palette.background.paper}, rgba(245, 245, 250, 0.9))`
    : `linear-gradient(135deg, ${theme.palette.background.paper}, rgba(30, 30, 35, 0.8))`,
  borderRadius: 8,
  overflow: "hidden",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
  },
}));

// MacBook Pro has a 16:10 aspect ratio
const VideoContainer = styled(Box)(() => ({
  position: "relative",
  borderRadius: "8px 8px 0 0",
  paddingTop: "62.5%", // 16:10 aspect ratio (10/16 = 0.625 = 62.5%)
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 30%)",
    zIndex: 1,
    pointerEvents: "none",
  },
}));

const VideoElement = styled("video")(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.5s ease",
}));

const IconOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 16,
  right: 16,
  zIndex: 2,
  width: 40,
  height: 40,
  borderRadius: "50%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main,
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  "& svg": {
    fontSize: "1.2rem",
  },
}));

const ExampleTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,
  textAlign: "left",
}));

const ExampleSubtitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  marginBottom: theme.spacing(1),
  color: theme.palette.primary.main,
  textAlign: "left",
  fontSize: "0.95rem",
}));

const ExampleDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
  textAlign: "left",
}));

const GradientHeading = styled(Typography)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(90deg, #38C96A 30%, #26BC85 90%)'
    : 'linear-gradient(90deg, #2A9D54 30%, #1A8A61 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  textShadow: '0 0 30px rgba(56, 201, 106, 0.2)',
  fontWeight: 700,
  position: 'relative',
  display: 'inline-block',
  marginBottom: theme.spacing(8),
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -8,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '3px',
    background: 'linear-gradient(90deg, #38C96A, #26BC85)',
    borderRadius: '2px',
    marginBottom: theme.spacing(-3),
  }
}));

const examples = [
  {
    id: "coder-space-invaders",
    icon: faGamepad,
    title: "CODER - Your Game Development Assistant",
    subtitle: "Interactive Coding with Real-time Feedback",
    description: "Creating a space invaders game with Local Operator with feedback from the user and suggestions for continuous improvement. The agent adapts to user preferences while implementing game mechanics, graphics, and controls.",
    videoSrc: coderSpaceInvaders
  },
  {
    id: "mike-competitive-landscape",
    icon: faBuilding,
    title: "Mike - Your Comprehensive Industry Analyst",
    subtitle: "Multi-step Research and Reporting",
    description: "Doing broad industry analysis and creating a large comprehensive report with comparison tables. This multi-step analysis draws from multiple sources to provide actionable business intelligence and competitive insights.",
    videoSrc: mikeCompetitiveLandscape
  },
  {
    id: "bob-portfolio-value",
    icon: faMoneyBillWave,
    title: "Bob - Your Financial Analyst",
    subtitle: "Precision Through Code Execution",
    description: "Calculating compounded return with exchange rates figured out in real time with code. Using code reduces LLM errors since they are able to get precise answers, ensuring accuracy for critical financial decisions.",
    videoSrc: bobPortfolioValue
  },
  {
    id: "gracie-hair-makeup-content-ideas",
    icon: faLightbulb,
    title: "Gracie - Your Content Strategy Consultant",
    subtitle: "Data-driven Niche Identification",
    description: "Performing research to identify underserved niches for content creators and generating a PDF of the comprehensive analysis with content ideas and strategies. The agent analyzes trends, audience demographics, and competition to create actionable plans.",
    videoSrc: gracieHairMakeup
  },
  {
    id: "media-master",
    icon: faVideo,
    title: "Media Master - Your Video Editing Assistant",
    subtitle: "Local File Media Transformation",
    description: "Performing video editing and conversions using local files. The agent automates tedious media processing workflows, applying filters, adjusting parameters, and converting between formats while maintaining quality.",
    videoSrc: mediaMaster
  },
  {
    id: "kaggle-data-science-house-prices",
    icon: faChartLine,
    title: "Kaggle Bot - Your Data Science Consultant",
    subtitle: "Self-Improving Predictive Models",
    description: "Automated ML model creation for house price prediction, with self-improvement and iteration on models. The agent applies feature engineering, hyperparameter tuning, and cross-validation to achieve optimal performance.",
    videoSrc: kaggleDataScience
  },
];

const Examples: React.FC = () => {
  
  return (
    <Section id="examples">
      <GradientHeading variant="h3">
        Local Operator Agents in Action
      </GradientHeading>
      <Typography variant="body1" sx={{ mb: 6, maxWidth: 800, mx: "auto" }}>
        From coding and data science to content creation and financial analysis, see how Local Operator transforms complex tasks into simple interactions
      </Typography>
      
      <ScrollContainer>
        {examples.map((example) => (
          <VideoCard key={example.id} elevation={2}>
            <VideoContainer>
              <VideoElement
                src={example.videoSrc}
                muted
                playsInline
                loop
                preload="metadata"
                onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
                onMouseLeave={(e) => (e.currentTarget as HTMLVideoElement).pause()}
              />
              <IconOverlay>
                <FontAwesomeIcon icon={example.icon} />
              </IconOverlay>
            </VideoContainer>
            
            <CardContent sx={{ p: 3 }}>
              <ExampleTitle variant="h6">
                {example.title}
              </ExampleTitle>
              <ExampleSubtitle variant="subtitle2">
                {example.subtitle}
              </ExampleSubtitle>
              <ExampleDescription variant="body2">
                {example.description}
              </ExampleDescription>
            </CardContent>
          </VideoCard>
        ))}
      </ScrollContainer>
    </Section>
  );
};

export default Examples;
