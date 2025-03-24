import { Helmet } from "react-helmet-async";

// Extend Window interface to include gtag
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export const GA_TRACKING_ID = "G-Q64F7FXZ5L";

/**
 * Tracks an event with Google Analytics
 * @param eventName The name of the event to track
 * @param eventParams Optional parameters to include with the event
 */
export const trackEvent = (eventName: string, eventParams?: Record<string, unknown>): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

export const GoogleAnalytics: React.FC = () => {
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
