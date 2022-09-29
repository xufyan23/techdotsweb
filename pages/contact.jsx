import Head from "next/head";
import Image from "next/image";
import ContactForm from "../components/contactForm";
import Header from "../components/header";
import MetaTags from '../components/common/metaTags';
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <MetaTags
          title="Contact"
          description="Contact"
          keywords="Contact"
        />
      </Head>
      <div className="contact-wrapper">
        <Header />
        <section className={styles.contact_banner}>
          <div className="container">
            <div className={styles.banner_col}>
              <div className={styles.banner_text}>
                <h1>Contact Us</h1>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature from
                  45 BC, making it over
                </p>
              </div>
              <div className={styles.banner_img}>
                <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729609/Techdots/images/contatc-us_txmweg.svg"
                  width={"100%"} height={"100%"} layout='responsive' alt="banner image" />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.contact_block}>
          <div className="container">
            <div className={`row ${styles.contact_form}`}>
              <div className="col-12 col-sm-10 col-md-10 col-lg-8 col-xl-8 col-xxl-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
