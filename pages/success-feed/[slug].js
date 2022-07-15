import Head from "next/head";
import Image from "next/image";
import Header from "../../components/header";
import arrowRight from "../../public/images/ic_backArrow.svg";
import ProductImg from "../../public/images/card-img-3.png";
import ContactForm from "../../components/contactForm";
import styles from "../../styles/LearnMore.module.scss";

const LearnMore = () => {
  return (
    <>
      <Head>
        <title>Services Learn More</title>
      </Head>
			<div className={`${styles.content_wrapper}`}>
        <section className={`${styles.learnmore_banner}`}>
          <Header />
					<div className="container">
            <div className="row">
              <div className="col-7">
                <div className={`${styles.banner_text}`}>
                  <button className="btn clr-green learn-more mb-4">
                    <Image src={arrowRight} alt="back" />
                    Success Stories
                  </button>
                  <h1>
                    A remade backend supported
                    <span span className = "d-block"> eSky&apos;s global expansion</span>
                  </h1>
                  <p>
                    Techdots is a product - focused software development
                    <span className="d-block">agency for enterprise & high - growth companies.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
				</section>

        <section className={`${styles.about_project}`}>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h3>About eSky</h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Richard McClintock, a Latin professor at Hampden - Sydney College in Virginia, looked up one of the more obscure Latin words,
                    Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Richard McClintock, a Latin professor at Hampden - Sydney College in Virginia, looked up one of the more obscure Latin words,
                </p>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Richard McClintock, a Latin professor at Hampden - Sydney College in Virginia, looked up one of the more obscure Latin words,
                    Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Richard McClintock, a Latin professor at Hampden - Sydney College in Virginia, looked up one of the more obscure Latin words,
                </p>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Richard McClintock, a Latin professor at Hampden - Sydney College in Virginia, looked up one of the more obscure Latin words,
                    Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Richard McClintock, a Latin professor at Hampden - Sydney College in Virginia, looked up one of the more obscure Latin words,
                </p>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Richard McClintock, a Latin professor at Hampden - Sydney College in Virginia, looked up one of the more obscure Latin words,
                    Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Richard McClintock, a Latin professor at Hampden - Sydney College in Virginia, looked up one of the more obscure Latin words,
                </p>
              </div>
              <div className="col-6">
                <div className={`${styles.product_img}`}>
                  <Image src={ProductImg} alt="ProductImg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form">
          <div className="container">
            <div className="row">
              <div className="col-6 m-auto">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
			</div>
    </>
  );
};

export default LearnMore;
