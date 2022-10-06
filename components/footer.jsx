import Link from "next/link";
import Image from "next/image";
import mixpanel from 'mixpanel-browser';
mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_KEY);
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  const handleFooterLink = () => {
    mixpanel.track("click_footer_link");
  }
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
                <Link href="/portfolio">
                  <a onClick={handleFooterLink}>Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a onClick={handleFooterLink}>Services</a>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <a onClick={handleFooterLink}>Careers</a>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <a onClick={handleFooterLink}>Blogs</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className={`${styles.footer_list_block}`}>
            <p>Services</p>
            <ul className="">
              <li>
                <Link href="/idea-validation">
                  <a onClick={handleFooterLink}>Idea Validation Service</a>
                </Link>
              </li>
              <li>
                <Link href="/design">
                  <a onClick={handleFooterLink}>Design Services</a>
                </Link>
              </li>
              <li>
                <Link href="/software-development">
                  <a onClick={handleFooterLink}>Software Development</a>
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
                {/* <a href="tel:+92 9587738861">+923214757374</a> */}
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
                <a target="_blank" onClick={handleFooterLink}><Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729611/Techdots/images/linkedin_rqxjhc.svg"
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
