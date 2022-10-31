import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import Recaptcha from "./recaptcha";
// import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";
import mixpanel from 'mixpanel-browser';
mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_KEY);
import styles from "../styles/ContactForm.module.scss";

const ContactForm = () => {
  const { register, handleSubmit, handleError, formState: { errors, isDirty, isValid } } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => console.log(data);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState();
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  const [checkedCheckbox, setCheckedCheckbox] = useState({})

  const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    subject: {required: "Subject is required"},
    meessage: {required: "Message is required"},
  };

  const onVerify = (token) => {
    setToken(token);
  };

  const handleSendMessage = () => {
    mixpanel.track("send_us_a_message");
  }

  const onCheckboxChanged = (event) => {
    const name = event.target.name;
    const newValue = {
      ...checkedCheckbox,
      [name]: checkboxesText[name]
    }
    if (!event.target.checked) {
      delete newValue[name];
    }
    setCheckedCheckbox(newValue);
  }
  const handleBorderValidation = (error) => {
    return error ? { border: "1px solid #cc0707" } : {}
  }
  const handleEmail = async(event) => {
    event.preventDefault();

    // console.log(checkedCheckbox);
    const checkboxHTML = Object.keys(checkedCheckbox).map((name) => {
      return `<li>${checkedCheckbox[name]}</li>`;
    }).join('');
    // console.log(checkboxHTML);
    const res = await fetch("/api/mail", {
      body: JSON.stringify({
        email: "hina@techdots.dev",
        subject: subject,
        fromName: `${name} - Techdots`,
        message: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Contact Form</title>
          <meta name="description" content="Contact Form">
          <meta name="author" content="SitePoint">
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        </head>

        <body>
          <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';"></div>
          <div class="container" style="margin-left: 20px;margin-right: 20px;">
            <h3>You've got a new mail from ${name}, their email is: ✉️${email} </h3>
            <div style="font-size: 13px;">
              <p style="width: 70%;">${message}</p>
            </div>
            <ul>${checkboxHTML}</ul>
            <div style="margin-top: 20px;">
              <p style="font-size: 13px; margin-bottom: 0px; margin-top: 0;">Kind Regards:</p>
              <p style="font-size: 13px; margin-bottom: 0px; margin-top: 0;">Techdots | HR Manager</p>
            </div>
            <div style="margin-top: 20px;">
              <p style="font-weight: 600; font-size: 13px; margin-bottom: 0; margin-top: 0;">Techdots</p>
              <p style="margin-bottom: 0; margin-top: 0;">Mobile: +92 9587738861</p>
              <p style="font-size: 13px; margin-bottom: 0; margin-top: 0;">Address: Al Hafeez Executive, 6th floor Office 601- 603 C3, Gulberg III, Lahore</p>
              <a href="https://techdots.dev/">www.techdots.dev</a>
            </div>
          </div>
        </body>
        </html>`,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    // console.log(name, email, subject, message);
    event.target.reset();
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  const checkboxesText = {
    digital_product: 'Build a digital product',
    scale_up_team: 'Scale up a team',
    speed_up_developement: 'Speed up developement',
    optimize_product_usability: 'Optimize product usability',
    other: 'Other'
  }

  return (
    <div className={`${styles.contact_form}`}>
      <h2 className="mb-4">What would you like to do?</h2>

      {/* <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      > */}
        {/* <GoogleReCaptcha onVerify={onVerify} /> */}
        <form
          onSubmit={(handleSubmit(onSubmit, handleError), handleEmail)}
          method="post"
        >
          <div className="checkbox-inline">
            <div className="form-group">
              <label className="checkbox-container">
                <input
                  id="checkbox-one"
                  type="checkbox"
                  name="digital_product"
                  onChange={onCheckboxChanged}
                />
                {checkboxesText['digital_product']}
              </label>
            </div>
            <div className="form-group">
              <label className="checkbox-container">
                <input
                  id="checkbox-two"
                  type="checkbox"
                  name="scale_up_team"
                  onChange={onCheckboxChanged}
                />
                {checkboxesText['scale_up_team']}
              </label>
            </div>
          </div>

          <div className="checkbox-inline">
            <div className="form-group">
              <label className="checkbox-container">
                <input
                  id="checkbox-three"
                  type="checkbox"
                  name="speed_up_developement"
                  onChange={onCheckboxChanged}
                />
                {checkboxesText['speed_up_developement']}
              </label>
            </div>
            <div className="form-group">
              <label className="checkbox-container">
                <input
                  id="checkbox-four"
                  type="checkbox"
                  name="optimize_product_usability"
                  onChange={onCheckboxChanged}
                />
                {checkboxesText['optimize_product_usability']}
              </label>
            </div>
          </div>

          <div className="checkbox-inline">
            <div className="form-group">
              <label className="checkbox-container">
                <input
                  id="checkbox-five"
                  type="checkbox"
                  name="other"
                  onChange={onCheckboxChanged}
                />
                {checkboxesText['other']}
              </label>
            </div>
          </div>

          <div className="form-inline mt-4">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                id="name"
                name="name"
                value={name}
                style={handleBorderValidation(errors.name)}
                {...register("name", registerOptions.name)}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <span className="text-danger">
                {errors?.name && errors.name.message}
              </span>
            </div>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                id="email"
                value={email}
                style={handleBorderValidation(errors.email)}
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Your email is not valid",
                  },
                })}
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <span className="text-danger">
                {errors?.email && errors.email.message}
              </span>
            </div>
          </div>
          <div className="form-inline">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                id="subject"
                value={subject}
                style={handleBorderValidation(errors.subject)}
                {...register("subject", registerOptions.subject)}
                onChange={(e) => setSubject(e.target.value)}
              />
              <span className="text-danger">
                {errors?.subject && errors.subject.message}
              </span>
            </div>
          </div>
          <div className="form-group mb-3">
            <textarea
              className="form-control"
              name="message"
              cols="60"
              rows="10"
              placeholder="Message"
              id="message"
              value={message}
              style={handleBorderValidation(errors.meessage)}
              {...register("meessage", registerOptions.meessage)}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <span className="text-danger">
              {errors?.meessage && errors.meessage.message}
            </span>
          </div>
          <div className="mt-3 g-recaptcha">
            <Recaptcha
              onVerifyCaptcha={onVerify}
              refreshReCaptcha={refreshReCaptcha}
            />
          </div>
          <div className={`${styles.action_btn}`}>
            <button
              type="submit"
              className="btn primary-btn"
              disabled={!isDirty || !isValid}
              onClick={handleSendMessage}
            >
              Send us a message
            </button>
            <div className={`${styles.action_text}`}>
              <span>or contact us directly at</span>
              <a
                className={`clr-green ${styles.email_link}`}
                href="mailto:accounts@techdots.com"
              >
                accounts@techdots.com
              </a>
            </div>
          </div>
        </form>
      {/* </GoogleReCaptchaProvider> */}
    </div>
  );
};

export default ContactForm;
