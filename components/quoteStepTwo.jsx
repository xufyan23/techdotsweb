import {useState} from "react";
import styles from "../styles/Quotation.module.scss";

const QuoteStepTwo = ({onStepComplete, onStepBack, stepTwo, setStepTwo}) => {
  const [error, setError] = useState(false);

  const handleTextArea = (event) => {
    const textArea = event.target.value
    // console.log(textArea)
    setStepTwo(textArea);
  }

  const handleNext = () => {
    if(!validate()) {
      return setError(true)
    }
    setError(false)
    onStepComplete();
  }

  const validate = () => {
    if(!stepTwo || stepTwo === '' ) {
      return false
    }
    return true
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
          value={stepTwo}
          onChange={handleTextArea}
        ></textarea>
        {
          error && <div className={styles.step_error}>Please enter text</div>
        }

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
