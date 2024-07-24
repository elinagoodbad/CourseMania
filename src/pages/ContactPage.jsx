import React from "react";
import styles from "./ContactPage.module.css";
import img7 from "./assets/img7.jpg";
import Footer from "../components/homePage/Footer";

const ContactPage = () => {
  return (
    <div>
      <div className={styles.contactPage}>
        <div className={styles.content}>
          <h1 className={styles.title}>CONTACTS</h1>
          <div className={styles.credo}>
            <p>Empowering Future Programmers</p>
          </div>
          <div className={styles.emailContainer}>
            <a href="mailto:info@coursemania.kg" className={styles.emailLink}>
              info@coursemania.kg
            </a>
            <a
              href="mailto:support@coursemania.kg"
              className={styles.emailLink}
            >
              support@coursemania.kg
            </a>
          </div>
          <div className={styles.imageContainer}>
            <img src={img7} alt="Contact" />
          </div>
          <div className={styles.socialLinks}>
            <a href="https://web.telegram.org/a/" className={styles.socialLink}>
              TELEGRAM
            </a>
            <a href="https://web.whatsapp.com/" className={styles.socialLink}>
              WHATSAPP
            </a>
            <a href="https://www.instagram.com/" className={styles.socialLink}>
              INSTAGRAM
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
