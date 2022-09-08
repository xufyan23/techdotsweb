import Link from 'next/link';
import { useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import CloseIcon from "../public/images/close.svg";
import Logo from "../public/images/logo.svg";
import MenuIcon from "../public/images/menu-icon.svg";
import Linkedin from "../public/images/linkedin.svg";
import styles from '../styles/Header.module.scss';


const Header = () => {
  const router = useRouter();
  const navBarCollapse = useRef();

  const handleMenuClose = () => {
    navBarCollapse.current.classList.remove("show");
  }

  return (
    <header className={`${styles.nav_header}`}>
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
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon"><Image src={MenuIcon} alt=""
              onClick={()=>{
                document.body.style.overflow = 'hidden'
              }}
            /></span>
          </button>

          <div
            className="navbar-collapse collapse justify-content-center"
            id="navbarNav"
            ref={navBarCollapse}
            onClick={()=>{
              document.body.style.overflow = 'unset'
            }}
          >
            <ul className="navbar-nav align-items-center">
              <div className="menu-close" onClick={handleMenuClose}>
                <Image src={CloseIcon} alt="close menu" />
              </div>
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
