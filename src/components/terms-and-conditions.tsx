import { Typography, Box } from "@mui/material";
import { LegalDocument, type LegalSection } from "./legal-document";

/**
 * TermsAndConditions component displays the terms and conditions content using the LegalDocument component
 */
export const TermsAndConditions: React.FC = () => {
  // Define the sections for the terms and conditions
  const termsSections: LegalSection[] = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing or using Local Operator's software platform, applications, and services, including but not limited to our downloadable software, cloud-based services, and any associated documentation (collectively, the \"Services\"), you agree to be bound by these Terms and Conditions (\"Terms\"). If you do not agree to these Terms, you must not access or use the Services."
    },
    {
      title: "2. Changes to Terms",
      content: "We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the revised Terms on our website, sending you an email, or providing a notification through the Services. Your continued use of the Services after such modifications constitutes your binding acceptance of such changes. It is your responsibility to review these Terms periodically for updates."
    },
    {
      title: "3. Use of Services",
      content: (
        <Box>
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
        </Box>
      )
    },
    {
      title: "4. Intellectual Property Rights",
      content: "The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Local Operator, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws."
    },
    {
      title: "5. Disclaimer of Warranties",
      content: "THE SERVICES ARE PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER LOCAL OPERATOR NOR ANY PERSON ASSOCIATED WITH LOCAL OPERATOR MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES."
    }
  ];

  return (
    <LegalDocument
      title="Terms and Conditions"
      effectiveDate="March 23, 2025"
      seoTitle="Terms and Conditions | Local Operator"
      seoDescription="Terms and Conditions for Local Operator - Learn about the terms governing your use of our services."
      sections={termsSections}
      contactEmail="legal@local-operator.com"
    />
  );
};
