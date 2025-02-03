import { Helmet } from "react-helmet-async";
import loBlackBanner from '../assets/lo-black-banner.png';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Local Operator | On-Device Python Agents",
  description = "Local Operator is a Python-based on-device agent that securely executes commands through an interactive CLI and FastAPI server mode. Enjoy advanced features such as code safety verification, contextual execution, and local model support.",
  url = "https://local-operator.com",
  image = loBlackBanner
}) => {
  return (
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

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Local Operator",
          "operatingSystem": "ALL",
          "applicationCategory": "BusinessApplication",
          "description": description,
          "softwareVersion": "0.0.1",
          "url": url,
          "creator": {
            "@type": "Organization",
            "name": "Local Operator",
            "url": "https://github.com/damianvtran/local-operator"
          }
        })}
      </script>
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO; 