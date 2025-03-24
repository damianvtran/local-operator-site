import { Typography, Box } from "@mui/material";
import { LegalDocument, type LegalSection } from "./legal-document";

/**
 * PrivacyPolicy component displays the privacy policy content using the LegalDocument component
 */
export const PrivacyPolicy: React.FC = () => {
  // Define the sections for the privacy policy
  const privacySections: LegalSection[] = [
    {
      title: "1. Introduction",
      content: "",
      subsections: [
        {
          title: "1.1 Overview",
          content: "This Privacy Policy (\"Policy\") describes how Local Operator (\"we,\" \"us,\" or \"our\") collects, uses, processes, discloses, retains, and protects personal information when you use our software platform, applications, and services, including but not limited to our downloadable software, cloud-based services, and any associated documentation (collectively, the \"Services\")."
        },
        {
          title: "1.2 Acceptance of Policy",
          content: "By accessing or using the Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with this Policy, you must not access or use the Services."
        },
        {
          title: "1.3 Changes to Policy",
          content: "We reserve the right to modify this Privacy Policy at any time. We will notify you of any material changes by posting the revised Policy on our website, sending you an email, or providing a notification through the Services. Your continued use of the Services after such modifications constitutes your binding acceptance of such changes. It is your responsibility to review this Privacy Policy periodically for updates."
        },
        {
          title: "1.4 Children's Privacy",
          content: "The Services are not directed to children under the age of 13 (or 16 in the European Union). We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately at privacy@local-operator.com. If we become aware that we have collected personal information from children without verification of parental consent, we will take steps to remove that information from our servers."
        }
      ]
    },
    {
      title: "2. Information We Collect",
      content: (
        <Box>
          <Typography variant="body1" paragraph>
            We collect various types of information to provide and improve our Services:
          </Typography>
          <Typography component="ul" sx={{ pl: 4 }}>
            <Typography component="li" variant="body1" paragraph>
              Personal information you provide directly to us
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Information collected automatically through your use of the Services
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Information from third-party sources
            </Typography>
          </Typography>
          <Typography variant="body1" paragraph>
            For the complete privacy policy, please visit our website or contact us at privacy@local-operator.com.
          </Typography>
        </Box>
      )
    }
  ];

  return (
    <LegalDocument
      title="Privacy Policy"
      effectiveDate="March 23, 2025"
      seoTitle="Privacy Policy | Local Operator"
      seoDescription="Privacy Policy for Local Operator - Learn how we collect, use, and protect your personal information."
      sections={privacySections}
      contactEmail="privacy@local-operator.com"
    />
  );
};
