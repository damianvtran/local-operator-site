import { Box, Container, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import SEO from "./SEO";

/**
 * Styled component for the policy content container
 */
const PolicyContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
}));

/**
 * Styled component for section headings
 */
const SectionHeading = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

/**
 * Styled component for subsection headings
 */
const SubsectionHeading = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,
}));

/**
 * PrivacyPolicy component displays the privacy policy content
 */
export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | Local Operator"
        description="Privacy Policy for Local Operator - Learn how we collect, use, and protect your personal information."
      />
      <Container maxWidth="lg">
        <PolicyContainer>
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Privacy Policy
          </Typography>
          <Typography variant="subtitle1" gutterBottom align="center">
            Effective Date: March 23, 2025
          </Typography>

          <SectionHeading variant="h4">
            1. Introduction
          </SectionHeading>
          
          <SubsectionHeading variant="h5">
            1.1 Overview
          </SubsectionHeading>
          <Typography variant="body1" paragraph>
            This Privacy Policy ("Policy") describes how Local Operator ("we," "us," or "our") collects, uses, processes, discloses, retains, and protects personal information when you use our software platform, applications, and services, including but not limited to our downloadable software, cloud-based services, and any associated documentation (collectively, the "Services").
          </Typography>

          <SubsectionHeading variant="h5">
            1.2 Acceptance of Policy
          </SubsectionHeading>
          <Typography variant="body1" paragraph>
            By accessing or using the Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with this Policy, you must not access or use the Services.
          </Typography>

          <SubsectionHeading variant="h5">
            1.3 Changes to Policy
          </SubsectionHeading>
          <Typography variant="body1" paragraph>
            We reserve the right to modify this Privacy Policy at any time. We will notify you of any material changes by posting the revised Policy on our website, sending you an email, or providing a notification through the Services. Your continued use of the Services after such modifications constitutes your binding acceptance of such changes. It is your responsibility to review this Privacy Policy periodically for updates.
          </Typography>

          <SubsectionHeading variant="h5">
            1.4 Children's Privacy
          </SubsectionHeading>
          <Typography variant="body1" paragraph>
            The Services are not directed to children under the age of 13 (or 16 in the European Union). We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately at privacy@local-operator.com. If we become aware that we have collected personal information from children without verification of parental consent, we will take steps to remove that information from our servers.
          </Typography>

          <SectionHeading variant="h4">
            2. Information We Collect
          </SectionHeading>
          <Typography variant="body1" paragraph>
            For the complete privacy policy, please visit our website or contact us at privacy@local-operator.com.
          </Typography>

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              &copy; {new Date().getFullYear()} Local Operator. All rights reserved.
            </Typography>
          </Box>
        </PolicyContainer>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
