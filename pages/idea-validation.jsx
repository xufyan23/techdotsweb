import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
// import ContactForm from "../components/contactForm";
import { useRef } from "react";
import styles from "../styles/Services.module.scss";
import style from "../styles/ServicesPages.module.scss";

const IdeaValidation = () => {
  const scrollToContact = useRef(null);
  const handleScroll = () => {
    scrollToContact.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Head>
        <title>Idea Validation</title>
      </Head>
      <div className={`${style.content_wrapper}`}>
        <section className={`${style.content_banner}`}>
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-8 col-xxl-8">
                <div className={`${style.banner_text}`}>
                  <a href="services" className={`btn clr-green ${styles.back_btn}`}>
                    <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729598/Techdots/images/ic_backArrow_cbdser.svg"
                      width={20} height={14} alt="back to services"
                    />
                    <span>Services</span>
                  </a>
                  <h1>Get the Affirmation for Your Prototype</h1>
                  <p>
                    An important aspect of startup validation is to interview consumers in your target market and find out
                    what they think of your concept or product before you invest too much time and money into it. Techdots,
                    help you navigate these complexities on each step.
                  </p>
                  <ul className={`${styles.services_list}`}>
                    <li>Analyses of unbiased consumer data</li>
                    <li>Identify market needs</li>
                    <li>Launching the right products to the market</li>
                  </ul>
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

        <section className={`${styles.validation} ${style.section_top_pd} ${style.section_bottom_pd} ${style.validation_block}`}>
          <div className={`${styles.validation_grid}`}>
            <div className={`${styles.validation_text}`}>
              <h3 className="mb-3">What we Do For Idea Validations</h3>
              <p>
                We have built a strong connection across the community by consuming and collecting a wide range of data.
                This assists us in mapping out the untapped market and target niche for multiple start-ups. By pinning out
                the required market, our team investigates the key benefits of launching your particular product, thus
                creating an ecosystem for the perfect launch.
              </p>
              <div className="mt-5">
                <h3 className="mb-3">Design, Test & Validate New Ideas</h3>
                <h4 className="mb-1 d-block">Innovation Accelerator</h4>
                <p>
                  Our experts coach the teams in developing the ideas into concepts. At the end of the accelerator your
                  decision-making board can decide which ideas to take forward. For one, building a resilient future could
                  mean creating a new, disruptive digital product. For another, it could be a radical rethink of the way
                  they work. Rather than trying to fix everything at once, we’ll help you focus on the changes that will
                  have the biggest impact for your business.
                </p>

                <h4>Innovation Island</h4>
                <p>
                  Bring your idea&apos;s and idea owner&apos;s to our online premises to be rapidly developed into a validated business
                  concept, pivoted or killed. Techdots multi-disciplinary team with design, business design and development
                  competences will be creating new business for you. After validation or implementation, the new business
                  will be integrated back.
                </p>
              </div>
              <div className="mt-5">
                <h3 className="mb-4">Let&apos;s Co-Create the Future</h3>
                <p>
                  Join a long list of satisfied clients, partners, and successful businesses that we have had the pleasure
                  of working with.
                </p>
              </div>
              <div className="mt-4 text-center-xs">
                <Link href="contact">
                  <a className="btn primary-btn">Start Now</a>
                </Link>
              </div>
            </div>
            <div className={`${styles.validation_img} ${style.block_img}`}>
              <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729601/Techdots/images/img1_ideaValidation_jgpeuf.png"
                alt="Validation img" width="100%" height="100%" layout="responsive" loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IdeaValidation;
