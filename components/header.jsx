import Link from 'next/link';
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from '../styles/Header.module.scss';

const Header = () => {
  const router = useRouter();
  const navBarCollapse = useRef();
  const overlay = useRef();

  const handleMenuClose = () => {
    navBarCollapse.current.classList.remove("show");
    overlay.current.classList.add("hide");
    overlay.current.classList.remove('show');
    document.body.style.overflow = 'unset'
  }

  return (
    <header className={`${styles.nav_header}`}>
      <div className="container">
        <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
          <div className={`navbar-brand ${styles.navbar_brand}`}>
            <Link href="/">
              <a>
                <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/c_scale,q_auto,w_190/v1662729612/Techdots/images/logo_nrmjxm.svg"
                  width={95} height={26} alt="techdots"/>
              </a>
            </Link>
          </div>
          <div ref={overlay} id="overlay" onClick={handleMenuClose} className="overlay hide"></div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon"><Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729610/Techdots/images/menu-icon_fbxuyr.svg"
              width={30} height={30} alt=""
              onClick={()=>{
                document.body.style.overflow = 'hidden'
                // overlay.current.classList.remove('d-none');
                overlay.current.classList.remove('hide');
                overlay.current.classList.add('show');
              }}
            /></span>
          </button>

          <div
            className="navbar-collapse collapse justify-content-center d-block"
            id="navbarNav"
            ref={navBarCollapse}
          >
            <ul className="navbar-nav align-items-center">
              <div className="menu-close" onClick={handleMenuClose}>
                <Image src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729605/Techdots/images/close_ybweq9.svg"
                  width={24} height={24} alt="close menu"/>
              </div>
              <li
                className={`${styles.nav_link} ${
                  router.pathname === "/" ? styles.active : ""
                }`}
              >
                <Link className="nav-link" href="/">
                  <a>Home</a>
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
                  router.pathname === "/portfolio" ? styles.active : ""
                }`}
              >
                <Link className="nav-link" href="/portfolio">
                  <a>Portfolio</a>
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
                      src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1662729611/Techdots/images/linkedin_rqxjhc.svg"
                      width={20}
                      height={20}
                      alt="Linked In page"
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
