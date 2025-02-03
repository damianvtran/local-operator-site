import { Helmet } from "react-helmet-async";

import appleIcon57 from "@assets/apple-icon-57x57.png";
import appleIcon60 from "@assets/apple-icon-60x60.png";
import appleIcon72 from "@assets/apple-icon-72x72.png";
import appleIcon76 from "@assets/apple-icon-76x76.png";
import appleIcon114 from "@assets/apple-icon-114x114.png";
import appleIcon120 from "@assets/apple-icon-120x120.png";
import appleIcon144 from "@assets/apple-icon-144x144.png";
import appleIcon152 from "@assets/apple-icon-152x152.png";
import appleIcon180 from "@assets/apple-icon-180x180.png";
import androidIcon192 from "@assets/android-icon-192x192.png";
import favicon32 from "@assets/favicon-32x32.png";
import favicon96 from "@assets/favicon-96x96.png";
import favicon16 from "@assets/favicon-16x16.png";
import msIcon144 from "@assets/ms-icon-144x144.png";

const Favicons: React.FC = () => {
  return (
    <Helmet>
      <link rel="apple-touch-icon" sizes="57x57" href={appleIcon57} />
      <link rel="apple-touch-icon" sizes="60x60" href={appleIcon60} />
      <link rel="apple-touch-icon" sizes="72x72" href={appleIcon72} />
      <link rel="apple-touch-icon" sizes="76x76" href={appleIcon76} />
      <link rel="apple-touch-icon" sizes="114x114" href={appleIcon114} />
      <link rel="apple-touch-icon" sizes="120x120" href={appleIcon120} />
      <link rel="apple-touch-icon" sizes="144x144" href={appleIcon144} />
      <link rel="apple-touch-icon" sizes="152x152" href={appleIcon152} />
      <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180} />
      <link rel="icon" type="image/png" sizes="192x192" href={androidIcon192} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="96x96" href={favicon96} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <link rel="manifest" href={'/manifest.json'} />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content={msIcon144} />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
};

export default Favicons; 