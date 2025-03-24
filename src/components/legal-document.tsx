import { Box, Container, Typography, Paper, Divider, useTheme, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SEO } from "./seo";
import { useEffect } from "react";

/**
 * Type definition for a section in a legal document
 */
export type LegalSection = {
  /** The title of the section */
  title: string;
  /** The content of the section, can be a string or JSX */
  content: React.ReactNode;
  /** Optional subsections */
  subsections?: Array<{
    /** The title of the subsection */
    title: string;
    /** The content of the subsection, can be a string or JSX */
    content: React.ReactNode;
  }>;
};

/**
 * Props for the LegalDocument component
 */
export type LegalDocumentProps = {
  /** The title of the legal document */
  title: string;
  /** The effective date of the legal document */
  effectiveDate: string;
  /** SEO title for the page */
  seoTitle: string;
  /** SEO description for the page */
  seoDescription: string;
  /** The sections of the legal document */
  sections: LegalSection[];
  /** Optional contact email for inquiries */
  contactEmail?: string;
};

/**
 * Styled component for the document container with enhanced visual appeal
 */
const DocumentContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  background: theme.palette.background.paper === '#ffffff' 
    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(245, 245, 250, 0.85))'
    : `linear-gradient(135deg, rgba(25, 25, 30, 0.3), rgba(18, 18, 24, 0.25), rgba(${56 * 0.1}, ${201 * 0.1}, ${106 * 0.1}, 0.5))`,
  boxShadow: `0 10px 30px ${alpha(theme.palette.common.black, 0.25)}`,
  borderRadius: theme.spacing(2),
  border: `1px solid ${alpha(theme.palette.common.white, 0.05)}`,
  position: 'relative',
  overflow: 'hidden',
  color: '#FFFFFF',
  '& .MuiTypography-root': {
    color: alpha(theme.palette.common.white, 0.87),
  },
  '& .MuiTypography-colorTextSecondary': {
    color: alpha(theme.palette.common.white, 0.6),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

/**
 * Styled component for the document header
 */
const DocumentHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  position: 'relative',
}));

/**
 * Styled component for section headings with enhanced visual appeal
 */
const SectionHeading = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
  position: 'relative',
  paddingBottom: theme.spacing(1),
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '40px',
    height: '3px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: theme.spacing(0.5),
  },
}));

/**
 * Styled component for subsection headings
 */
const SubsectionHeading = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(1.5),
  color: theme.palette.text.primary,
  fontWeight: 500,
}));

/**
 * Styled component for the document footer
 */
const DocumentFooter = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  paddingTop: theme.spacing(3),
  textAlign: 'center',
  borderTop: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
}));

/**
 * LegalDocument component - A reusable component for displaying legal documents
 * such as Privacy Policy and Terms & Conditions with a sleek, modern design
 */
export const LegalDocument: React.FC<LegalDocumentProps> = ({
  title,
  effectiveDate,
  seoTitle,
  seoDescription,
  sections,
  contactEmail,
}) => {
  const theme = useTheme();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
      />
      <Container maxWidth="lg" sx={{ paddingTop: "64px", paddingBottom: "32px" }}>
        <DocumentContainer>
          <DocumentHeader>
            <Typography 
              variant="h3" 
              component="h1" 
              gutterBottom 
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.text.primary} 30%, ${alpha(theme.palette.text.primary, 0.8)} 90%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
                letterSpacing: '-0.01em',
              }}
            >
              {title}
            </Typography>
            <Typography 
              variant="subtitle1" 
              gutterBottom 
              sx={{ 
                color: alpha(theme.palette.text.secondary, 0.9),
                fontWeight: 500,
              }}
            >
              Effective Date: {effectiveDate}
            </Typography>
            <Divider 
              sx={{ 
                width: '80px', 
                margin: '24px auto', 
                borderColor: alpha(theme.palette.common.white, 0.1),
              }} 
            />
          </DocumentHeader>

          {sections.map((section) => (
            <Box key={section.title}>
              <SectionHeading variant="h4">
                {section.title}
              </SectionHeading>
              
              {typeof section.content === 'string' ? (
                <Typography variant="body1" paragraph>
                  {section.content}
                </Typography>
              ) : (
                section.content
              )}
              
              {section.subsections?.map((subsection) => (
                <Box key={subsection.title} sx={{ ml: { xs: 0, sm: 2 } }}>
                  <SubsectionHeading variant="h5">
                    {subsection.title}
                  </SubsectionHeading>
                  
                  {typeof subsection.content === 'string' ? (
                    <Typography variant="body1" paragraph>
                      {subsection.content}
                    </Typography>
                  ) : (
                    subsection.content
                  )}
                </Box>
              ))}
            </Box>
          ))}

          {contactEmail && (
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                For more information, please contact us at{' '}
                <Box 
                  component="span" 
                  sx={{ 
                    color: theme.palette.primary.main,
                    fontWeight: 500,
                  }}
                >
                  {contactEmail}
                </Box>
              </Typography>
            </Box>
          )}

          <DocumentFooter>
            <Typography 
              variant="body2" 
              sx={{ 
                color: alpha(theme.palette.text.secondary, 0.7),
                fontSize: '0.875rem',
              }}
            >
              &copy; {new Date().getFullYear()} Local Operator. All rights reserved.
            </Typography>
          </DocumentFooter>
        </DocumentContainer>
      </Container>
    </>
  );
};
