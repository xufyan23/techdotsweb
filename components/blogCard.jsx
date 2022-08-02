import styles from "../styles/Home.module.scss";

export default function BlogCard({ title, blogImage, description, onClick }) {
  return (
    <div className={`${styles.success_card}`} onClick={onClick}>
      <div className={`${styles.success_card_img}`}>
        <img src={blogImage} alt="card banner" loading="lazy" />
      </div>
      <div className={`${styles.success_card_des}`}>
        {/* <small className="clr-green d-block">Mobile Application</small> */}
        <h3 className="link-heading mb-2 mt-2">{title}</h3>
        <small className="text-muted d-block">{description}</small>
      </div>
    </div>
  );
}
