import { useState } from "react";
import styles from "../styles/Quotation.module.scss";

const QuoteStepFour = ({onStepComplete, onStepBack, stepFour, setStepFour}) => {
  const [firstName , setFirstName] = useState(stepFour.firstName)
  const [lastName , setLastName] = useState(stepFour.lastName)
  const [email , setEmail] = useState(stepFour.email)
  const [telephone , setTelephone] = useState(stepFour.telephone)
  const [termCheckbox, setTermCheckbox] = useState(stepFour.termsChecked)
  const [errors, setErrors] = useState({})

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleNext = () => {
    // console.log(firstName, lastName, email, telephone);
    setStepFour({
      firstName,
      lastName,
      email,
      telephone,
      termsChecked: termCheckbox,
    })

    if(validate() > 0) {
      return;
    }

    onStepComplete()
  }

  const validate = () => {
    errors = {};
    if(firstName === '') {
      errors.firstName = true;
    }

    if(lastName === '') {
      errors.lastName = true;
    }

    if(email === '' || !email.match(emailRegex)) {
      errors.email = true;
    }

    if(telephone === '') {
      errors.telephone = true;
    }

    if(termCheckbox === false) {
      errors.termCheckbox = true
    }

    setErrors(errors);

    return Object.keys(errors).length
  }

  const handlePrevious = () => {
    setStepFour({
      firstName,
      lastName,
      email,
      telephone,
      termsChecked: termCheckbox,
    })
    onStepBack()
  }

  return (
    <div className={styles.step_four}>
      <p className="heading-text">Please fill with your details</p>
      <div>
        <div className="from-group mb-3">
          <input type="text"
            className="form-control"
            name="fist name"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            />
          {
            errors.firstName && <div className={styles.step_error}>Please enter first name</div>
          }
        </div>
        <div className="from-group mb-3">
          <input type="text"
            className="form-control"
            name="last name"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            />
          {
            errors.lastName && <div className={styles.step_error}>Please enter last name</div>
          }
        </div>
        <div className="from-group mb-3">
          <input type="email"
            className="form-control"
            name="email" value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            />
            {
              errors.email && <div className={styles.step_error}>Email not be empty or invalid</div>
            }
        </div>
        <div className="from-group mb-3">
          <input type="tel"
            className="form-control"
            name="number" value={telephone}
            placeholder="Telephone"
            onChange={(e) => setTelephone(e.target.value)}
            />
            {
              errors.telephone && <div className={styles.step_error}>Please enter telephone</div>
            }
        </div>
        <div className="form-group mb-2">
          <label className="checkbox-container">
            <input
              id="accept-checkbox"
              type="checkbox"
              name="accept checkbox"
              checked={termCheckbox}
              onChange={(e) => setTermCheckbox(e.target.checked)}
            />
            Please accept
          <button className={styles.term_link} data-bs-toggle="modal" data-bs-target="#exampleModal">
            Terms and Condition
          </button>
          </label>
          {
            errors.termCheckbox && <div className={styles.step_error}>Please accept terms and condition</div>
          }
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
