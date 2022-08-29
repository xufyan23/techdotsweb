import Footer from './footer'
import Head from "next/head";
import "@fontsource/comfortaa";
import Script from "next/script";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Accelerating your digital transformation</title>
        <meta name="Techdots" content="Techdots" />
        <meta name="title" content="Accelerating your digital transformation"></meta>
        <meta name="description" content="Custom Software Solutions For Global Companies"></meta>
        <meta name ="keywords" content ="Accelerating your digital transformation"/>
        <meta name="theme-color" content="#1B63DC"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="../public/apple-icon.png"/>
        {/* <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700&display=swap" rel="stylesheet"/> */}
      </Head>
      <main>{children}</main>
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
