import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BlogCard from '../components/blogCard';
import Header from "../components/header";
import styles from "../styles/Blogs.module.scss";
import getPosts from "../services/post";

const Blogs = ({posts}) => {

  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
      setMappedPosts(posts);
  }, [posts]);

  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <div className={`${styles.blog_wrapper} blog-wrapper`}>
        <Header />
        <div className={styles.blog_bg}>
          <div className="container">
            <div className={styles.banner_col}>
              <div className={styles.banner_text}>
                <h1>Our Blogs</h1>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature from
                  45 BC, making it over
                </p>
              </div>
              <div className={styles.banner_img}>
                <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729607/Techdots/images/validation_co06vp.svg"
                  width={486} height={324} alt="banner image"/>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={styles.blog_cardgrid}>
            {
              mappedPosts.length ? (
                mappedPosts.map((item, index) => (
                  <BlogCard
                  onClick={() => router.push(`/posts/${item.slug.current}`)}
                  key={index}
                  item={item}
                />
              ))
            ) : (
              <>No Posts Yet</>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;

export const getServerSideProps = async (pageContext) => {
  const posts = await getPosts();
  return {
    props: {
      posts: posts,
    },
  };
};
