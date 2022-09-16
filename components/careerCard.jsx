import styles from "../styles/Career.module.scss";

const CareerCard = ({item, onClick}) => {
	return (
    <div className={styles.career_card_grid} onClick={onClick}>
      {/* <div className={`${styles.success_card_img} ${style.blog_card_img}`}>
        <Image src={item.mainImage} alt={item.title} width="100%" height="100%" layout="responsive" loading="lazy"/>
      </div> */}
      <div className={styles.career_card_block}>
        {/* <small className="clr-green d-block">Mobile Application</small> */}
        <h3 className="link-heading mb-2 mt-2">{item.title}</h3>
        <small className="text-muted d-block">{item.displayDesicription}</small>
      </div>
    </div>
  );
}

export default CareerCard;
