import styles from  "../styles/Quotation.module.scss";

const QuotestepFive = ({onStepComplete, onStepBack}) => {
  const handleSubmit = () => {
    onStepComplete()
  }

  const handlePrevious = () => {
    onStepBack()
  }

  return (
    <div>
      <p className="heading-text">Summary</p>
      <div className={styles.step_text}>
        <span>1</span>
        <p>What your poject need?</p>
      </div>
      <hr />
      <div className={styles.step_text}>
        <span>2</span>
        <p>Additional information</p>
      </div>
      <hr/>
      <div className={styles.step_text}>
        <span>3</span>
        <p>What is your budget?</p>
      </div>
      <div className={styles.action_btn}>
        <button className="btn prev-btn" onClick={handlePrevious}>Previous</button>
        <button className="btn next-btn" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default QuotestepFive;
