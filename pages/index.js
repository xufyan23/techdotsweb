import Head from 'next/head';
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
import CardImg2 from '../public/images/card-img-2.png';
import CardImg3 from '../public/images/card-img-3.png';
import Star from '../public/images/star.svg';
import ContactForm from '../components/contactForm';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import BlogCard from '../components/blogCard';
import getPosts from '../services/post';
import styles from '../styles/Home.module.scss';

const Home = ({posts}) => {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);
  const [showMorePostsBtn, setShowMorePostsBtn] = useState(false);
  const scrollToContact = useRef(null);

  const handleScroll = () => {
    scrollToContact.current ?.scrollIntoView({behavior: 'smooth'})
  }

  useEffect(() => {
      if (posts.length > 3) {
        setShowMorePostsBtn(true);
      }
      setMappedPosts(posts.slice(0, 3));
  }, [posts]);

  return (
    <div>
      <Head>
        <title>Techdots - Your Full-Stack Development Partner</title>
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
                  <Link
                    href = "https://techdots.zohobookings.com/#/customer/custom-software-development">
                    <a target="_blank" className="btn primary-btn">Book Appointment</a>
                  </Link>
                  <button className="btn primary-btn btn-white" onClick={handleScroll}>Contact Us</button>
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

      <section className={styles.whoweare}>
        <div className="container">
          <div className={styles.info}>
            <h2 className="heading-center">Your Full-Stack Development Partner</h2>
            <p className="mt-4">
            Techdots help businesses navigate any and all facets of the digital landscape from creating
              <span className="d-block">
              strategic software to dynamic mobile solutions that deliver tangible business results.
              </span>
            </p>
            <div className={styles.experience}>
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
          <div className={styles.whoweare_des}>
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
              <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
                <div className={styles.img_block}>
                  <Image
                    src={ProjectSample}
                    width={100}
                    height={100}
                    alt=""
                    loading="lazy"
                  />
                  <Image
                    src={ProjectSample2}
                    width={100}
                    height={100}
                    alt=""
                    loading="lazy"
                  />
                  <Image
                    src={ProjectSample3}
                    width={100}
                    height={100}
                    alt=""
                    loading="lazy"
                  />
                  <Image
                    src={ProjectSample}
                    width={100}
                    height={100}
                    alt=""
                    loading="lazy"
                  />
                  <Image
                    src={ProjectSample}
                    width={100}
                    height={100}
                    alt=""
                    loading="lazy"
                  />
                  <Image
                    src={ProjectSample2}
                    width={100}
                    height={100}
                    alt=""
                    loading="lazy"
                  />
                  <Image
                    src={ProjectSample3}
                    width={100}
                    height={100}
                    alt=""
                    loading="lazy"
                  />
                  <Image
                    src={ProjectSample}
                    width={100}
                    height={100}
                    alt=""
                    loading="lazy"
                  />
                  <Image
                    src={ProjectSample}
                    width={100}
                    height={100}
                    alt=""
                    loading="lazy"
                  />
                  <Image
                    src={ProjectSample2}
                    width={100}
                    height={100}
                    alt=""
                    loading="lazy"
                  />
                  <Image
                    src={ProjectSample3}
                    width={100}
                    height={100}
                    alt=""
                    loading="lazy"
                  />
                  <Image
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

      <section className={styles.services}>
        <div className="container">
          <h2 className="heading-center">Services</h2>
          <p className={styles.sub_heading}>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin
          </p>
          <div className="row align-items-center">
            <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
              <Image src={Consultation} alt="consultation" loading="lazy" />
            </div>
            <div className ="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
              <h3>Consultation</h3>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia, looked up one of
                the more obscure Latin words.
              </p>
              <Link href="consultation">
                <a className="learn-more" target="_blank">
                  Learn More <Image src={arrowRight} alt="learn more" loading="lazy" />
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
              <Link href="implementation">
                <a className="learn-more" target="_blank">
                  Learn More <Image src={arrowRight} alt="learn more" />
                </a>
              </Link>
            </div>
            <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
              <Image src={Implementation} alt="Implementation" loading="lazy" />
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
              <Image src={Validation} alt="Validation" />
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
              <Link href="idea-validation">
                <a className="learn-more" target="_blank">
                  Learn More <Image src={arrowRight} alt="learn more" />
                </a>
              </Link>
            </div>
          </div>
          <div className="mt-xs-2">
            <Link href="services">
              <a className="btn primary-btn">See all Services</a>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.pricing}>
        <div className="container">
          <h2>Pricing</h2>
          <p className={styles.sub_heading}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin
          </p>
          <div className={styles.pricing_card_block}>
            <div className={styles.pricing_card}>
              <p className={styles.pricing_card_heading}>Hourly</p>
              <div className={styles.pricing_card_icon}>
                <Image src={Hourly} alt="Hourly"/>
              </div>
              <p className={styles.pricing_card_des}>
                Select how many hours to engage us, and only invest in the time given.
              </p>
              <div className="mt-5">
                <button className="btn primary-btn btn-white">Contact Us</button>
              </div>
            </div>
            <div className = {`${styles.pricing_card} ${styles.active}`}>
              <p className={styles.pricing_card_heading}>Retainer</p>
              <div className={`${styles.pricing_card_icon}`}>
                <Image src={Retainer} alt="Retainer"/>
              </div>
              <p className={styles.pricing_card_des}>
                Select how many hours to engage us, and only invest in the time given.
              </p>
              <div className="mt-5">
                <button className="btn primary-btn btn-white">Contact Us</button>
              </div>
            </div>
            <div className={styles.pricing_card}>
              <p className={styles.pricing_card_heading}>Hourly</p>
              <div className={styles.pricing_card_icon}>
                <Image src={FixedPrice} alt="Fixed Price"/>
              </div>
              <p className={styles.pricing_card_des}>
                Select how many hours to engage us, and only invest in the time given.
              </p>
              <div className="mt-5">
                <button className="btn primary-btn btn-white">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.success}>
        <div className="container md-container">
          <div className="text-center">
            <h2>Success Stories</h2>
            <p className='mt-4'>The software that we build takes our clients to the next level</p>
          </div>
          <div className={styles.success_card_block}>
            {
              mappedPosts.length ? mappedPosts.map((item, index) => (
                <BlogCard
                  onClick={() => router.push(`/posts/${item.slug.current}`)
                }
                key={index}
                item={item}/>
              )) : <>No Posts Yet</>
            }
          </div>

          <div className={`text-center m-auto ${showMorePostsBtn ? 'd-block' : 'd-none'}`}>
            <Link href="/blogs">
              <a className="btn primary-btn">Show All</a>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.technologies}>
        <div className="container">
          <h2>Our Technology Stack</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old.Richard McClintock, a Latin professor at Hampden - Sydney
            College in Virginia, looked up one of the more obscure Latin words,
          </p>
          <div className={styles.technologies_stack}>
            <Image src={ProjectSample} alt="" width={100} height={100} loading = "lazy"/>
            <Image src={ProjectSample2} alt="" width={100} height={100} loading = "lazy"/>
            <Image src={ProjectSample3} alt="" width={100} height={100} loading = "lazy"/>
            <Image src={ProjectSample} alt="" width={100} height={100} loading = "lazy"/>
            <Image src={ProjectSample2} alt="" width={100} height={100} loading = "lazy"/>
            <Image src={ProjectSample3} alt="" width={100} height={100} loading = "lazy"/>
            <Image src={ProjectSample} alt="" width={100} height={100} loading = "lazy"/>
            <Image src={ProjectSample2} alt="" width={100} height={100} loading = "lazy"/>
            <Image src={ProjectSample3} alt="" width={100} height={100} loading = "lazy"/>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-5 col-xl-5 col-xxl-6">
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
            <div className = "col-12 col-sm-12 col-lg-7 col-xl-7 col-xxl-6" ref={ scrollToContact }>
              <ContactForm/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;

export const getServerSideProps = async pageContext => {
  const posts = await getPosts();
  return {
    props: {
      posts: posts,
    }
  }
}
