import Head from "next/head";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import ContactForm from "../components/contactForm";
import Header from "../components/header";
import getPosts from "../services/post";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/SuccessStories.module.scss";
import RightImgBlog from "../components/rightImgBlog";
import LeftImgBlog from "../components/leftImgBlog";

const SuccessStories = ({posts}) => {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);
  const [blogPost, setBlogPost] = useState([])
  const scrollToContact = useRef(null);

  const handleScroll = () => {
    scrollToContact.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    setMappedPosts(posts.slice(0, 2));
    setBlogPost(posts);
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
                          router.push(`/posts/${item.slug.current}`)
                        }
                        className={`${styles.success_card} ${
                          index > 0 ? styles.small_card : ""
                        }`}
                      >
                        <div className={`${styles.success_card_img}`}>
                          <img
                            src={item.mainImage}
                            alt={item.title}
                            loading="lazy"
                          />
                        </div>
                        <div className={`${styles.success_card_des}`}>
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
            <div>
              {blogPost.length ? (
                blogPost.map((item, index) =>
                  index % 2 === 0 ? (
                    <RightImgBlog item={item} key={index}/>
                  ) : (
                    <LeftImgBlog item={item} key={index} />
                  )
                )
              ) : (
                <>No Posts Yet</>
              )}
            </div>
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

export default SuccessStories;

export const getServerSideProps = async (pageContext) => {
  const posts = await getPosts();
  return {
    props: {
      posts: posts,
    },
  };
};
