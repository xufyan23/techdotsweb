import {useState} from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from  "../styles/Quotation.module.scss";

const  QouteStepThree = ({onStepComplete, onStepBack}) => {
  const [minCounter, setMinCounter] = useState(100);
  const [maxCounter, setMaxCounter] = useState(10000);
  const [rangeCounter, setRangeCounter] = useState(minCounter);

  const handleRangeValue = (e) => {
    setRangeCounter(e)
  }

  const handleNext = () => {
    onStepComplete()
  }

  const handlePrevious = () => {
    onStepBack()
  }
  // const calcWidth = () => {
  //   const rangeWidth = ((rangeCounter - minCounter) / (maxCounter - minCounter )) * 100;
  //   return `${rangeWidth}%`;
  // }

  // const handleSlideRange = () => {
  //   console.log("dsdsd")
  // }
//   const Slider = require('rc-slider');
// const createSliderWithTooltip = Slider.createSliderWithTooltip;
// const Range = createSliderWithTooltip(Slider.Range)
  return (
    <div>
      <p className="heading-text">What is your budget?</p>
      <div className={styles.range_slide}>
        <Slider min={100}
          max={10000} onChange={handleRangeValue}
        />
        <div id="range-value" className={styles.range_value}>{rangeCounter}</div>
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
