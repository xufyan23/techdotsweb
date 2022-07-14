import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/contactForm";
import Header from "../components/header";
import arrowRight from "../public/images/arrow-right.svg";
import CardImg1 from "../public/images/card-img-1.png";
import CardImg2 from "../public/images/card-img-2.png";
import CardImg3 from "../public/images/card-img-3.png";
import CardImg4 from "../public/images/service-sample.png";
import styles from "../styles/SuccessStories.module.scss";

const SuccessStories = () => {
  return (
    <div>
      <Head>
        <title>Services</title>
      </Head>
      <div className={`${styles.success_stories} success-wrapper`}>
        <section className="banner">
          <Header />
          <div className="container-fluid">
            <div className="banner_col">
              <div className="banner_text">
                <div className="banner_text-box">
                  <div className="clr-green">Success Stories</div>
                  <h1>Portfolio</h1>
                  <p>
                    Techdots is a product-focused software development
                    <span className="d-block">
                      agency for enterprise & high-growth companies.
                    </span>
                  </p>
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
              <div className="banner-cards">
                <div className={`${styles.card_flex}`}>
                  <div className={`${styles.success_card}`}>
                    <div className={`${styles.success_card_img}`}>
                      <Image src={CardImg1} alt="card banner" loading="lazy" />
                    </div>
                    <div className={`${styles.success_card_des}`}>
                      <small className="clr-green d-block">
                        Mobile Application
                      </small>
                      <Link href="#/">
                        <a className="link-heading mb-2 mt-2">
                          The software that we build takes our clients to the
                          next level
                        </a>
                      </Link>
                      <small className="text-muted d-block">
                        The software that we build takes our clients to the next
                        level The software that we build
                      </small>
                    </div>
                  </div>

                  <div className={`${styles.success_card} ${styles.small_card}`}>
                    <div className={`${styles.success_card_img}`}>
                      <Image src={CardImg2} alt="card banner" loading="lazy" />
                    </div>
                    <div className={`${styles.success_card_des}`}>
                      <small className="clr-green d-block">
                        Mobile Application
                      </small>
                      <Link href="#/">
                        <a className={`${styles.link_heading_sm}`}>
                          The software that we build takes our clients to the
                          next level
                        </a>
                      </Link>
                      <small className="text-muted d-block">
                        The software that we build takes our clients to the next
                        level The software that we build
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.card_section}`}>
          <div className="container">
            <div className={`${styles.col_space} row`}>
              <div className="col-6">
                <h3>A remade backend supported <span className="d-block">eSky&apos;s global expansion</span></h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
                <Link href="/learn">
                  <a className="learn-more">
                    Learn More{" "}
                    <Image src={arrowRight} alt="learn more" loading="lazy" />
                  </a>
                </Link>
              </div>
              <div className="col-6">
                <Image src={CardImg4} className={`${styles.card_img}`} alt="card img" />
              </div>
            </div>
            <div className={`${styles.col_space} row`}>
              <div className="col-6">
                <Image src={CardImg4} className={`${styles.card_img}`} alt="card img" />
              </div>
              <div className="col-6">
                <h3>A remade backend supported <span className="d-block">eSky&apos;s global expansion</span></h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
                <Link href="/learn">
                  <a className="learn-more">
                    Learn More{" "}
                    <Image src={arrowRight} alt="learn more" loading="lazy" />
                  </a>
                </Link>
              </div>
            </div>
            <div className={`${styles.col_space} row`}>
              <div className="col-6">
                <h3>A remade backend supported <span className="d-block">eSky&apos;s global expansion</span></h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
                <Link href="/learn">
                  <a className="learn-more">
                    Learn More{" "}
                    <Image src={arrowRight} alt="learn more" loading="lazy" />
                  </a>
                </Link>
              </div>
              <div className="col-6">
                <Image src={CardImg4} className={`${styles.card_img}`} alt="card img" />
              </div>
            </div>
            <div className={`${styles.col_space} row`}>
              <div className="col-6">
                <Image src={CardImg4} className={`${styles.card_img}`} alt="card img" />
              </div>
              <div className="col-6">
                <h3>A remade backend supported <span className="d-block">eSky&apos;s global expansion</span></h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
                <Link href="/learn">
                  <a className="learn-more">
                    Learn More{" "}
                    <Image src={arrowRight} alt="learn more" loading="lazy" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form">
          <div className="container">
            <div className="row">
              <div className="col-6 m-auto">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SuccessStories;
