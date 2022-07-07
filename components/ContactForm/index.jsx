import styles from '../../styles/ContactForm.module.scss';


const ContactForm = () => {
  return (
    <div className={`${styles.contact_form}`}>
      <h2 className="mb-4">What would you like to do?</h2>
      <form>
        <div className="checkbox-inline">
          <div className="form-group">
            <label className="checkbox-container">
              <input type="checkbox" name="checkbox-checked" />
              Build a digital product
            </label>
          </div>
          <div className="form-group">
            <label className="checkbox-container">
              <input type="checkbox" name="checkbox-checked" />
              Scale up a team
            </label>
          </div>
        </div>

        <div className="checkbox-inline">
          <div className="form-group">
            <label className="checkbox-container">
              <input type="checkbox" name="checkbox-checked" />
              Speed up developement
            </label>
          </div>
          <div className="form-group">
            <label className="checkbox-container">
              <input type="checkbox" name="checkbox-checked" />
              Optimize product usability
            </label>
          </div>
        </div>

        <div className="checkbox-inline">
          <div className="form-group">
            <label className="checkbox-container">
              <input type="checkbox" name="checkbox-checked" />
              Other
            </label>
          </div>
        </div>

        <div className="form-inline mt-4">
          <div className="form-group mb-3">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="form-group mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
        </div>
        <div className="form-inline">
          <div className="form-group mb-3">
            <input type="text" className="form-control" placeholder="Subject" />
          </div>
        </div>
        <div className="form-group mb-3">
          <textarea
            className="form-control"
            name="Message"
            id=""
            cols="60"
            rows="10"
            placeholder="Message"
          ></textarea>
        </div>
        <div className={`${styles.action_btn}`}>
          <button className="btn primary-btn">Send us a message</button>
          <div className={`${styles.action_text}`}>
            <span>or contact us directly at</span>
            <a className={`clr-green ${styles.email_link}`} href="mailto:hello@techdots.com">hello@techdots.com</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
