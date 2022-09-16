import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import getPosts from "../services/post";
import CareerCard from "../components/careerCard";
import styles from "../styles/Career.module.scss";

const Career = ({posts}) => {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
      setMappedPosts(posts);
  }, [posts]);

  return (
    <>
      <Head>
        <title>Career</title>
      </Head>
      <div className={`${styles.career_wrapper} career-wrapper`}>
        <Header />
        <div className={styles.career_bg}>
          <div className="container">
            <div className={styles.banner_col}>
              <div className={styles.banner_text}>
                <h1>Career</h1>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature from
                  45 BC, making it over
                </p>
              </div>
              {/* <div className={styles.banner_img}>
                <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729607/Techdots/images/validation_co06vp.svg"
                  width={486} height={324} alt="banner image"/>
              </div> */}
            </div>
          </div>
        </div>

        <section className={styles.career_card_section}>
          <div className="container">
            <h2>Open Positions</h2>
            <div className={styles.career_cardgrid}>
              {
                mappedPosts.length ? (
                  mappedPosts.map((item, index) => (
                    <CareerCard
                    onClick={() => router.push(`/careers/${item.slug.current}`)}
                    key={index}
                    item={item}
                  />
                ))
              ) : (
                <>We dont have any job opening right now</>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Career;

export const getServerSideProps = async (pageContext) => {
  const career = await getPosts('*[_type == "post" && "career" in categories[]->title] | order(_createdAt desc)');
  return {
    props: {
      posts: career,
    },
  };
};
