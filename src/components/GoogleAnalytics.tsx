import { Helmet } from "react-helmet-async";

const GA_TRACKING_ID = "G-Q64F7FXZ5L";

const GoogleAnalytics: React.FC = () => {
  return (
    <Helmet>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;