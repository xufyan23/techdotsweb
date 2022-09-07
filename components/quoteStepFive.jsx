import styles from  "../styles/Quotation.module.scss";
import Loader from "./loader";

const QuotestepFive = ({onStepComplete, onStepBack, stepOne, stepTwo, stepThree, loading}) => {
  const handleSubmit = () => {
    onStepComplete()
  }

  const handlePrevious = () => {
    onStepBack()
  }

  return (
    <div className={styles.step_five}>
      <p className="heading-text">Summary</p>
      <div>
        <div className={styles.step_text}>
          <span>1</span>
          <p className={styles.heading_text}>What your poject need?</p>
        </div>
        <ul className={styles.list_block}>{
          Object.keys(stepOne).map((key, index) => (
            <li key={index}>{stepOne[key]}</li>
          ))
        }</ul>
      </div>
      <hr />

      <div>
        <div className={styles.step_text}>
          <span>2</span>
          <p className={styles.heading_text}>Additional information</p>
        </div>
        <p className={styles.list_block}>{stepTwo}</p>
      </div>
      <hr/>
      <div>
        <div className={styles.step_text}>
          <span>3</span>
          <p className={styles.heading_text}>What is your budget?</p>
        </div>
        <p className={styles.list_block}>${stepThree}</p>
      </div>
      <hr/>
      <div className={styles.action_btn}>
        <button className="btn prev-btn" disabled={loading ? true: false } onClick={handlePrevious}>Previous</button>
        <button className="btn next-btn" onClick={handleSubmit}>{ loading ? <Loader /> : 'Submit'}</button>
      </div>
    </div>
  );
}

export default QuotestepFive;
