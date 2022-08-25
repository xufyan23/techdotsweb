import Head from "next/head";
import ContactForm from "../components/contactForm";
import Header from "../components/header";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  return (
    <>
    <Head>
      <title>Contact</title>
      </Head>
      <div className="contact-wrapper">
        <Header />
        <div className="container">
          <div className={`row ${styles.contact_form}`}>
            <div className="col-12 col-sm-10 col-md-10 col-lg-8 col-xl-8 col-xxl-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
