// import {useRouter} from "next/router";
import Link from 'next/link';
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../public/images/logo.svg";
import styles from '../styles/Header.module.scss';
import Linkedin from "../public/images/linkedin.svg";


const Header = () => {
	const router = useRouter()

	return (
    <header className={styles.navheader}>
      <div className="container">
        <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
          <div className={`navbar-brand ${styles.navbar_brand}`}>
            <Link href="/">
              <a>
                <Image src={Logo} width={95} height={26} alt="techdots" />
              </a>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
          >
            <ul className="navbar-nav align-items-center">
              {/* <li className="nav-item active">
							<Link className="nav-link" href="/">Home<span className="sr-only">(current)</span></Link>
						</li> */}
              <li
                className={`${styles.nav_link} ${
                  router.pathname === "/" ? styles.active : ""
                }`}
              >
                <Link className="nav-link" href="/">
                  <a>Who are we</a>
                </Link>
              </li>
              <li
                className={`${styles.nav_link} ${
                  router.pathname === "/services" ? styles.active : ""
                }`}
              >
                <Link className="nav-link" href="/services">
                  <a>Services</a>
                </Link>
              </li>
              <li
                className={`${styles.nav_link} ${
                  router.pathname === "/success-stories" ? styles.active : ""
                }`}
              >
                <Link className="nav-link" href="/success-stories">
                  <a>Success Stories</a>
                </Link>
              </li>
              <li
                className={`${styles.nav_link} ${
                  router.pathname === "/contact" ? styles.active : ""
                }`}
              >
                <Link className="nav-link" href="/contact">
                  <a>Contact Us</a>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav align-items-center nav-right">
              <li className={`${styles.header_cta}`}>
                <Link href="https://techdots.zohobookings.com/#/customer/custom-software-development">
                  <a target="_blank" className="btn btn-outline">
                    Book Appointment
                  </a>
                </Link>
              </li>
              <li className={`${styles.social_icon}`}>
                <Link href="https://www.linkedin.com/company/tech-dots-dev/mycompany/">
                  <a target="_blank">
                    <Image
                      src={Linkedin}
                      width={20}
                      height={20}
                      alt="Linked In"
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
