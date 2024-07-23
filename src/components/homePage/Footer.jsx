import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { Facebook, Instagram, YouTube, Telegram } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Coursemania</h3>
            <p className={styles.footerDescription}>
              Knowledge opens doors we didn't even notice. Every new learning
              experience prepares us better for the challenges ahead.
            </p>
          </div>
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Quick Links</h4>
            <ul className={styles.footerList}>
              <li>
                <Link to="/courses" className={styles.footerLink}>
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className={styles.footerLink}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.footerLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Contact</h4>
            <address className={styles.footerAddress}>
              <p>Nevsky Prospect</p>
              <p>+123 456 789 000</p>
              <p>Coursemania@gmail.com</p>
            </address>
          </div>
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Follow Us</h4>
            <div className={styles.socialIcons}>
              {[
                {
                  icon: <Facebook />,
                  url: "https://www.facebook.com",
                },
                {
                  icon: <Instagram />,
                  url: "https://www.instagram.com",
                },
                {
                  icon: <YouTube />,
                  url: "https://www.youtube.com",
                },
                { icon: <Telegram />, url: "https://web.telegram.org" },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  className={styles.socialIcon}
                  color="inherit"
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </IconButton>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
