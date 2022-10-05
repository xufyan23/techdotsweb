import Footer from './footer'
import Head from "next/head";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
// import "@fontsource/comfortaa";
import Script from "next/script";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Techdots</title>
          <style dangerouslySetInnerHTML={ {
            __html: `</style>
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700&display=swap"
                media="print"
                onload="this.media='all';"
              />
              <style>`
          } }></style>
      </Head>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      >
      <main>{children}</main>
      </GoogleReCaptchaProvider>
      <Footer />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      />
    </>
  );
}

export default Layout;
