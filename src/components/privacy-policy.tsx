import { LegalDocument } from "./legal-document";
import privacyPolicyMarkdown from "../assets/privacy_policy.md?raw";

/**
 * PrivacyPolicy component displays the privacy policy content using the LegalDocument component
 * with markdown content from the privacy_policy.md file
 */
export const PrivacyPolicy: React.FC = () => {
  return (
    <LegalDocument
      title="Privacy Policy - Local Operator"
      effectiveDate="March 23, 2025"
      seoTitle="Privacy Policy - Local Operator"
      seoDescription="Privacy Policy for Local Operator - Learn how we collect, use, and protect your personal information."
      markdown={privacyPolicyMarkdown}
      contactEmail="privacy@local-operator.com"
    />
  );
};
