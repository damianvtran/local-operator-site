import { LegalDocument } from "./legal-document";
import termsAndConditionsMarkdown from "../assets/terms_and_conditions.md?raw";

/**
 * TermsAndConditions component displays the terms and conditions content using the LegalDocument component
 * with markdown content from the terms_and_conditions.md file
 */
export const TermsAndConditions: React.FC = () => {
  return (
    <LegalDocument
      title="Terms and Conditions - Local Operator"
      effectiveDate="March 23, 2025"
      seoTitle="Terms and Conditions - Local Operator"
      seoDescription="Terms and Conditions for Local Operator - Learn about the terms governing your use of our services."
      markdown={termsAndConditionsMarkdown}
      contactEmail="legal@local-operator.com"
    />
  );
};
