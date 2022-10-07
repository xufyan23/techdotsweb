import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BlogCard from '../components/blogCard';
import Header from "../components/header";
import getPosts from "../services/post";
import MetaTags from '../components/common/metaTags';
import styles from "../styles/Blogs.module.scss";

const Blogs = ({posts}) => {

  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
      setMappedPosts(posts);
  }, [posts]);

  return (
    <>
      <Head>
        <MetaTags
          title={posts.title}
          description={posts.displayDesicription}
          keywords={posts.title}
        />
      </Head>
      <div className={`${styles.blog_wrapper} blog-wrapper`}>
        <section className={styles.blog_bg}>
          <Header />
          <div className="container">
            <div className={styles.banner_col}>
              <div className={styles.banner_text}>
                <h1>Our Blogs</h1>
                <p>
                  Stay tuned with the latest news and industry articles around techdots blogs.
                </p>
              </div>
              <div className={styles.banner_img}>
                <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729607/Techdots/images/validation_co06vp.svg"
                  width={486} height={324} alt="banner image"
                  placeholder="blur"
                  blurDataURL="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729607/Techdots/images/validation_co06vp.svg"
                />
              </div>
            </div>
          </div>
        </section>
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
  const posts = await getPosts('*[_type == "post" && "blog" in categories[]->title] | order(_createdAt desc)');
  return {
    props: {
      posts: posts,
    },
  };
};
