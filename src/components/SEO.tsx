import { Helmet } from "react-helmet-async";
import Favicons from "./Favicons";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  description = "Local Operator is a Python-based on-device agent that executes commands through a chat interface. Supports code safety verification, goal-driven execution, and local models with Ollama.",
  url = "https://local-operator.com",
}) => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Local Operator",
            "image": "https://local-operator.com/preview.png", 
            "operatingSystem": "ALL",
            "applicationCategory": "BusinessApplication",
            "description": description,
            "softwareVersion": "v0.1.2",
            "url": url,
            "creator": {
              "@type": "Person",
              "name": "Damian Tran",
              "url": "https://github.com/damianvtran/local-operator"
            },
            "license": "https://opensource.org/licenses/MIT"
          })}
        </script>
      </Helmet>
      <Favicons />
    </>
  );
};

export default SEO; 