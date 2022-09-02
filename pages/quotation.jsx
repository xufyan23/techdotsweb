import Head from "next/head";
import {useState} from "react";
import Header from "../components/header";
import QouteStepThree from "../components/qouteStepThree";
import QuotestepFive from "../components/quoteStepFive";
import QuoteStepFour from "../components/quoteStepFour";
import QuoteStepOne from "../components/quoteStepOne";
import QuoteStepTwo from "../components/quoteStepTwo";
import styles from "../styles/Quotation.module.scss";

const Quotation = () => {
  const [currentState, setCurrentState] = useState(1);
  const [projectNeeds, setProjectNeeds] = useState([]);

  const onStepComplete = () => {
    if(currentState === 5) {
      return sendEmail();
    }

    setCurrentState(currentState + 1) ;
  }

  const onStepBack = () => {
    setCurrentState(currentState - 1);
  }

  // const sendEmail = () => {

  // }

  const calcWidth = () => {
    const rangeWidth = ((currentState - 1) / (4)) * 100;
    return `${rangeWidth}%`;
  }

  return (
    <>
      <Head>
        <title>Quotation</title>
      </Head>
      <div className="quotation-wrapper">
        <section className="banner">
          <Header/>
          <div className="container">
            <div className={styles.banner_col}>
              <div className={styles.banner_text}>
                <h1>Quotations</h1>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature from
                  45 BC, making it over
                </p>
              </div>
              <div className={styles.banner_img}>
                {/* <Image src={QuoteBanner} alt=""/> */}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.steps_container}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-6">
                <div className={styles.steps_block}>
                  <div className={`${styles.step_percentage}`} style={{width: calcWidth()}}></div>
                  <div className={styles.counter}>{currentState}/5</div>
                  {
                    currentState === 1 && <QuoteStepOne
                      onStepComplete={onStepComplete}
                      setProjectNeeds={setProjectNeeds}
                      />
                  }
                  {
                    currentState === 2 && <QuoteStepTwo
                      onStepComplete={onStepComplete}
                      onStepBack={onStepBack}
                      />
                  }
                  {
                    currentState === 3 && <QouteStepThree
                      onStepComplete={onStepComplete}
                      onStepBack={onStepBack}
                      />
                  }
                  {
                    currentState === 4 && <QuoteStepFour
                      onStepComplete={onStepComplete}
                      onStepBack={onStepBack}
                      />
                  }
                  {
                    currentState === 5 && <QuotestepFive
                      onStepComplete={onStepComplete}
                      onStepBack={onStepBack}
                    />
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Quotation;
