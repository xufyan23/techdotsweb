import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/SuccessStories.module.scss";

export default function LeftImgBlog({ item}) {
  const router = useRouter();

  return (
    <article className={`${styles.col_space} row`}>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <div className={styles.col_blog_img}>
          <Image className={styles.card_img} src={item.mainImage} alt={item.title} width="100%" height="100%" layout="responsive" loading="lazy"/>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ptxs-1">
        <h3 className={styles.left_heading}>{item.title}</h3>
        <p>{item.displayDesicription}</p>
        <button
          className={`${styles.learn_more} learn-more`}
          onClick={() => router.push(`/posts/${item.slug.current}`)}
        >
          Learn More
          <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729603/Techdots/images/arrow-right_h6m1bd.svg"
            width={20} height={14} alt='learn more'/>
        </button>
      </div>
    </article>
  );
}
