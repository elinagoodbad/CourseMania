import React from "react";
import styles from "./Footer.module.css"; // Importing the CSS module
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <p className={styles.logoText}>Let's Do It!</p>
          </div>
          <div className={styles.footerLinks}>
            <h4 className={styles.footerTitle}>Navigation</h4>
            <ul className={styles.footerList}>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </div>
          <div className={styles.footerContact}>
            <h4 className={styles.footerTitle}>Contact</h4>
            <ul className={styles.footerList}>
              <li>
                <i className="fa fa-map-marker"></i> Kyrgyzstan, Bishkek
              </li>
              <li>
                <i className="fa fa-phone"></i> +996 554 201 506
              </li>
              <li>
                <i className="fa fa-envelope"></i> info@uskillz.online
              </li>
            </ul>
          </div>
          <div className={styles.footerSocial}>
            <h4 className={styles.footerTitle}>Social Media</h4>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/uskillz.online">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/uskillz.online">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.youtube.com/channel/UCMOANSqh_IfUFCZ2bo1z3Bg">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://t.me/uskillz_online">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>{new Date().getFullYear()} Let's Do It!. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
