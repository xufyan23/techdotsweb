import {useState} from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from  "../styles/Quotation.module.scss";

const QouteStepThree = ({onStepComplete, onStepBack, stepThree, setStepThree}) => {
  const handleRangeValue = (e) => {
    setStepThree(e)
  }

  const handleNext = () => {
    onStepComplete()
  }

  const handlePrevious = () => {
    onStepBack()
  }

  return (
    <div>
      <p className="heading-text">What is your budget?</p>
      <div className={styles.range_slide}>
        <Slider min={10000}
          max={30000} onChange={handleRangeValue}
          value={stepThree}
        />
        <div id="range-value" className={styles.range_value}>{stepThree}</div>
      </div>
      <div className="mt-3">
        <p>Lorem ipsum dolor sit amet, esse mazim disputando vix in. Quem reprimique eum ea, vim cu partem persius efficiantur.</p>
        <p>Lorem ipsum dolor sit amet, esse mazim disputando vix in. Quem reprimique eum ea, vim cu partem persius efficiantur.</p>
      </div>
      <hr/>
      <div className={styles.action_btn}>
        <button className="btn prev-btn" onClick={handlePrevious}>Previous</button>
        <button className="btn next-btn" onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default QouteStepThree;
