import Head from 'next/head';
import Header from '../components/header';
import Image from 'next/image';
import Link from "next/link";
import ProjectSample from '../public/images/sample-img.png';
import ProjectSample2 from '../public/images/sample-2.png';
import ProjectSample3 from '../public/images/sample-3.png';
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
      setMappedPosts(posts);
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
                <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729601/Techdots/images/banner-line_ggnjjq.svg"
                  width="512px" height="9px" alt=""
                />
                <Image className="" src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729607/Techdots/images/d-arrow-down_ld5zfx.svg"
                alt="scroll down" width={14} height={14}
                />
              </div>
            </div>
            <div className="banner-img">
              <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729599/Techdots/images/work-station_fjaqoc.svg"
              width={"100%"} height={"100%"} layout='responsive' alt="work station" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.whoweare}>
        <div className="container">
          <div className={styles.info}>
            <h2 className="heading-center">Your Full-Stack Development Partner</h2>
            <p className={`${styles.sub_heading} mt-4`}>
            Techdots help businesses navigate any and all facets of the digital landscape from creating
              strategic software to dynamic mobile solutions that deliver tangible business results.
            </p>
            <div className='text-center mb-4'>
              <Link href="quotation">
                <a className='btn primary-btn mb-2'>Get a Quote</a>
              </Link>
            </div>
            <div className={styles.sub_heading}>
              <h3 className="text-right mb-3">Keep The Ball Rolling</h3>
              <p>
                Powered by a team of executive developers and designers, Techdots add value to startup, SMB, or established
                enterprises to scale in no time.
              </p>
            </div>
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
                    We make the best of every project we work on because our client’s success fuels ours. Our clients regard
                    us as their long-term strategic partner and trusted adviser for DevOps, product design, development,
                    and cloud computing.
                  </p>
                  <p>
                    We choose scalable and flexible technologies that fulfill the needs of your businesses. The engineering
                    mindset our talents have already solved the challenges of 50+ clients. So, if you are still unsure about
                    how to lead development forward, then our team of tech-savvy professionals will guide you to the most
                    optimal software solutions and strategies.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
                <div className={styles.img_block}>
                  <Image
                    src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1663942632/Techdots/images/who-we-are_tpim8s.svg"
                    width={600}
                    height={350}
                    alt="who we are"
                    // layout="fixed"
                    loading = "lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.how_we_work}>
        <div className="container">
          <h2>How We Work </h2>
          <div className={styles.grid_block}>
            <div>
              <div className={styles.icon}>
                <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729600/Techdots/images/project-icon_hjgqzw.svg" width="25" height="25" alt=""/>
              </div>
              <h3 className="bold-text mt-1 mb-2">Project Based</h3>
              <p>
                We oversee all the development efforts for your project. In addition to full-stack developers we have
                certified scrum masters in-house to handle any agile project management needs.
                </p>
            </div>
            <div>
            <div className={styles.icon}>
                <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729602/Techdots/images/team-icon_vc0rui.svg" width={48} height={48} alt=""/>
              </div>
              <h3 className="bold-text mt-1 mb-2">Team Augmentation</h3>
              <p>
                We offer full-stack development consulting to supplement your team when additional resources are needed
                to speed up your project.
              </p>
            </div>
            <div>
            <div className={styles.icon}>
                <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729611/Techdots/images/developer-icon_mxa8px.svg" width={48} height={48} alt=""/>
              </div>
              <h3 className="bold-text mt-1 mb-2">Retainer</h3>
              <p>
                Monthly time and materials development for your application, product, or service with an 80 hour a month minimum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className="container">
          <h2 className="heading-center">Services Where We Hit It Off</h2>
          <p className={styles.sub_heading}>
            From VIABLE to VALUABLE, we can make it happen. We design, build, refactor, migrate, architect, and provide
            ongoing maintenance as part of custom software development services. No hot fixes — only scalable builds with
            technologies that stand the test of time.
          </p>

          <div className="row align-items-center col-reverse-md">
            <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
              <h3>Software Development</h3>
              <p>
                Our technology innovation capabilities can help you craft a long-term vision, architect the right solutions
                for the journey. We make sure that your investments for today’s &quot;life raft&quot; are part of building tomorrow’s
                competitive advantage.
              </p>
              <Link href="software-development">
                <a className="learn-more" target="_blank">
                  Learn More <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729603/Techdots/images/arrow-right_h6m1bd.svg"
                    width={20} height={14} alt="learn more"/>
                </a>
              </Link>
            </div>
            <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
              <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729610/Techdots/images/implementation_fglhgw.svg"
                width={400} height={400} alt="Implement software without consuming a large share of your organization" loading="lazy"/>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
              <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729607/Techdots/images/validation_co06vp.svg"
                width={486} height={324}alt="reduce operational risk with precise idea validations from our experts"/>
            </div>
            <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
              <h3>Idea Validation</h3>
              <p>
                Improve business continuity and reduce operational risk with precise idea validations from our experts.
                Partnering with us means that technology modernization is achieved in-time, on budget and businesses scope in mind.
              </p>
              <Link href="idea-validation">
                <a className="learn-more" target="_blank">
                  Learn More <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729603/Techdots/images/arrow-right_h6m1bd.svg" width={20} height={14} alt="learn more" />
                </a>
              </Link>
            </div>
          </div>

          <div className="row align-items-center col-reverse-md">
            <div className ="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <h3>Design</h3>
              <p>
                What can grab users’ attention better than an appealing and bright user interface? Create your website or application
                with the best UI/UX designers to outpace your competitors.
              </p>
              <Link href="design">
                <a className="learn-more" target="_blank">
                  Learn More  <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729603/Techdots/images/arrow-right_h6m1bd.svg"
                    width={20} height={14} alt='learn more' />
                </a>
              </Link>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729603/Techdots/images/consultation_tuhnem.svg"
              width={324} height={324} alt="What can grab users’ attention" loading="lazy" />
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
                <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729609/Techdots/images/ic_hourly_hvxnga.svg"
                width={43} height={43} layout='fixed' alt="Hourly"/>
              </div>
              <p className={styles.pricing_card_des}>
                Select how many hours to engage us, and only invest in the time given.
              </p>
              <div className="mt-5">
                <button className="btn primary-btn btn-white" onClick={handleScroll}>Contact Us</button>
              </div>
            </div>
            <div className = {`${styles.pricing_card} ${styles.active}`}>
              <p className={styles.pricing_card_heading}>Retainer</p>
              <div className={`${styles.pricing_card_icon}`}>
                <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729609/Techdots/images/ic_retainer_nuleb3.svg"
                  width={40} height={35} layout="fixed" alt="Retainer"/>
              </div>
              <p className={styles.pricing_card_des}>
                We focus on your technical and business requirements and give a specific budget with no hidden costs.
              </p>
              <div className="mt-5">
                <button className="btn primary-btn btn-white" onClick={handleScroll}>Contact Us</button>
              </div>
            </div>
            <div className={styles.pricing_card}>
              <p className={styles.pricing_card_heading}>Fixed Price</p>
              <div className={styles.pricing_card_icon}>
                <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729611/Techdots/images/ic_fixedPrice_srmff3.svg"
                  width={18} height={35} layout="fixed" alt="Fixed Price"/>
              </div>
              <p className={styles.pricing_card_des}>
                Our team enters into a partnership with you in the long-term, and you pay a set amount each month.
              </p>
              <div className="mt-5">
                <button className="btn primary-btn btn-white" onClick={handleScroll}>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.success}>
        <div className="container md-container">
          <div className="text-center">
            <h2>Success Stories</h2>
            <p className={`${styles.sub_heading} mt-4`}>We&apos;ve helped our clients develop products for various platforms and have created great
            success stories along the way.</p>
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

          <div className="text-center m-auto">
            <Link href="/blogs">
              <a className="btn primary-btn">Show All</a>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.technologies}>
        <div className="container">
          <h2>Our Technology Stack</h2>
          <p>Work with future-proof technologies</p>
          <div className={styles.technologies_stack}>
            <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729608/Techdots/images/typescript-icon_a4imki.svg"
              alt="Typescript" width={100} height={100} loading="lazy"/>
            <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729604/Techdots/images/react-icon_mpaayi.svg"
              alt="React" width={100} height={100} loading="lazy"/>
            <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1663156404/Techdots/images/nodejs-icon_hmte0z.svg"
              alt="NodeJs" width={80} height={80} loading="lazy"/>
            <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729600/Techdots/images/angularjs-icon_vlvfhn.svg"
              alt="Angular" width={100} height={100} loading="lazy"/>
            <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729607/Techdots/images/icon-vue_ymv5it.svg"
              alt="Vue" width={100} height={100} loading="lazy"/>
            <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729604/Techdots/images/ruby-on-rails_v5yhxl.svg"
              alt="Ruby on Rails" width={100} height={100} loading="lazy"/>
            <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729598/Techdots/images/go-icon_ymmjdo.svg"
              alt="Go" width={100} height={100} loading = "lazy"/>
            <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729598/Techdots/images/next-icon_x1z1eo.png"
              alt="NextJs" width={100} height={100} loading = "lazy"/>
            <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729598/Techdots/images/amazon-icon_nyce28.svg"
              alt="AWS" width={100} height={100} loading = "lazy"/>
            <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729604/Techdots/images/sass-icon_npon7f.svg"
              alt="Sass" width={100} height={100} loading = "lazy"/>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-5 col-xl-5 col-xxl-6">
              <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="carousel-img">
                      <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729613/Techdots/images/sample-3_mvbkd8.png"
                        alt="user" width={100} height={100} layout="fixed" loading="lazy" />
                    </div>
                    <p className="carousel-description">
                      I appreciate the proactive approach and their ability to suggest and implement improvements to a
                      prospective solution on both business and architectural levels.
                    </p>
                    <div className="rating">
                      <Image className="mr-3" src={Star} alt="rating"/>
                      <Image className="mr-3" src={Star} alt="rating"/>
                      <Image className="mr-3" src={Star} alt="rating"/>
                      <Image className="mr-3" src={Star} alt="rating"/>
                      <Image className="mr-3" src={Star} alt="rating"/>
                    </div>
                    <div className="carousel-footer">
                      <p className="name bold-text">Robert</p>
                      {/* <p className="designation mb-0">Director</p> */}
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-img">
                      <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729613/Techdots/images/sample-2_dkhyzh.png"
                        width={100} height={100} layout="fixed" alt="user"/>
                    </div>
                    <p className="carousel-description">
                      No doubt, Techdots is a reliable and agile technology partner. We appraise their dedicated work ethic
                      and their approach towards security issues. That is what set them apart and our top pick
                    </p>
                    <div className="rating">
                      <Image className="mr-3" src={Star} alt="rating"/>
                      <Image className="mr-3" src={Star} alt="rating"/>
                      <Image className="mr-3" src={Star} alt="rating"/>
                      <Image className="mr-3" src={Star} alt="rating"/>
                      <Image className="mr-3" src={Star} alt="rating"/>
                    </div>
                    <div className="carousel-footer">
                      <p className="name bold-text">Chris</p>
                      {/* <p className="designation mb-0">Director</p> */}
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-img">
                      <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729606/Techdots/images/card-img-3_qnhjcv.png"
                        width={100} height={100} layout="fixed" alt="user"/>
                    </div>
                    <p className="carousel-description">
                      I would definitely recommend Techdots for your projects. It’s amazing to see the team work perfectly
                      in sync delivering best results.
                    </p>
                    <div className="rating">
                      <Image className="mr-3" src={Star} alt="rating"/>
                      <Image className="mr-3" src={Star} alt="rating"/>
                      <Image className="mr-3" src={Star} alt="rating"/>
                      <Image className="mr-3" src={Star} alt="rating"/>
                      <Image className="mr-3" src={Star} alt="rating"/>
                    </div>
                    <div className="carousel-footer">
                      <p className="name bold-text">Allen</p>
                      {/* <p className="designation mb-0">Director</p> */}
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
  const posts = await getPosts('*[_type == "post" && "blog" in categories[]->title] | order(_createdAt desc) [0...4]');
  return {
    props: {
      posts: posts,
    }
  }
}
