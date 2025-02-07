import { Helmet } from "react-helmet-async";
import Favicons from "./Favicons";
import loSitePreview from '@assets/lo-site-preview.png';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Local Operator | On-Device Python Agents",
  description = "Local Operator is a Python-based on-device agent that executes commands through a chat interface. Supports code safety verification, goal-driven execution, and local models with Ollama.",
  url = "https://local-operator.com",
  image = loSitePreview
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="Local Operator, agentic AI, AI agent, on-device AI, open source, command line chat, python chat, interactive CLI, FastAPI server, code safety, contextual execution, conversation history, local models, Ollama" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Local Operator" />

        {/* WhatsApp */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Local Operator Preview" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:creator" content="@damianvtran" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Local Operator",
            "image": image, 
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
        <link rel="canonical" href={url} />
      </Helmet>
      <Favicons />
    </>
  );
};

export default SEO; 