import Image from "next/image";
import { Router, useRouter } from "next/router";
import arrowRight from "../public/images/arrow-right.svg";
import styles from "../styles/SuccessStories.module.scss";

export default function RightImgBlog({ item }) {
  const router = useRouter();

  return (
    <div className={`${styles.col_space} row col-reverse`}>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xx-6">
        <h3 className={styles.right_heading}>{item.title}</h3>
        <p>{item.displayDesicription}</p>
        <button
          className={`${styles.learn_more} learn-more`}
          onClick={() => router.push(`/posts/${item.slug.current}`)}
        >
          Learn More
          <Image src={arrowRight} alt="learn more" />
        </button>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xx-6">
        <div className={styles.col_blog_img}>
          <img
            className={styles.card_img}
            src={item.mainImage}
            alt="card banner"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
