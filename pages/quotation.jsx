import Head from "next/head";
import Image from "next/image";
import {useState} from "react";
import Header from "../components/header";
import QouteStepThree from "../components/qouteStepThree";
import QuotestepFive from "../components/quoteStepFive";
import QuoteStepFour from "../components/quoteStepFour";
import QuoteStepOne from "../components/quoteStepOne";
import QuoteStepTwo from "../components/quoteStepTwo";
import MetaTags from '../components/common/metaTags';
import styles from "../styles/Quotation.module.scss";

const Quotation = () => {
  const [currentState, setCurrentState] = useState(1);
  const [projectNeeds, setProjectNeeds] = useState([]);
  const [stepOne, setStepOne] = useState([]);
  const [stepTwo, setStepTwo] = useState();
  const [stepThree, setStepThree] = useState(10000);
  const [stepFour, setStepFour] = useState({
    firstName: '', lastName: '', email: '', telephone:'', termsChecked: false
  });
  const [requestSend, setRequestSend] = useState(false);
  const [loading, setLoading] = useState(false);

  const resetSteps = () => {
    setCurrentState(1)
    setStepOne([])
    setStepTwo('')
    setStepThree(1000)
    setStepFour({firstName: '', lastName: '', email: '', telephone:'', termsChecked: false})
    setRequestSend(false)
    setLoading(false)
  }

  const onStepComplete = () => {
    if(currentState === 5) {
      return sendEmail();
    }
    setCurrentState(currentState + 1) ;
  }

  const onStepBack = () => {
    setCurrentState(currentState - 1);
  }

  const sendEmail = async() => {
    setLoading(true)
    const checkboxHTML = Object.keys(stepOne).map((name) => {
      return `<li>${stepOne[name]}</li>`;
    }).join('');

    const res = await fetch("/api/mail", {
      body: JSON.stringify({
        email: "accounts@techdots.dev",
        subject: 'Quotation',
        message: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Quotation Email</title>
          <meta name="description" content="Qouation">
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        </head>

        <body>
          <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';"></div>
          <div class="container" style="margin-left: 20px;margin-right: 20px;">
            <h3>You've got a new mail from ${stepFour.firstName} ${stepFour.lastName}, their email is: ✉️${stepFour.email} </h3>

            <div style="font-weight: 700;">Project Need</div>
            <ul style="padding-left: 0;">${checkboxHTML}</ul>

            <div>${stepFour.firstName} ${stepFour.lastName}</div>
            <div>${stepFour.email}</div>
            <div>${stepFour.telephone}</div>

            <div style="font-size: 13px;">
              <p style="width: 70%;"><span style="font-weight: 700;">Budget:</span>$${stepThree}</p>
            </div>

            <div style="font-weight: 700;">Description:</div>
            <p style="width: 70%;">${stepTwo}</p>
          </div>
        </body>
        </html>`,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    setLoading(false)
    const { error } = await res.json();
    if (error) {
      setLoading(true)
      console.log(error);
      return;
    }
    setRequestSend(true);
  }

  const calcWidth = () => {
    const rangeWidth = ((currentState - 1) / (4)) * 100;
    return `${rangeWidth}%`;
  }

  return (
    <>
      <Head>
        <title>Request a Quote</title>
        <MetaTags
          title="Quotation"
          description="Quotation"
          keywords="Quotation"
        />
      </Head>
      <div className="quotation-wrapper">
        <section className="banner">
          <Header/>
          <div className="container">
            <div className={styles.banner_col}>
              <div className={styles.banner_text}>
                <h1>Request a Quote</h1>
                <p>
                  Entrusted with high professioalism, we are capable of offering pixel-perfect web & mobile applications.
                  development, third party integration, and solutions.
                </p>
              </div>
              {/* <div className={styles.banner_img}>
                <Image src={QuoteBanner} alt=""/>
              </div> */}
            </div>
          </div>
        </section>

        <section className={styles.steps_container}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-12 col-md-10 col-xl-6 col-xxl-6">
                <div className={`steps-block ${requestSend ? ' d-none':''}`}>
                  <div className={`${styles.step_percentage}`} style={{width: calcWidth()}}></div>
                  <div className={styles.counter}>{currentState}/5</div>
                  {
                    currentState === 1 && <QuoteStepOne
                      onStepComplete={onStepComplete}
                      setProjectNeeds={setProjectNeeds}
                      stepOne={stepOne}
                      setStepOne={setStepOne}
                      />
                  }
                  {
                    currentState === 2 && <QuoteStepTwo
                      onStepComplete={onStepComplete}
                      onStepBack={onStepBack}
                      stepTwo={stepTwo}
                      setStepTwo={setStepTwo}
                      />
                  }
                  {
                    currentState === 3 && <QouteStepThree
                      onStepComplete={onStepComplete}
                      onStepBack={onStepBack}
                      stepThree={stepThree}
                      setStepThree={setStepThree}
                      />
                  }
                  {
                    currentState === 4 && <QuoteStepFour
                      onStepComplete={onStepComplete}
                      onStepBack={onStepBack}
                      stepFour={stepFour}
                      setStepFour={setStepFour}
                      />
                  }
                  {
                    currentState === 5 && <QuotestepFive
                      onStepComplete={onStepComplete}
                      onStepBack={onStepBack}
                      stepOne={stepOne}
                      stepTwo={stepTwo}
                      stepThree={stepThree}
                      loading={loading}
                    />
                  }
                </div>
                {
                  requestSend ?
                    <div className="email-sent-block steps-block">
                    <div className="loader mb-1">
                      <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729606/Techdots/images/check-circle_eaqoul.svg"
                        alt="" width={50} height={50}/>
                    </div>
                    <p>Request successfully send</p>
                    <button className="btn primary-btn" onClick={resetSteps}>Get a Quote</button>
                  </div> : ''
                }
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Quotation;
