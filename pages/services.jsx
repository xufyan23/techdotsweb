import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import ContactForm from "../components/contactForm"
import { useRef } from "react";
import MetaTags from '../components/common/metaTags';
import styles from "../styles/Services.module.scss";

const Services = () => {
  const scrollToContact = useRef(null);

  const handleScroll = () => {
    scrollToContact.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <MetaTags
          title="Services"
          description="Techdots is a product-focused software development agency for enterprise & high-growth companies."
          keywords="Quotation"
        />
      </Head>
      <div className="services">
        <section className="banner">
          <Header />
          <div className="container-fluid">
            <div className="banner_col">
              <div className="banner_text">
                <div className="banner_text-box">
                  {/* <div className="clr-green">Services</div> */}
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
                    <Link href="https://techdots.zohobookings.com/#/customer/custom-software-development">
                      <a target="_blank" className="btn primary-btn">Book Appointment</a>
                    </Link>
                    <button
                      className="btn primary-btn btn-white"
                      onClick={handleScroll}
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
              <div className="banner-img">
                <Image
                  src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729607/Techdots/images/validation_co06vp.svg"
                  alt="work station"
                  width={486} height={324}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.validation}`}>
          <div className={`${styles.validation_grid}`}>
            <div className={`${styles.validation_text}`}>
              <h3 className="mb-4">Idea Validation</h3>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words.
              </p>
              <div className="text-center-xs">
                <Link href="idea-validation" >
                  <a className="btn primary-btn">
                    Book Appointment
                  </a>
                </Link>
              </div>
            </div>
            <div className={`${styles.validation_img}`}>
              <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1663060055/Techdots/images/img1_ideaValidation_xo1jsl.png"
                width={723} height={430} alt="Idea Validation" loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className={`${styles.design}`}>
          <div className={`${styles.design_img}`}>
            <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1663060055/Techdots/images/img1_design_usaunt.png"
              layout="fill" alt="design" priority={true} />
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
            <div className="mt-4 text-center-xs">
              <Link href="design">
                <a className="btn primary-btn">
                  Book Appointment
                </a>
              </Link>
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
            <div className="text-center-xs">
              <Link href="software-development">
                <a className="btn primary-btn">
                  Book Appointment
                </a>
              </Link>
            </div>
          </div>
          <div className={`${styles.development_img}`}>
            <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1663060055/Techdots/images/img1_softwareDev_olhftz.png"
              width={755} height={405} alt="software development" loading="lazy" />
          </div>
        </section>

        <section className="contact-form bg-grey-100">
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-12 col-sm-10 col-md-10 col-lg-8 col-xl-8 col-xxl-6"
                ref={scrollToContact}
              >
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
