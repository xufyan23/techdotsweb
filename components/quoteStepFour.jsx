import styles from  "../styles/Quotation.module.scss";

const QuoteStepFour = ({onStepComplete, onStepBack}) => {
  const handleNext = () => {
    onStepComplete()
  }

  const handlePrevious = () => {
    onStepBack()
  }

  return (
    <div>
      <p className="heading-text">Please fill with your details</p>
      <div>
        <div className="from-group mb-3">
          <input type="text" className="form-control" name="fist name" placeholder="First Name"/>
        </div>
        <div className="from-group mb-3">
          <input type="text" className="form-control" name="last name" placeholder="Last Name"/>
        </div>
        <div className="from-group mb-3">
          <input type="email" className="form-control" name="email" placeholder="Email"/>
        </div>
        <div className="from-group mb-3">
          <input type="tel" className="form-control" name="number" placeholder="Telephone"/>
        </div>
        <div className="form-group mb-2">
          <label className="checkbox-container">
            <input
              id="checkbox-two"
              type="checkbox"
              name="scale_up_team"
            />
            Please accept
          <button className={styles.term_link} data-bs-toggle="modal" data-bs-target="#exampleModal">
            Terms and Condition
          </button>
          </label>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Terms and conditions</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
              Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus.
              </p>
              <p>
              Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus. Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus.
              </p>
              <p>
              Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus. Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn next-btn" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className={styles.action_btn}>
        <button className="btn prev-btn" onClick={handlePrevious}>Previous</button>
        <button className="btn next-btn" onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default QuoteStepFour;
