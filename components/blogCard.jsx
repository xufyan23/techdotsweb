import Image from 'next/image';
import styles from "../styles/Home.module.scss";
import style from "../styles/Blogs.module.scss";

export default function BlogCard({ item, onClick }) {
	// console.log(item.mainImage)
  return (
    <article className={`${styles.success_card} ${style.blog_card}`} onClick={onClick}>
      <div className={`${styles.success_card_img} ${style.blog_card_img}`}>
        <Image src={item.mainImage} alt={item.title} width="100%" height="100%" layout="responsive" loading="lazy"/>
      </div>
      <div className={`${styles.success_card_des}`}>
        {/* <small className="clr-green d-block">Mobile Application</small> */}
        <h3 className="link-heading mb-2 mt-2">{item.title}</h3>
        <small className="text-muted d-block">{item.displayDesicription}</small>
      </div>
    </article>
  );
}
