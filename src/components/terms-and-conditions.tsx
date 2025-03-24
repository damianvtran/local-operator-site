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
 * TermsAndConditions component displays the terms and conditions content
 */
export const TermsAndConditions: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms and Conditions | Local Operator"
        description="Terms and Conditions for Local Operator - Learn about the terms governing your use of our services."
      />
      <Container maxWidth="lg">
        <PolicyContainer>
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Terms and Conditions
          </Typography>
          <Typography variant="subtitle1" gutterBottom align="center">
            Effective Date: March 23, 2025
          </Typography>

          <SectionHeading variant="h4">
            1. Acceptance of Terms
          </SectionHeading>
          <Typography variant="body1" paragraph>
            By accessing or using Local Operator's software platform, applications, and services, including but not limited to our downloadable software, cloud-based services, and any associated documentation (collectively, the "Services"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, you must not access or use the Services.
          </Typography>

          <SectionHeading variant="h4">
            2. Changes to Terms
          </SectionHeading>
          <Typography variant="body1" paragraph>
            We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the revised Terms on our website, sending you an email, or providing a notification through the Services. Your continued use of the Services after such modifications constitutes your binding acceptance of such changes. It is your responsibility to review these Terms periodically for updates.
          </Typography>

          <SectionHeading variant="h4">
            3. Use of Services
          </SectionHeading>
          <Typography variant="body1" paragraph>
            You may use the Services only for lawful purposes and in accordance with these Terms. You agree not to use the Services:
          </Typography>
          <Typography component="ul" sx={{ pl: 4 }}>
            <Typography component="li" variant="body1" paragraph>
              In any way that violates any applicable federal, state, local, or international law or regulation.
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              To impersonate or attempt to impersonate Local Operator, a Local Operator employee, another user, or any other person or entity.
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or which, as determined by us, may harm Local Operator or users of the Services, or expose them to liability.
            </Typography>
          </Typography>

          <SectionHeading variant="h4">
            4. Intellectual Property Rights
          </SectionHeading>
          <Typography variant="body1" paragraph>
            The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Local Operator, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </Typography>

          <SectionHeading variant="h4">
            5. Disclaimer of Warranties
          </SectionHeading>
          <Typography variant="body1" paragraph>
            THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER LOCAL OPERATOR NOR ANY PERSON ASSOCIATED WITH LOCAL OPERATOR MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES.
          </Typography>

          <Typography variant="body1" paragraph>
            For the complete terms and conditions, please visit our website or contact us at legal@local-operator.com.
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

export default TermsAndConditions;
