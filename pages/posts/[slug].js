import Image from "next/image";
import Head from 'next/head';
import { useState, useEffect } from "react";
import imageUrlBuilder  from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import Header from "../../components/header";
import MetaTags from '../../components/common/metaTags';
import styles from"../../styles/Post.module.scss";

const Post = ({post}) => {
  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    const imgBuilder = imageUrlBuilder ({
      projectId: 'p3umg9xf',
      dataset: 'production'
    });

    setImageUrl(imgBuilder.image(post.mainImage).url())

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
          <h1>{post.title}</h1>
          <div className={styles.blog_banner}>
            {imageUrl && <Image src={imageUrl} alt={post.title} width={"100%"} height={"100%"} layout="responsive"
              placeholder="blur"
              blurDataURL={imageUrl}
            />}
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

  const query = encodeURIComponent(`*[_type == "post" && slug.current == "${pageSlug}" && "blog" in categories[]->title]`)


  const url = `https://p3umg9xf.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const post = result.result[0];
  if(!post) {
    return {
      notFound: true
    }
  }
  else {
    return {
      props: {
        post,
      }
    }
  }
};

export default Post;
