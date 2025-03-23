import { Typography, Box, Card, CardContent, Modal, IconButton, useMediaQuery } from "@mui/material";
import Section from "./Section";
import { styled, useTheme } from "@mui/material/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGamepad, 
  faChartLine, 
  faBuilding, 
  faMoneyBillWave, 
  faVideo, 
  faLightbulb,
  faTimes,
  faPlay
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef, useCallback } from 'react';

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
const VideoContainer = styled(Box)(({ theme }) => ({
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
  [theme.breakpoints.down('md')]: {
    cursor: 'pointer',
  }
}));

const VideoElement = styled("video")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.5s ease",
  [theme.breakpoints.down('md')]: {
    opacity: 0, // Hide video on mobile until it's loaded
  }
}));

const VideoPlaceholder = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.mode === 'dark' 
    ? 'rgba(20, 20, 20, 0.7)' 
    : 'rgba(245, 245, 250, 0.7)',
  backdropFilter: 'blur(4px)',
  borderRadius: "8px 8px 0 0",
  color: theme.palette.primary.main,
  transition: "opacity 0.3s ease",
}));

const PlayIcon = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
  boxShadow: "0 4px 12px rgba(56, 201, 106, 0.3)",
  color: theme.palette.primary.contrastText,
  "& svg": {
    fontSize: "1.5rem",
    marginLeft: 4, // Slight offset for play icon
  }
}));

const PlaceholderText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
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

const ModalVideo = styled("video")({
  width: "100%",
  height: "auto",
  maxHeight: "80vh",
  objectFit: "contain",
});

const ModalContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  backgroundColor: theme.palette.background.paper,
  borderRadius: 8,
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
  padding: theme.spacing(1),
  outline: "none",
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 8,
  right: 8,
  width: 32,
  height: 32,
  fontSize: 24,
  color: theme.palette.grey[500],
  zIndex: 10,
}));

const examples = [
  {
    id: "coder-space-invaders",
    icon: faGamepad,
    title: "🤖 CODER - Your Game Development Assistant",
    subtitle: "Interactive Coding with Real-time Feedback",
    description: "Creating a space invaders game with Local Operator with feedback from the user and suggestions for continuous improvement. The agent adapts to user preferences while implementing game mechanics, graphics, and controls.  The agent can download royalty free assets from the internet and do end-to-end bootstraps, running commands on the device and writing files all using code as as tool.",
    videoSrc: coderSpaceInvaders
  },
  {
    id: "mike-competitive-landscape",
    icon: faBuilding,
    title: "👨‍💼 Mike - Your Comprehensive Industry Analyst",
    subtitle: "Multi-step Research and Reporting",
    description: "Doing broad industry analysis and creating a large comprehensive report with comparison tables. This multi-step analysis draws from multiple sources to provide actionable business intelligence and competitive insights.  The agent searches the web for information, branches off into interesting leads to get more information, and writes 7000 word reports with tables, charts, and citations.",
    videoSrc: mikeCompetitiveLandscape
  },
  {
    id: "bob-portfolio-value",
    icon: faMoneyBillWave,
    title: "🙋‍♂️ Bob - Your Financial Analyst",
    subtitle: "Precision Through Code Execution",
    description: "Calculating compounded return with exchange rates figured out in real time with code. Using code reduces LLM errors since they are able to get precise answers, ensuring accuracy for critical financial decisions.  The agents can also look up information in real time from the web to supplement their analysis, in between running calculations.",
    videoSrc: bobPortfolioValue
  },
  {
    id: "gracie-hair-makeup-content-ideas",
    icon: faLightbulb,
    title: "🙋‍♀️ Gracie - Your Content Strategy Consultant",
    subtitle: "Data-driven Niche Identification",
    description: "Performing research to identify underserved niches for content creators and generating a PDF of the comprehensive analysis with content ideas and strategies. The agent analyzes trends, audience demographics, and competition to create actionable plans.",
    videoSrc: gracieHairMakeup
  },
  {
    id: "media-master",
    icon: faVideo,
    title: "🎥 Media Master - Your Video Editing Assistant",
    subtitle: "Local File Media Transformation",
    description: "Performing video editing and conversions using local files. The agent automates tedious media processing workflows, applying filters, adjusting parameters, and converting between formats on the fly, while showing the updated versions to the user in the interface for feedback and revisions.",
    videoSrc: mediaMaster
  },
  {
    id: "kaggle-data-science-house-prices",
    icon: faChartLine,
    title: "🧠 Kaggle Bot - Your Data Science Consultant",
    subtitle: "Self-Improving Predictive Models",
    description: "Automated ML model creation for house price prediction, with self-improvement and iteration on models. The agent applies feature engineering, hyperparameter tuning, and cross-validation to achieve optimal performance.  It displays graphs to the user as it goes to help them to understand the tendencies of the data and the reasons for the model selection.",
    videoSrc: kaggleDataScience
  },
];

const Examples: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [loadedVideos, setLoadedVideos] = useState<Record<string, boolean>>({});
  const [visibleVideos, setVisibleVideos] = useState<Record<string, boolean>>({});
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const videoContainerRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const splashPassedRef = useRef(false);

  // Function to handle video loading - using useCallback to avoid dependency issues
  const handleVideoLoad = useCallback((videoId: string) => {
    setLoadedVideos(prev => ({ ...prev, [videoId]: true }));
  }, []);

  // Function to handle video click
  const handleVideoClick = useCallback((videoSrc: string, videoId: string) => {
    if (isMobile) {
      // If video is not loaded yet, load it
      if (!loadedVideos[videoId] && videoRefs.current[videoId]) {
        const videoElement = videoRefs.current[videoId];
        if (videoElement) {
          videoElement.style.opacity = '1';
          videoElement.load();
          handleVideoLoad(videoId);
        }
      } else {
        // If already loaded, open in modal
        setSelectedVideo(videoSrc);
        setOpenModal(true);
      }
    }
  }, [isMobile, loadedVideos, handleVideoLoad]);
  
  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
    setSelectedVideo(null);
  }, []);

  // Set up intersection observer to detect when videos are visible
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '200px', // Load videos 200px before they come into view
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        const videoId = entry.target.getAttribute('data-video-id');
        if (videoId) {
          if (entry.isIntersecting) {
            setVisibleVideos(prev => ({ ...prev, [videoId]: true }));
          }
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    
    // Observe all video containers
    for (const [_, ref] of Object.entries(videoContainerRefs.current)) {
      if (ref) observer.observe(ref);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Check if user has scrolled past splash page and start loading videos
  useEffect(() => {
    const timeoutIds: number[] = [];
    
    const handleScroll = () => {
      // Consider splash page height to be 100vh
      if (window.scrollY > window.innerHeight * 0.7 && !splashPassedRef.current) {
        splashPassedRef.current = true;
        
        // Start loading all videos in order (top to bottom)
        for (let index = 0; index < examples.length; index++) {
          const example = examples[index];
          const videoId = example.id;
          if (!loadedVideos[videoId] && videoRefs.current[videoId]) {
            const videoElement = videoRefs.current[videoId];
            if (videoElement) {
              // Use setTimeout with a small delay to stagger loading and prioritize top videos
              const timeoutId = window.setTimeout(() => {
                if (videoElement && !loadedVideos[videoId]) {
                  videoElement.style.opacity = '1';
                  videoElement.load();
                  handleVideoLoad(videoId);
                }
              }, index * 100); // Reduced delay to 100ms between each video load
              timeoutIds.push(timeoutId);
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case the user has already scrolled
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clean up all timeouts
      for (const id of timeoutIds) {
        window.clearTimeout(id);
      }
    };
  }, [loadedVideos, handleVideoLoad]);

  // Load videos when they become visible if they haven't been loaded yet
  useEffect(() => {
    if (splashPassedRef.current) {
      for (const [videoId, isVisible] of Object.entries(visibleVideos)) {
        if (isVisible && !loadedVideos[videoId] && videoRefs.current[videoId]) {
          const videoElement = videoRefs.current[videoId];
          if (videoElement) {
            videoElement.style.opacity = '1';
            videoElement.load();
            handleVideoLoad(videoId);
          }
        }
      }
    }
  }, [visibleVideos, loadedVideos, handleVideoLoad]);
  
  // Fallback mechanism to ensure all videos load after a certain time
  useEffect(() => {
    // After 3 seconds, load any videos that haven't been loaded yet
    const timeoutId = window.setTimeout(() => {
      if (splashPassedRef.current) {
        for (const example of examples) {
          const videoId = example.id;
          if (!loadedVideos[videoId] && videoRefs.current[videoId]) {
            const videoElement = videoRefs.current[videoId];
            if (videoElement) {
              console.log(`Fallback loading for video: ${videoId}`);
              videoElement.style.opacity = '1';
              videoElement.load();
              handleVideoLoad(videoId);
            }
          }
        }
      }
    }, 3000);
    
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [loadedVideos, handleVideoLoad]);
  
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
            <VideoContainer 
              onClick={() => handleVideoClick(example.videoSrc, example.id)}
              ref={(el: HTMLDivElement | null) => { 
                if (el) videoContainerRefs.current[example.id] = el;
              }}
              data-video-id={example.id}
            >
              <VideoElement
                ref={(el: HTMLVideoElement | null) => { 
                  if (el) videoRefs.current[example.id] = el;
                }}
                src={example.videoSrc}
                muted
                playsInline
                loop
                preload="none" // Don't preload until we decide to
                onLoadedData={() => handleVideoLoad(example.id)}
                onMouseEnter={(e) => !isMobile && (e.currentTarget as HTMLVideoElement).play()}
                onMouseLeave={(e) => !isMobile && (e.currentTarget as HTMLVideoElement).pause()}
              />
              {isMobile && !loadedVideos[example.id] && (
                <VideoPlaceholder>
                  <PlayIcon>
                    <FontAwesomeIcon icon={faPlay} />
                  </PlayIcon>
                  <PlaceholderText variant="h6">
                    Tap to Watch
                  </PlaceholderText>
                </VideoPlaceholder>
              )}
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
      
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="video-modal"
        aria-describedby="expanded video view"
      >
        <ModalContent>
          <CloseButton onClick={handleCloseModal}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
          {selectedVideo && (
            <ModalVideo
              src={selectedVideo}
              controls
              autoPlay
              playsInline
            />
          )}
        </ModalContent>
      </Modal>
    </Section>
  );
};

export default Examples;
