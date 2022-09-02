import styles from  "../styles/Quotation.module.scss";

const QuoteStepOne = ({onStepComplete, setProjectNeeds}) => {

  const handleNext = () => {
    //Validation
    setProjectNeeds([]);
    onStepComplete();
  }

  return (
    <div>
      <p className="heading-text">What your poject need?</p>
      <div className="form-group mb-3">
        <label className="checkbox-container">
          <input
            id="checkbox-two"
            type="checkbox"
            name="scale_up_team"
          />
          Custom interface and layout
        </label>
      </div>
      <div className="form-group mb-3">
        <label className="checkbox-container">
          <input
            id="checkbox-two"
            type="checkbox"
            name="scale_up_team"
          />
          Website Design
        </label>
      </div>
      <div className="form-group mb-3">
        <label className="checkbox-container">
          <input
            id="checkbox-two"
            type="checkbox"
            name="scale_up_team"
          />
          CMS integration
        </label>
      </div>
      <div className="form-group mb-3">
        <label className="checkbox-container">
          <input
            id="checkbox-two"
            type="checkbox"
            name="scale_up_team"
          />
          React
        </label>
      </div>
      <div className="form-group mb-3">
        <label className="checkbox-container">
          <input
            id="checkbox-two"
            type="checkbox"
            name="scale_up_team"
          />
          Node JS
        </label>
      </div>
      <hr/>
      <div className={styles.action_btn}>
        {/* <button className="btn prev-btn d-none">Previous</button> */}
        <button className="btn next-btn" onClick={handleNext}>Next</button>
        {/* <button className="btn next-btn d-none">Submit</button> */}
      </div>
    </div>
  )
}

export default QuoteStepOne;
