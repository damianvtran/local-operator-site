import { Typography, Box, Card, CardMedia, CardContent, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Section from "./Section";

const MediaCard = styled(Card)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.background.paper,
  borderRadius: 16,
  overflow: "hidden",
  transition: "transform 0.2s ease-in-out",
  minHeight: 200,
  "&:hover": {
    transform: "translateY(-4px)",
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    minHeight: 'unset',
  }
}));

const ScrollContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  gap: theme.spacing(2),
  maxHeight: "600px",
  paddingRight: theme.spacing(2),
  "&::-webkit-scrollbar": {
    width: "10px",
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "rgba(255,255,255,0.2)",
    borderRadius: "5px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "rgba(255,255,255,0.3)",
  },
  [theme.breakpoints.down('sm')]: {
    maxHeight: "none",
    paddingRight: 0,
  }
}));

const StyledSection = styled(Section)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

const ChannelBadge = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  padding: '4px 8px',
  borderRadius: 4,
  backgroundColor: 'rgba(255,255,255,0.1)',
  color: theme.palette.text.secondary,
  fontSize: '0.75rem',
  fontWeight: 500,
  letterSpacing: '0.02em',
}));

const ClickableTitle = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  transition: 'color 0.2s ease-in-out',
  '&:hover': {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
  }
}));

const mediaItems = [
  {
    id: "local-magic",
    title: "Local Magic: Your Easy Guide to Setting Up Local Operator Without the Hassle",
    description: "Step-by-step intuitive walkthrough of how to get started with Local Operator, an AI agent that gets things done for you on your computer",
    link: "https://medium.com/@damianvtran/local-magic-your-easy-guide-to-setting-up-local-operator-without-the-hassle-278cd53eaceb",
    image: "https://miro.medium.com/v2/resize:fill:320:214/1*Qmy4H0tNSl3MDvUVMnxmmw.jpeg",
    channelName: "Medium",
  },
  {
    id: "image-processing",
    title: "Automating Image Processing using Local Operator",
    description: "Use AI agents on your computer to do image and GIF processing tasks such as conversions, speed adjustment, contrast, and anchored resizing.",
    link: "https://medium.com/@damianvtran/automating-image-processing-using-local-operator-2c25c7c63dbb",
    image: "https://miro.medium.com/v2/da:true/resize:fill:320:214/1*6A34GgpSdgd_UExwQvHVjw.gif",
    channelName: "Medium",
  },
  {
    id: "data-access",
    title: "Optimizing Data Access using Agentic AI", 
    description: "Discover how a Local Operator LLM agent can intelligently navigate complex data access challenges to find the most robust access path.",
    link: "https://medium.com/@damianvtran/optimizing-data-access-using-agentic-ai-d85cd9c276e8",
    image: "https://miro.medium.com/v2/resize:fill:320:214/1*24r8M33qLNAbibp4mTlU3w.png",
    channelName: "Medium",
  },
  {
    id: "bootstrapping",
    title: "Local Operator: Self-Validating AI Agent for Fast Bootstrapping",
    description: "From Zero to Development-Ready in 60 Seconds: using agents on the development device to build apps, fix errors, and check their own work.",
    link: "https://medium.com/@damianvtran/local-operator-self-validating-ai-agent-for-fast-bootstrapping-39fd78ecf37f",
    image: "https://miro.medium.com/v2/resize:fill:320:214/1*24r8M33qLNAbibp4mTlU3w.png",
    channelName: "Medium",
  },
  {
    id: "web-scraping",
    title: "Agent-Driven Web Scraping and Data Analysis with Local Operator",
    description: "Learn how to use local-operator to ask an agent to scrape web information and perform exploratory data analysis on your device in minutes.",
    link: "https://medium.com/@damianvtran/agent-driven-web-scraping-and-data-analysis-with-local-operator-9ad0f77c6000",
    image: "https://miro.medium.com/v2/resize:fill:320:214/1*24r8M33qLNAbibp4mTlU3w.png",
    channelName: "Medium",
  },
];

const MediaFeed: React.FC = () => {
  return (
    <StyledSection id="media-feed">
      <Typography variant="h3" component="h2" gutterBottom>
        Stay Connected
      </Typography>
      <Typography variant="body1" sx={{ mb: 6, maxWidth: 800, mx: "auto" }}>
        Keep up with the latest developments and join the community through our various channels
      </Typography>
      <ScrollContainer>
        {mediaItems.map((item) => (
          <MediaCard key={item.id}>
            <CardMedia
              component="img"
              sx={{ 
                width: { xs: '100%', md: 300 },
                height: { xs: 200, md: '100%' },
                objectFit: 'cover',
                objectPosition: 'center',
                position: { xs: 'relative', md: 'absolute' },
                left: { md: 0 },
                top: { md: 0 },
                bottom: { md: 0 }
              }}
              image={item.image}
              alt={item.title}
            />
            <CardContent sx={{ 
              flex: 1,
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'space-between',
              p: 3,
              ml: { xs: 0, md: '300px' }
            }}>
              <Box>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: { xs: 1, sm: 0 },
                  justifyContent: 'space-between', 
                  alignItems: { xs: 'flex-start', sm: 'flex-start' }, 
                  mb: 1 
                }}>
                  <ClickableTitle 
                    variant="h6" 
                    gutterBottom 
                    align="left"
                    onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')}
                  >
                    {item.title}
                  </ClickableTitle>
                  <ChannelBadge sx={{ flexShrink: 0 }}>{item.channelName}</ChannelBadge>
                </Box>
                <Typography variant="body2" color="text.secondary" align="left">
                  {item.description}
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  alignSelf: { xs: 'stretch', sm: 'flex-end' },
                  mt: 2 
                }}
              >
                View
              </Button>
            </CardContent>
          </MediaCard>
        ))}
      </ScrollContainer>
    </StyledSection>
  );
};

export default MediaFeed;