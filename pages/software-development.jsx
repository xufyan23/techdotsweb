import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import { useRef } from "react";
import styles from "../styles/Services.module.scss";
import style from "../styles/ServicesPages.module.scss";

const SoftwareDevelopment = () => {
  const scrollToContact = useRef(null);
  const handleScroll = () => {
    scrollToContact.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Head>
        <title>Software Development</title>
      </Head>
      <div className={`${style.content_wrapper}`}>
        <section className={`${style.content_banner}`}>
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-9 col-xxl-9">
                <div className={`${style.banner_text}`}>
                  <a href="services" className={`btn clr-green ${styles.back_btn}`}>
                    <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729598/Techdots/images/ic_backArrow_cbdser.svg"
                      width={20} height={14} alt="back to services"
                    />
                    Services
                  </a>
                  <h1>Cutting-Edge Software Development Solutions</h1>
                  <p>
                    The quality of our web or software development services set us apart from the laggards. The Tech teams
                    at Techdots will help you design and build digital products and services people love to use. You’ll be
                    tapping into the knowledge and experience of the entire development community at Techdots
                  </p>
                  <ul className={`${styles.services_list}`}>
                    <li>We’ll help you bridge your internal digital skills gaps.</li>
                    <li>We’ll instill a culture that accelerates your digital transformation.</li>
                    <li>Empower continuous development with holistic DevOps</li>
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

        <section className={`${styles.validation} ${style.section_top_pd} ${style.section_bottom_pd} ${style.section_development}`}>
          <div className={`${styles.validation_grid}`}>
            <div className={`${styles.validation_text}`}>
              <h3 className="mb-4">Software Development as a Digital Asset</h3>
              <p>
                A company’s tech strategy determines its ability to compete in a rapidly changing business and technological environment.
                The impact of technological change on companies and society is far-reaching. A resilient tech strategy is a
                core component of our multidisciplinary software development approach, designed to shield your business
                from future shock.
              </p>
              <div className="mt-5">
                <h3 className="mb-4">We Develop it Your Way</h3>
                <p>
                  We provide custom software services that will create and execute a tech strategy. Our approach steers and
                  supports your technological choices, from architectures to frameworks and languages to CI/CD pipelines.
                  Our modern approach is complemented by our IoT services, and our software development services enable
                  you to adapt to and embrace a rapidly changing technological landscape.
                </p>
              </div>
              <div className="mt-5">
                <h3 className="mb-4 mb-xs-0">Continuous Process Improvement</h3>
                <p>
                  We’ll help unlock the potential of software in your organization by looking holistically at the people,
                  processes and technology in your IT organization. For those starting a new DevOps initiative, we run a
                  digital readiness and capability evaluation to determine the most effective roadmap for change and select
                  the best enterprise metrics to facilitate continuous improvement.
                </p>
              </div>
              <div className="mt-4 text-center-xs">
                <Link href="contact">
                  <a className="btn primary-btn">Start Now</a>
                </Link>
              </div>
            </div>
            <div className={`${styles.validation_img} ${style.development_inner_img}`}>
              <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1663060055/Techdots/images/img1_softwareDev_olhftz.png"
                width={"100%"} height={"100%"} layout="responsive" alt="development img" loading="lazy" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SoftwareDevelopment;
