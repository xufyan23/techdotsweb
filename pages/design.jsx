import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import { useRef } from "react";
import styles from "../styles/Services.module.scss";
import MetaTags from '../components/common/metaTags';
import style from "../styles/ServicesPages.module.scss";

const Design = () => {
  const scrollToContact = useRef(null);
  const handleScroll = () => {
    scrollToContact.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Head>
        <MetaTags
          title="Design"
          description="Embrace the Visual Appeal of your MVP"
          keywords="Design"
        />
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
                  <h1>Embrace the Visual Appeal of your MVP </h1>
                  <p>
                    Your MVP should be well-balanced so you can explore the potential of your idea effectively and affordably.
                    In order for your product to stand out among its competitors, it must have the right balance of basic
                    functionality and unique features.
                  </p>
                  <ul className={`${styles.services_list}`}>
                    <li>Creating functional pattern to process</li>
                    <li>Keeping the visual element intact</li>
                    <li>Managing the balance of measured result and usability</li>
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

        <article className={`${styles.design} ${style.section_top_pd} ${style.section_bottom_pd} ${style.design_block}`}>
          <div className={`${styles.design_img} ${style.section_img}`}>
            <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1663060055/Techdots/images/img1_design_usaunt.png"
              width={755} height={405} alt="design img"
              placeholder="blur"
              blurDataURL="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1663060055/Techdots/images/img1_design_usaunt.png"
            />
          </div>
          <div className={`${styles.design_text}`}>
              <h3 className="mb-4">How We Design</h3>
              <p>
                Developing the MVP is not a usual task when you precisely target market potential and goals. Our team of
                experts work simultaneously with business analysts for margin potential by running price tests.
                We assist you in locating values that matter to your customers and what the gap in the market is with value
                proposition tests.
              </p>
              <div className="mt-4 text-center-xs">
                <Link href="contact">
                  <a className="btn primary-btn">Start Now</a>
                </Link>
              </div>
            </div>
        </article>
      </div>
    </>
  );
};

export default Design;
