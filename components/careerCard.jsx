import styles from "../styles/Career.module.scss";

const CareerCard = ({item, onClick}) => {
	return (
		<div className={styles.career_card_block} onClick={onClick}>
			{/* <small className="clr-green d-block">Mobile Application</small> */}
			<h3 className="link-heading mb-2 mt-2">{item.title}</h3>
			<small className="text-muted d-block">{item.displayDesicription}</small>
		</div>
  );
}

export default CareerCard;
