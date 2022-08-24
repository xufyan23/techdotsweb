import {useEffect} from "react";
import mixpanel from 'mixpanel-browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
      mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_KEY || '', {
        // debug: true,
        ignore_dnt: true,
      });
      mixpanel.track("page_view");
      mixpanel.track_links("nav a", "click nav link", {
        "referrer": document.referrer
      });
      mixpanel.track_links("#book-appointment", "click book appointment btn", {
        "referrer": document.referrer
      });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
