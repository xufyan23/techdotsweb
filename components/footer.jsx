import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className="container">
        <div className={`${styles.footer_grid}`}>
          <div>
            <h2>
              Got a project? <span className="d-block d-inline-xs">Let&apos;s talk</span>
            </h2>
            <Link href = "https://techdots.zohobookings.com/#/customer/custom-software-development">
              <a target="_blank" className="btn primary-btn">Book Appointment</a>
            </Link>
          </div>
          <div className={`${styles.footer_list_block}`}>
            <p>Company</p>
            <ul>
              <li>
                <Link href="success-stories">
                  <a>Success Stories</a>
                </Link>
              </li>
              <li>
                <Link href="services">
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link href="careers">
                  <a>Careers</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className={`${styles.footer_list_block}`}>
            <p>Services</p>
            <ul className="">
              <li>
                <Link href="idea-validation">
                  <a>Idea Validation Service</a>
                </Link>
              </li>
              <li>
                <Link href="design">
                  <a>Design Services</a>
                </Link>
              </li>
              <li>
                <Link href="software-development">
                  <a>Software Development</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className={`${styles.footer_list_block}`}>
            <p>Address</p>
            <ul>
              <li>
                <address className="mb-0">
                  Al Hafeez Executive,
                  <span className="d-block d-inline-xs ">6th floor Office 601- 603 C3,</span>
                  <span className="d-block d-inline-xs ">Gulberg III, Lahore</span>
                </address>
                <a href="tel:+92 9587738861">+47 333 78 901</a>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <div className={`${styles.copy_right}`}>
        <div className="container">
          <div className={`${styles.copy_right_text}`}>
            <p className="mb-0">Copyright © 2022 Techdots™. All Rights Reserved.</p>
            <div className={`${styles.social_icons}`}>
              <Link href="https://www.linkedin.com/company/tech-dots-dev/mycompany/">
                <a target="_blank"><Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729611/Techdots/images/linkedin_rqxjhc.svg"
                  width={20} height={20} alt="Linked In"/></a>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
