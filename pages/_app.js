import {useEffect} from "react";
import mixpanel from 'mixpanel-browser';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/layout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
        mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_KEY || '', {
          ignore_dnt: true,
        });
        mixpanel.track_links("nav a", "click nav link", {
          "referrer": document.referrer
        });
        mixpanel.track_links(".services .primary-btn", "click appointment btn", {
          "referrer": document.referrer
        });
        mixpanel.track_links(".success_stories .learn_more", "click learn more btn", {
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
