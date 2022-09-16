import Image from "next/image";
import { useState, useEffect } from "react";
import imageUrlBuilder  from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import Header from "../../components/header";
import styles from"../../styles/Post.module.scss";

const Career = ({title, body, image}) => {
  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    const imgBuilder = imageUrlBuilder ({
      projectId: 'p3umg9xf',
      dataset: 'production'
    });

    setImageUrl(imgBuilder.image(image).url())

  }, [image]);

  return (
		<div className={`blog-wrapper ${styles.post_wrapper}`}>
		<Header />
		<div className={styles.post_container}>
			<h1>{title}</h1>
			<div className={styles.blog_banner}>
				{imageUrl && <Image src={imageUrl} alt={title} width={"100%"} height={"100%"} layout="responsive"/>}
			</div>
			<div className={styles.description}>
				<BlockContent blocks={body}/>
			</div>
		</div>
	</div>
  )
};

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;

  if(!pageSlug) {
    return {
      notFound: true
    }
  }

  const query = encodeURIComponent(`*[_type == "post" && slug.current == "${pageSlug}" && "career" in categories[]->title]`)


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
        title: post.title,
        body: post.body,
        image: post.mainImage,
      }
    }
  }
};

export default Career;
