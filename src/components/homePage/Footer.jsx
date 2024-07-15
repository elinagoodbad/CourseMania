import React from "react";
import styles from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SvgIcon from "@mui/material/SvgIcon";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const TikTokIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M9 3v18c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V3h-6zM6.5 4.5v15h-3v-15h3zM15 6v16.5h-3V6h3zM12 1v2h-1V1h1zM5.5 1v2h-1V1h1zM15.5 1v2h-1V1h1zM12 20v2h-1v-2h1zM5.5 20v2h-1v-2h1zM15.5 20v2h-1v-2h1z" />
  </SvgIcon>
);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h4>О нас</h4>
          <ul>
            <li>Курсы</li>
            <li>Полезное</li>
            <li>Отзывы</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Social</h4>
          <ul className={styles.social}>
            <li>
              <InstagramIcon className={styles.icon} /> Instagram
            </li>
            <li>
              <TikTokIcon className={styles.icon} /> TikTok
            </li>
            <li>
              <YouTubeIcon className={styles.icon} /> YouTube
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Контакты</h4>
          <ul>
            <li>
              <PhoneIcon className={styles.icon} /> +996 554 201 506
            </li>
            <li>
              <TelegramIcon className={styles.icon} /> Telegram
            </li>
            <li>
              <WhatsAppIcon className={styles.icon} /> WhatsApp
            </li>
            <li>
              <EmailIcon className={styles.icon} /> u.skillz.edu@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <span>
            © 2023 | ОсОО «U!SkillZ» | Все права защищены. Копирование
            материалов запрещено.
          </span>
          <span>Политика конфиденциальности</span>
          <span>Договор оферты</span>
        </div>
        <div className={styles.right}>
          <img src="visa-logo.png" alt="Visa" className={styles.logo} />
          <img
            src="mastercard-logo.png"
            alt="Mastercard"
            className={styles.logo}
          />
          <button className={styles.button}>Личный кабинет</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
