import Image from "next/image";
import Head from 'next/head';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import Header from "../../components/header";
import MetaTags from '../../components/common/metaTags';
import getPosts from "../../services/post";
import styles from"../../styles/Post.module.scss";

const Career = ({post}) => {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    if (post.mainImage) {
      setImageUrl((post.mainImage))
    }

  }, [post.mainImage]);

  return (
    <>
      <Head>
        <MetaTags
          title={post.title}
          description={post.displayDesicription}
          keywords={post.title}
        />
      </Head>
      <div className={`blog-wrapper ${styles.post_wrapper}`}>
        <Header />
        <article className={styles.post_container}>
          <div className="apply-now">
            <button className="btn primary-btn"
              onClick={() => router.push(`/apply/${post.slug.current}`)}
              key={post}
            >Apply Now</button>
          </div>
          <h1>{post.title}</h1>
          <div className={styles.blog_banner}>
            {imageUrl && <Image src={imageUrl} alt={post.title} width={"100%"} height={"100%"} layout="responsive"
              placeholder="blur"
              blurDataURL={imageUrl}
              />
            }
          </div>
          <div className={styles.description}>
            <BlockContent blocks={post.body} projectId="p3umg9xf" dataset="production"/>
          </div>
        </article>
      </div>
    </>
  )
};

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;

  if(!pageSlug) {
    return {
      notFound: true
    }
  }

  const result = await getPosts(`*[_type == "post" && slug.current == "${pageSlug}" && "career" in categories[]->title]`);

  if (!result.length) {
    return {
      notFound: true
    }
  }

  const post = result[0];
  return {
    props: {
      post,
    }
  }
};

export default Career;
