import Head from "next/head";
import { Router, useRouter } from "next/router";
import Image from "next/image";
import ContactForm from "../components/contactForm";
import Header from "../components/header";
import arrowRight from "../public/images/arrow-right.svg";
import CardImg4 from "../public/images/service-sample.png";
import getPosts from "../services/post";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/SuccessStories.module.scss";

const SuccessStories = ({posts}) => {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);
  const scrollToContact = useRef(null);

  const handleScroll = () => {
    scrollToContact.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    setMappedPosts(posts.slice(0, 2));
  }, [posts]);

  return (
    <>
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
                    <button className="btn primary-btn btn-white" onClick={handleScroll}>
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
              <div className="banner-cards">
                <div className={`${styles.card_flex} cards-block`}>
                  {mappedPosts.length ? (
                    mappedPosts.map((item, index) => (
                      <div
                        key={index} onClick={() =>
                          router.push(`/posts/${item.slug.current}`)
                        }
                        className={`${styles.success_card} ${
                          index > 0 ? styles.small_card : ""
                        }`}
                      >
                        <div className={`${styles.success_card_img}`}>
                          <img
                            src={item.mainImage}
                            alt="card banner"
                            loading="lazy"
                          />
                        </div>
                        <div className={`${styles.success_card_des}`}>
                          {/* <small className="clr-green d-block">
                            Mobile Application
                          </small> */}
                          <h3 className="link-heading mb-2 mt-2">
                            {item.title}
                          </h3>
                          <small className="text-muted d-block">
                            {item.displayDesicription}
                          </small>
                        </div>
                      </div>
                    ))
                  ) : (
                    <>No Posts Yet</>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.card_section}`}>
          <div className="container">
            <div className={`${styles.col_space} row col-reverse `}>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                <h3>
                  A remade backend supported{" "}
                  <span className="d-block">eSky&apos;s global expansion</span>
                </h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
                <button className={`${styles.learn_more}`}>
                  Learn More
                  <Image src={arrowRight} alt="learn more" loading="lazy" />
                </button>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                <Image
                  src={CardImg4}
                  className={`${styles.card_img}`}
                  alt="card img"
                />
              </div>
            </div>
            <div className={`${styles.col_space} row`}>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                <Image
                  src={CardImg4}
                  className={`${styles.card_img}`}
                  alt="card img"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xx-6 ptxs-1">
                <h3>
                  A remade backend supported{" "}
                  <span className="d-block">eSky&apos;s global expansion</span>
                </h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
                <button className={`${styles.learn_more}`}>
                  Learn More
                  <Image src={arrowRight} alt="learn more" loading="lazy" />
                </button>
              </div>
            </div>
            <div className={`${styles.col_space} row col-reverse`}>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xx-6 ptxs-1">
                <h3>
                  A remade backend supported{" "}
                  <span className="d-block">eSky&apos;s global expansion</span>
                </h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
                <button className={`${styles.learn_more}`}>
                  Learn More
                  <Image src={arrowRight} alt="learn more" loading="lazy" />
                </button>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                <Image
                  src={CardImg4}
                  className={`${styles.card_img}`}
                  alt="card img"
                />
              </div>
            </div>
            <div className={`${styles.col_space} row`}>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                <Image
                  src={CardImg4}
                  className={`${styles.card_img}`}
                  alt="card img"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xx-6 ptxs-1">
                <h3>
                  A remade backend supported{" "}
                  <span className="d-block">eSky&apos;s global expansion</span>
                </h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
                <button className={`${styles.learn_more}`}>
                  Learn More
                  <Image src={arrowRight} alt="learn more" loading="lazy" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-10 col-md-10 col-lg-8 col-xl-8 col-xxl-6 m-auto" ref={scrollToContact}>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SuccessStories;

export const getServerSideProps = async (pageContext) => {
  const posts = await getPosts();
  return {
    props: {
      posts: posts,
    },
  };
};
