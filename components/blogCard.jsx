import styles from "../styles/Home.module.scss";

export default function BlogCard({ item, onClick }) {
	// console.log(item.mainImage)
  return (
    <div className={`${styles.success_card}`} onClick={onClick}>
      <div className={`${styles.success_card_img}`}>
        <img src={item.mainImage} alt={item.title} loading="lazy" />
      </div>
      <div className={`${styles.success_card_des}`}>
        {/* <small className="clr-green d-block">Mobile Application</small> */}
        <h3 className="link-heading mb-2 mt-2">{item.title}</h3>
        <small className="text-muted d-block">{item.displayDesicription}</small>
      </div>
    </div>
  );
}
