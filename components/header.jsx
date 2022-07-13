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
              <li className={`nav-link ${styles.nav_link} ${styles.active}`}>
                <Link href="/">
                  <a>Who are we</a>
                </Link>
              </li>
              <li c className={`nav-link ${styles.nav_link}`}>
                <Link className="nav-link" href="/services">
                  Services
                </Link>
              </li>
              <li className={`nav-link ${styles.nav_link}`}>
                <Link className="nav-link" href="/success-stories">
                  Success Stories
                </Link>
              </li>
              <li className={`nav-link ${styles.nav_link}`}>
                <Link className="nav-link" href="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav align-items-center nav-right">
              <li className={`${styles.header_cta}`}>
                <button className="btn btn-outline">Book Appointment</button>
              </li>
              <li className={`${styles.social_icon}`}>
                <Link href="#"><a><Image src={Linkedin} width={20} height={20} alt="Linked In"/></a></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
