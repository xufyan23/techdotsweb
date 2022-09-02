import styles from  "../styles/Quotation.module.scss";

const QuoteStepTwo = ({onStepComplete, onStepBack}) => {

  const handleNext = () => {
    onStepComplete();
  }

  const handlePrevious = () => {
    onStepBack();
  }

  return (
    <div>
      <p className="heading-text">Please provide any additional information</p>
      <div className="form-group">
        <label className="mb-2">Additional information</label>
        <textarea
          className="form-control"
          name="message"
          rows="5"
          cols="60"
          placeholder="Type here additional info"
        ></textarea>
      </div>
      <hr/>
      <div className={styles.action_btn}>
        <button className="btn prev-btn" onClick={handlePrevious}>Previous</button>
        <button className="btn next-btn" onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default QuoteStepTwo;
