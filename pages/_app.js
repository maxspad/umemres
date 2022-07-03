import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";

export default function App({ Component, pageProps }) {
    usePageViews();
    
    return (
    <>
        <GoogleAnalytics />
        <Component {...pageProps} />;
    </>
    );
}