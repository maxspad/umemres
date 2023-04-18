import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
    usePageViews();
    
    return (
    <>
        <GoogleAnalytics />
        <Component {...pageProps} />;
        <Analytics />
    </>
    );
}