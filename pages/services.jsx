import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import ServiceBannerImg from "../public/images/validation.svg";
import Consultation from "../public/images/img1_consultation.png";
import Implementation from "../public/images/img1_Implementation.png";
import ValidationImg from "../public/images/img1_ideaValidation.png";
import DesignImg from "../public/images/img1_design.png";
import DevelopmentImg from "../public/images/img1_softwareDev.png";
import ContactForm from "../components/contactForm"
import styles from "../styles/Services.module.scss";

const Services = () => {
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <div className="services">
        <section className="banner">
          <Header />
          <div className="container-fluid">
            <div className="banner_col">
              <div className="banner_text">
                <div className="banner_text-box">
                  <div className="clr-green">Services</div>
                  <h1>What we offer</h1>
                  <p>
                    Techdots is a product-focused software development
                    <span className="d-block">
                      agency for enterprise & high-growth companies.
                    </span>
                  </p>
                  <ul className={`${styles.services_list}`}>
                    <li>Consultation</li>
                    <li>Implementation</li>
                    <li>Idea Validation</li>
                  </ul>
                  <div className="btn-block">
                    <button className="btn primary-btn">
                      Book Appointment
                    </button>
                    <button className="btn primary-btn btn-white">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
              <div className="banner-img">
                <Image
                  src={ServiceBannerImg}
                  alt="work station"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.consultation}`}>
          <div className={`${styles.consultation_grid}`}>
            <div className={`${styles.consultation_text}`}>
              <h3>Consultation</h3>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words.
              </p>
              <div>
                <button className="btn primary-btn">Book Appointment</button>
              </div>
            </div>
            <div className={`${styles.consultation_img}`}>
              <Image src={Consultation} alt="Consultation" loading="lazy" />
            </div>
          </div>
        </section>

        <section className={`${styles.implementation}`}>
          <div className={`${styles.implementation_grid}`}>
            <div className={`${styles.implementation_img}`}>
              <Image src={Implementation} alt="Consultation" loading="lazy" />
            </div>
            <div className={`${styles.implementation_text}`}>
              <h3>Implementation</h3>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words.
              </p>
              <div>
                <button className="btn primary-btn">Book Appointment</button>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.validation}`}>
          <div className={`${styles.validation_grid}`}>
            <div className={`${styles.validation_text}`}>
              <h3>Idea Validation</h3>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words.
              </p>
              <div>
                <button className="btn primary-btn">Book Appointment</button>
              </div>
            </div>
            <div className={`${styles.validation_img}`}>
              <Image src={ValidationImg} alt="Validation img" loading="lazy" />
            </div>
          </div>
        </section>

        <section className={`${styles.design}`}>
          <div className={`${styles.design_img}`}>
            <Image src={DesignImg} alt="design img" />
          </div>
          <div className={`${styles.design_text}`}>
            <h3>Design</h3>
            <p className="mt-4">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words.
            </p>
            <div>
              <button className="btn primary-btn">Book Appointment</button>
            </div>
          </div>
        </section>

        <section className={`${styles.development}`}>
          <div className={`${styles.development_text}`}>
            <h3>Software Development</h3>
            <p className="mt-4">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words.
            </p>
            <div>
              <button className="btn primary-btn">Book Appointment</button>
            </div>
          </div>
          <div className={`${styles.development_img}`}>
            <Image src={DevelopmentImg} alt="development img" loading="lazy" />
          </div>
        </section>
        <section className="contact-form bg-grey-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
