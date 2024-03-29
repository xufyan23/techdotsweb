import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Portfolio.module.scss";

export default function RightImgBlog({ item, type }) {
  const router = useRouter();

  return (
    <article className={`${styles.col_space} row col-reverse`}>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <h3 className={styles.right_heading}>{item.title}</h3>
        <p>{item.displayDesicription}</p>
        <button
          className={`${styles.learn_more} learn-more`}
          onClick={() => router.push(`/${type}/${item.slug.current}`)}
        >
          Find out More
          <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729603/Techdots/images/arrow-right_h6m1bd.svg"
            width={20} height={14} alt='learn more' priority={false}/>
        </button>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <div className={styles.col_blog_img}>
          <Image className={styles.card_img} src={item.mainImage} alt={item.title} width="100%" height="100%" layout="responsive"
            placeholder="blur"
            blurDataURL={item.mainImage}
          />
        </div>
      </div>
    </article>
  );
}
