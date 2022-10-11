import Head from "next/head";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import ContactForm from "../components/contactForm";
import Header from "../components/header";
import getPosts from "../services/post";
import { useState, useEffect, useRef } from "react";
import RightImgBlog from "../components/rightImgBlog";
import LeftImgBlog from "../components/leftImgBlog";
import MetaTags from '../components/common/metaTags';
import styles from "../styles/Portfolio.module.scss";

const Portfolio = ({posts, bannerPosts}) => {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);
  const [portfolioPost, setPortfolioPost] = useState([])
  const scrollToContact = useRef(null);

  const handleScroll = () => {
    scrollToContact.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setMappedPosts(bannerPosts);
    setPortfolioPost(posts);
  }, [posts, bannerPosts]);

  return (
    <>
      <Head>
        <MetaTags
          title="Portfolio"
          description="We deliver digital products & statergies that help you grow dd"
          keywords="Lets create something great together"
        />
      </Head>
      <div className={`${styles.success_stories} success-wrapper`}>
        <section className="banner">
          <Header />
          <div className="container-fluid">
            <div className="banner_col">
              <div className="banner_text">
                <div className="banner_text-box">
                  {/* <div className="clr-green">P</div> */}
                  <h1>Portfolio</h1>
                  <p>
                    Let&apos;s create something great together
                    <span className="d-block">
                    We deliver digital products and strategies that help you grow.
                    </span>
                  </p>
                  <div className="btn-block">
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
              <div className="banner-cards">
                <div className={`${styles.card_flex} cards-block`}>
                  {mappedPosts.length ? (
                    mappedPosts.map((item, index) => (
                      <div
                        key={index}
                        onClick={() =>
                          router.push(`/portfolio/${item.slug.current}`)
                        }
                        className={`${styles.success_card} ${
                          index > 0 ? styles.small_card : ""
                        }`}
                      >
                        <div className={`${styles.success_card_img}`}>
                          {/* <img
                            src={item.mainImage}
                            alt={item.title}
                            loading="lazy"
                          /> */}
                          <Image className={styles.card_img} src={item.mainImage} alt={item.title} width={"100%"} height={"100%"}
                            layout="responsive" priority={false}
                            placeholder="blur"
                            blurDataURL={item.mainImage}
                          />
                        </div>
                        <div className={`${styles.success_card_des}`}>
                          <h3 className="link-heading mb-2 mt-2">
                            {item.title}
                          </h3>
                          <small className="text-muted text-ellipsis">
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
            {portfolioPost.length ? (
              portfolioPost.map((item, index) =>
                index % 2 === 0 ? (
                  <RightImgBlog item={item} type="portfolio" key={index}/>
                ) : (
                  <LeftImgBlog item={item} type="portfolio" key={index} />
                )
              )
            ) : (
              <>No Posts Yet</>
            )}
          </div>
        </section>

        <section className="contact-form">
          <div className="container">
            <div className="row">
              <div
                className="col-12 col-sm-10 col-md-10 col-lg-8 col-xl-8 col-xxl-6 m-auto"
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

export default Portfolio;

export const getServerSideProps = async (pageContext) => {
  const posts = await getPosts('*[_type == "post" && "portfolio" in categories[]->title] | order(_createdAt desc)');
  const bannerPosts = await getPosts('*[_type == "post" && "portfolio" in categories[]->title] | order(_createdAt desc) [0...2]');

  return {
    props: {
      posts,
      bannerPosts,
    },
  };
};
