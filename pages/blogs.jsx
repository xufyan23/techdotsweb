import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BlogCard from '../components/blogCard';
import Header from "../components/header";
import blogImg from "../public/images/validation.svg";
import styles from "../styles/Blogs.module.scss";

const Blogs = ({posts}) => {

  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "p3umg9xf",
        dataset: "production",
      });
      setMappedPosts(
        posts.map((post) => {
          return {
            ...post,
            mainImage: imgBuilder.image(post.mainImage),
          };
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (
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
              <Image src={blogImg} alt="" />
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
                title={item.title}
                blogImage={item.mainImage}
                description={item.displayDesicription}
              />
            ))
          ) : (
            <>No Posts Yet</>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blogs;

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent('*[_type == "post"]');
  const url = `https://p3umg9xf.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());
  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
};
