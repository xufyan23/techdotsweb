import Head from 'next/head';
import Footer from '../components/footer';
import Header from '../components/header';
import Image from 'next/image';
import Link from "next/link";
import arrowDown from '../public/images/d-arrow-down.svg';
import borderBottom from '../public/images/banner-line.svg';
import workStation from '../public/images/work-station.svg';
import ProjectSample from '../public/images/sample-img.png';
import ProjectSample2 from '../public/images/sample-2.png';
import ProjectSample3 from '../public/images/sample-3.png';
import Consultation from "../public/images/consultation.svg";
import Validation from "../public/images/validation.svg";
import Implementation from "../public/images/implementation.svg";
import arrowRight from '../public/images/arrow-right.svg';
import FixedPrice from '../public/images/ic_fixedPrice.svg';
import Hourly from '../public/images/ic_hourly.svg';
import Retainer from '../public/images/ic_retainer.svg';
import CardImg1 from '../public/images/card-img-1.png';
import CardImg2 from '../public/images/card-img-2.png';
import CardImg3 from '../public/images/card-img-3.png';
import Star from '../public/images/star.svg';
import ContactForm from '../components/contactForm';

import styles from '../styles/Home.module.scss';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
        <section className="banner">
          <Header/>
          <div className="container-fluid">
            <div className="banner_col">
              <div className="banner_text">
                <div className="banner_text-box">
                  <h1>
                    <span className="clr-green d-block">Custom Software Solutions </span>
                    For Global Companies
                  </h1>
                  <p className="mb-4 mt-3">Our global team develops software that adds value to your small startup, promising SMB, or established enterprise.</p>
                  <div className="btn-block">
                    <button className="btn primary-btn">Book Appointment</button>
                    <button className="btn primary-btn btn-white">Contact Us</button>
                  </div>
                </div>
                <div className="scroll_down">
                  <Image src={borderBottom}
                  alt=""
                  />
                  <Image className="" src={arrowDown}
                  alt="arrow-down" width={14} height={14}
                  />
                </div>
              </div>
              <div className="banner-img">
                <Image src={workStation} alt="work station" loading = "lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.whoweare}`}>
          <div className="container">
            <div className={`${styles.info}`}>
              <h2 className="heading-center">Lorem Ispum</h2>
              <p className="mt-4">
                We use smart technologies to solve the toughest business problems,
                <span className="d-block">
                  enable digital transformation, and deliver ROI.
                </span>
              </p>
              <div className={`${styles.experience}`}>
                <div>
                  <p className="mb-1">
                    <span className="bold-text px-2">5+</span>Years of Experience
                  </p>
                  <p className="mb-1">
                    <span className="bold-text px-2">50+</span>Global Customers
                  </p>
                </div>
                <div>
                  <p className="mb-1">
                    <span className="bold-text px-2">75+</span>Projects Complete
                  </p>
                  <p className="mb-1">
                    <span className="bold-text px-2">100+</span>Employees
                  </p>
                </div>
                <div>
                  <p className="mb-1">
                    <span className="bold-text px-2">$1.5m+</span>Revenue
                    Generated
                  </p>
                  <p>
                    <span className="bold-text px-2">1m</span>Man Hours
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.whoweare_des}`}>
              <div className="row justify-content-between">
                <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
                  <div>
                    <h2 className="mb-4">Who Are We</h2>
                    <p className="pt-4 pt-xs-0">
                      Contrary to popular belief, Lorem Ipsum is not simply random
                      text. It has roots in a piece of classical Latin literature
                      from 45 BC, making it over 2000 years old. Richard
                      McClintock, a Latin professor at Hampden-Sydney College in
                      Virginia, looked up one of the more obscure Latin words,
                    </p>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply random
                      text. It has roots in a piece of classical Latin literature
                      from 45 BC, making it over 2000 years old. Richard
                      McClintock, a Latin professor at Hampden-Sydney College in
                      Virginia, looked up one of the more obscure Latin words,
                    </p>
                  </div>
                </div>
                <div div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
                  <div className={`${styles.img_block}`}>
                    <Image
                      className=""
                      src={ProjectSample}
                      width={100}
                      height={100}
                      alt=""
                      loading="lazy"
                    />
                    <Image
                      className=""
                      src={ProjectSample2}
                      width={100}
                      height={100}
                      alt=""
                      loading="lazy"
                    />
                    <Image
                      className=""
                      src={ProjectSample3}
                      width={100}
                      height={100}
                      alt=""
                      loading="lazy"
                    />
                    <Image
                      className=""
                      src={ProjectSample}
                      width={100}
                      height={100}
                      alt=""
                      loading="lazy"
                    />
                    <Image
                      className=""
                      src={ProjectSample}
                      width={100}
                      height={100}
                      alt=""
                      loading="lazy"
                    />
                    <Image
                      className=""
                      src={ProjectSample2}
                      width={100}
                      height={100}
                      alt=""
                      loading="lazy"
                    />
                    <Image
                      className=""
                      src={ProjectSample3}
                      width={100}
                      height={100}
                      alt=""
                      loading="lazy"
                    />
                    <Image
                      className=""
                      src={ProjectSample}
                      width={100}
                      height={100}
                      alt=""
                      loading="lazy"
                    />
                    <Image
                      className=""
                      src={ProjectSample}
                      width={100}
                      height={100}
                      alt=""
                      loading="lazy"
                    />
                    <Image
                      className=""
                      src={ProjectSample2}
                      width={100}
                      height={100}
                      alt=""
                      loading="lazy"
                    />
                    <Image
                      className=""
                      src={ProjectSample3}
                      width={100}
                      height={100}
                      alt=""
                      loading="lazy"
                    />
                    <Image
                      className=""
                      src={ProjectSample}
                      width={100}
                      height={100}
                      alt=""
                      loading = "lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.services}`}>
          <div className="container">
            <h2 className="heading-center">Services</h2>
            <p className={`${styles.sub_heading}`}>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It
              has roots in a piece of classical Latin
            </p>
            <div className="row align-items-center">
              <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
                <Image src={Consultation} alt="consultation" loading = "lazy" />
              </div>
              <div className = "col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
                <h3>Consultation</h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random text.
                  It has roots in a piece of classical Latin literature from 45 BC,
                  making it over 2000 years old. Richard McClintock, a Latin
                  professor at Hampden-Sydney College in Virginia, looked up one of
                  the more obscure Latin words.
                </p>
                <Link href="/learn">
                  <a className="learn-more">
                    Learn More <Image src={arrowRight} alt="learn more" loading = "lazy" />
                  </a>
                </Link>
              </div>
            </div>

            <div className="row align-items-center col-reverse">
              <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
                <h3>Implementation</h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random text.
                  It has roots in a piece of classical Latin literature from 45 BC,
                  making it over 2000 years old. Richard McClintock, a Latin
                  professor at Hampden-Sydney College in Virginia, looked up one of
                  the more obscure Latin words.
                </p>
                <Link href="/learn">
                  <a className="learn-more">
                    Learn More <Image src={arrowRight} alt="learn more" />
                  </a>
                </Link>
              </div>
              <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
                <Image src={Implementation} alt="consultation" loading = "lazy" />
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
                <Image src={Validation} alt="consultation" />
              </div>
              <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
                <h3>Idea Validation</h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random text.
                  It has roots in a piece of classical Latin literature from 45 BC,
                  making it over 2000 years old. Richard McClintock, a Latin
                  professor at Hampden-Sydney College in Virginia, looked up one of
                  the more obscure Latin words.
                </p>
                <Link href="/learn">
                  <a className="learn-more">
                    Learn More <Image src={arrowRight} alt="learn more" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="mt-xs-2">
              <button className="btn primary-btn">See all Services</button>
            </div>
          </div>
        </section>

        <section className={`${styles.pricing}`}>
          <div className="container">
            <h2>Pricing</h2>
            <p className={`${styles.sub_heading}`} >
              Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin
            </p>
            <div className={`${styles.pricing_card_block}`}>
              <div className={`${styles.pricing_card}`}>
                <p className={`${styles.pricing_card_heading}`}>Hourly</p>
                <div className={`${styles.pricing_card_icon}`}>
                  <Image src={Hourly} alt="Hourly"/>
                </div>
                <p className={`${styles.pricing_card_des}`}>
                  Select how many hours to engage us, and only invest in the time given.
                </p>
                <div className="mt-5">
                  <button className="btn primary-btn btn-white">Contact Us</button>
                </div>
              </div>
              <div className = {`${styles.pricing_card} ${styles.active}`}>
                <p className={`${styles.pricing_card_heading}`}>Retainer</p>
                <div className={`${styles.pricing_card_icon}`}>
                  <Image src={Retainer} alt="Retainer"/>
                </div>
                <p className={`${styles.pricing_card_des}`}>
                  Select how many hours to engage us, and only invest in the time given.
                </p>
                <div className="mt-5">
                  <button className="btn primary-btn btn-white">Contact Us</button>
                </div>
              </div>
              <div className={`${styles.pricing_card}`}>
                <p className={`${styles.pricing_card_heading}`}>Hourly</p>
                <div className={`${styles.pricing_card_icon}`}>
                  <Image src={FixedPrice} alt="Fixed Price"/>
                </div>
                <p className={`${styles.pricing_card_des}`}>
                  Select how many hours to engage us, and only invest in the time given.
                </p>
                <div className="mt-5">
                  <button className="btn primary-btn btn-white">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.success}`}>
          <div className="container">
            <div className="text-center">
              <h2>Success Stories</h2>
              <p>The software that we build takes our clients to the next level</p>
            </div>
            <div className={`${styles.success_card_block}`}>
              <div className={`${styles.success_card}`}>
                <div className={`${styles.success_card_img}`}>
                  <Image src={CardImg1} alt="card banner" loading = "lazy" />
                </div>
                <div className={`${styles.success_card_des}`}>
                  <small className="clr-green d-block">Mobile Application</small>
                  <Link href="#/"><a className="link-heading mb-2 mt-2"> The software that we build
                    takes our clients to the next level</a>
                  </Link>
                  <small className="text-muted d-block">The software that we build takes our clients to the next level
                    The software that we build
                  </small>
                </div>
              </div>

              <div className={`${styles.success_card}`}>
                <div className={`${styles.success_card_img}`}>
                  <Image src={CardImg2} alt="card banner" loading = "lazy" />
                </div>
                <div className={`${styles.success_card_des}`}>
                  <small className="clr-green d-block">Mobile Application</small>
                  <Link href="#/"><a className="link-heading mb-2 mt-2"> The software that we build
                    takes our clients to the next level</a>
                  </Link>
                  <small className="text-muted d-block">The software that we build takes our clients to the next level
                    The software that we build
                  </small>
                </div>
              </div>

              <div className={`${styles.success_card}`}>
                <div className={`${styles.success_card_img}`}>
                  <Image src={CardImg3} alt="card banner" loading = "lazy" />
                </div>
                <div className={`${styles.success_card_des}`}>
                  <small className="clr-green d-block">Mobile Application</small>
                  <Link href="#/"><a className="link-heading mb-2 mt-2"> The software that we build
                    takes our clients to the next level</a>
                  </Link>
                  <small className="text-muted d-block">The software that we build takes our clients to the next level
                    The software that we build
                  </small>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="btn primary-btn">Show All</button>
            </div>
          </div>
        </section>

        <section className={`${styles.technologies}`}>
          <div className="container">
            <h2>Our Technology Stack</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin
              literature from 45 BC, making it over 2000 years old.Richard McClintock, a Latin professor at Hampden - Sydney
              College in Virginia, looked up one of the more obscure Latin words,
            </p>
            <div className={`${styles.technologies_stack}`}>
              <Image src={ProjectSample} alt="" width={100} height={100} loading = "lazy"/>
              <Image src={ProjectSample2} alt="" width={100} height={100} loading = "lazy" />
              <Image src={ProjectSample3} alt="" width={100} height={100} loading = "lazy" />
              <Image src={ProjectSample} alt="" width={100} height={100} loading = "lazy" />
              <Image src={ProjectSample2} alt="" width={100} height={100} loading = "lazy" />
              <Image src={ProjectSample3} alt="" width={100} height={100} loading = "lazy" />
              <Image src={ProjectSample} alt="" width={100} height={100} loading = "lazy" />
              <Image src={ProjectSample2} alt="" width={100} height={100} loading = "lazy" />
              <Image src={ProjectSample3} alt="" width={100} height={100} loading = "lazy" />
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="carousel-img">
                        <Image src={ProjectSample3} alt="user" loading = "lazy" />
                      </div>
                      <p className="carousel-description">
                        They are more than just a
                        software company.They are
                        the partner who will help you
                        achieve what you want to
                        achieve.
                      </p>
                      <div className="rating">
                        <Image className="mr-3" src={Star} alt="rating"/>
                        <Image className="mr-3" src={Star} alt="rating"/>
                        <Image className="mr-3" src={Star} alt="rating"/>
                        <Image className="mr-3" src={Star} alt="rating"/>
                        <Image className="mr-3" src={Star} alt="rating"/>
                      </div>
                      <div className="carousel-footer">
                        <p className="name">Jhon Doe</p>
                        <p className="designation mb-0">Director</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="carousel-img">
                        <Image src={CardImg2} alt="user"/>
                      </div>
                      <p className="carousel-description">
                        They are more than just a
                        software company.They are
                        the partner who will help you
                        achieve what you want to
                        achieve.
                      </p>
                      <div className="rating">
                        <Image className="mr-3" src={Star} alt="rating"/>
                        <Image className="mr-3" src={Star} alt="rating"/>
                        <Image className="mr-3" src={Star} alt="rating"/>
                        <Image className="mr-3" src={Star} alt="rating"/>
                        <Image className="mr-3" src={Star} alt="rating"/>
                      </div>
                      <div className="carousel-footer">
                        <p className="name">Jhon Doe</p>
                        <p className="designation mb-0">Director</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="carousel-img">
                        <Image src={CardImg3} alt="user"/>
                      </div>
                      <p className="carousel-description">
                        They are more than just a
                        software company.They are
                        the partner who will help you
                        achieve what you want to
                        achieve.
                      </p>
                      <div className="rating">
                        <Image className="mr-3" src={Star} alt="rating"/>
                        <Image className="mr-3" src={Star} alt="rating"/>
                        <Image className="mr-3" src={Star} alt="rating"/>
                        <Image className="mr-3" src={Star} alt="rating"/>
                        <Image className="mr-3" src={Star} alt="rating"/>
                      </div>
                      <div className="carousel-footer">
                        <p className="name">Jhon Doe</p>
                        <p className="designation mb-0">Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
                <ContactForm/>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Home;
