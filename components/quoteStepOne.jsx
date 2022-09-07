import { useState } from "react";
import styles from "../styles/Quotation.module.scss";

const QuoteStepOne = ({onStepComplete, stepOne, setStepOne}) => {
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!validate()) {
      return setError(true);
    }
    setError(false)
    onStepComplete();
  }

  const validate = () => {
    if(Object.keys(stepOne).length === 0) {
      return false;
    }
    return true;
  }

  const checkboxesText = {
    custom_interface_and_layout: 'Custom interface and layout',
    website_design: 'Website Design',
    CMS_integration: 'CMS Integration',
    react: 'React',
    node_js: 'Node JS',
  }

  const onCheckboxChanged = (event) => {
    const name = event.target.name;
    const newValue = {
      ...stepOne,
      [name]: checkboxesText[name]
    }
    if (!event.target.checked) {
      delete newValue[name];
    }
    setStepOne(newValue);
  }

  return (
    <div className={styles.step_one}>
      {
        error && <div className={styles.step_error}>Please select option</div>
      }

      <p className="heading-text">What your poject need?</p>
      <div className="form-group mb-3">
        <label className="checkbox-container">
          <input
            id="checkbox-two"
            type="checkbox"
            name="custom_interface_and_layout"
            onChange={onCheckboxChanged}
            checked={typeof stepOne['custom_interface_and_layout'] !== 'undefined'}
          />
          {checkboxesText['custom_interface_and_layout']}
        </label>
      </div>
      <div className="form-group mb-3">
        <label className="checkbox-container">
          <input
            id="checkbox-two"
            type="checkbox"
            name="website_design"
            onChange={onCheckboxChanged}
            checked={typeof stepOne['website_design'] !== 'undefined'}
          />
          {checkboxesText['website_design']}
        </label>
      </div>
      <div className="form-group mb-3">
        <label className="checkbox-container">
          <input
            id="checkbox-two"
            type="checkbox"
            name="CMS_integration"
            onChange={onCheckboxChanged}
            checked={typeof stepOne['CMS_integration'] !== 'undefined'}
          />
          {checkboxesText['CMS_integration']}
        </label>
      </div>
      <div className="form-group mb-3">
        <label className="checkbox-container">
          <input
            id="checkbox-two"
            type="checkbox"
            name="react"
            onChange={onCheckboxChanged}
            checked={typeof stepOne['react'] !== 'undefined'}
          />
          {checkboxesText['react']}
        </label>
      </div>
      <div className="form-group mb-3">
        <label className="checkbox-container">
          <input
            id="checkbox-two"
            type="checkbox"
            name="node_js"
            onChange={onCheckboxChanged}
            checked={typeof stepOne['node_js'] !== 'undefined'}
          />
          {checkboxesText['node_js']}
        </label>
      </div>
      <hr/>
      <div className={styles.action_btn}>
        <button className="btn next-btn" onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default QuoteStepOne;
