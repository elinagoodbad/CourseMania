import React from "react";
import styles from "./Footer.module.css"; // Import the CSS module
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
            <img
              src="https://static.tildacdn.com/tild6562-3333-4134-b638-356237333662/logo_vector.svg"
              alt="uSkillz Logo"
              className={styles.logoImage}
            />
            <p className={styles.logoText}>uSkillz</p>
          </div>
          <div className={styles.footerLinks}>
            <h4 className={styles.footerTitle}>Navigation</h4>
            <ul className={styles.footerList}>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerContact}>
            <h4 className={styles.footerTitle}>Contacts</h4>
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
        <div className={styles.footerAccount}>
          <button className={styles.accountButton}>Account</button>
        </div>
        <div className={styles.paymentIcons}>
          <img
            src="https://media.licdn.com/dms/image/C4D12AQHlVmYMucjSIA/article-cover_image-shrink_720_1280/0/1628177193073?e=2147483647&v=beta&t=peBfQFzZfheBlCxcnCmkAm4N_uYK5nSd7cPf7OdaGo8"
            alt="Visa"
          />
          <img
            src="https://www.svgrepo.com/show/362015/mastercard-3.svg"
            alt="MasterCard"
          />
        </div>
        <div className={styles.footerBottom}>
          <p>{new Date().getFullYear()} uSkillz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
ы;
