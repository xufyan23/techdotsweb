import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import arrowRight from "../public/images/ic_backArrow.svg";
import DesignImg from "../public/images/img1_design.png";
import ContactForm from "../components/contactForm";
import { useRef } from "react";
import styles from "../styles/Services.module.scss";
import style from "../styles/ServicesPages.module.scss";

const Design = () => {
	const scrollToContact = useRef(null);
  const handleScroll = () => {
    scrollToContact.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Head>
        <title>Design</title>
      </Head>
      <div className={`${style.content_wrapper}`}>
        <section className={`${style.content_banner}`}>
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-7 col-xxl-7">
                <div className={`${style.banner_text}`}>
                  <a href="services" className={`btn clr-green ${styles.back_btn}`}>
                    <Image src={arrowRight} alt="back" />
                    Services
                  </a>
                  <h1>Design</h1>
                  <p>
                    Techdots is a product - focused software development
                    <span className="d-block">agency for enterprise & high - growth companies.</span>
                  </p>
                  <div className={`btn-block ${style.action_btn}`}>
                    <Link href="https://techdots.zohobookings.com/#/customer/custom-software-development">
                      <a target="_blank" className="btn primary-btn">
                        Book Appointment
                      </a>
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
            </div>
          </div>
        </section>



				<section className={`${styles.design} ${style.section_top_pd} ${style.design_block}`}>
          <div className={`${styles.design_img} ${style.section_img}`}>
            <Image src={DesignImg} alt="design img" />
          </div>
          <div className={`${styles.design_text}`}>
              <h3 className="mb-4">How much time and money does it cost you to reach your customers?</h3>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words.
              </p>
              <div className="mt-5">
                <h3 className="mb-4">Are you still spending tons of money using multiple tools?</h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature from
                  45 BC, making it over 2000 years old. Richard McClintock, a
                  Latin professor at Hampden-Sydney College in Virginia, looked up
                  one of the more obscure Latin words.
                </p>
              </div>
              <div className="mt-5">
                <h3 className="mb-4">Here are some of the features you get when you choose TechDots.</h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature from
                  45 BC, making it over 2000 years old. Richard McClintock, a
                  Latin professor at Hampden-Sydney College in Virginia, looked up
                  one of the more obscure Latin words.
                </p>
              </div>
            </div>
        </section>

        <section className="contact-form">
          <div className="container">
            <div className="row">
							<div className="col-12 col-sm-10 col-md-10 col-lg-8 col-xl-8 col-xxl-6 m-auto"
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

export default Design;
