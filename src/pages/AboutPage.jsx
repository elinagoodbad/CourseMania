import React, { useState, useEffect, useRef } from "react";
import { Verified, LinkedIn } from "@mui/icons-material";
import styles from "./AboutPage.module.css";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpeg";
import img6 from "./assets/img6.jpg";
import Parallax from "./Parallax";

const AboutPage = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const cardsRef = useRef(null);

  const profileData = [
    {
      img: img4,
      name: "RISHAT",
      position: "TRACKER",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/rishat-osmonov-8934382aa/",
      },
    },
    {
      img: img2,
      name: "KANYKEI",
      position: "CURATOR",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/kanykei-dairbekova-594a67285/",
      },
    },

    {
      img: img1,
      name: "ADILET",
      position: "MENTOR",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/adilet-gazybekov-190660240/",
      },
    },

    {
      img: img3,
      name: "AIPERI",
      position: "CURATOR",
      socialLinks: {
        linkedin:
          "https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAEQKbUUBj5HkGemKLzewbsydq_vkWR9s8Ck&keywords=Aiperi%20Iskenderova&origin=ENTITY_SEARCH_HOME_HISTORY&sid=GAS",
      },
    },

    {
      img: img5,
      name: "ELMAR",
      position: "TRACKER",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/rishat-osmonov-8934382aa/",
      },
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Введение во Frontend",
      url: "https://youtu.be/TOOcRZnORVk",
      description: "Основы Frontend-разработки и как начать.",
    },
    {
      id: 2,
      title: "Что такое Frontend",
      url: "https://youtu.be/JVpEZY1rdO4",
      description: "Что такое Frontend и его основные аспекты.",
    },
    {
      id: 3,
      title: "Какие технологии нужны для Frontend",
      url: "https://youtu.be/e8dpVcUGyr8",
      description: "Обзор технологий, необходимых для Frontend-разработки.",
    },
    {
      id: 4,
      title: "Введение HTML",
      url: "https://youtu.be/LsG9UffaVx0",
      description: "Основы HTML и его структура.",
    },
    {
      id: 5,
      title: "Практика HTML",
      url: "https://youtu.be/DiflzqwcbU4",
      description: "Практическое применение HTML на примере.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (cardsRef.current) {
        const { top, bottom } = cardsRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setIsRevealed(top <= windowHeight / 1.5 && bottom >= windowHeight / 2);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.aboutContainer}>
      <Parallax />
      {/* <header className={styles.header}>
        <p className={styles.headerSubtitle}>
          Get to know more about our mission, vision, and values.
        </p>
      </header> */}
      {/* <header className={styles.header}>
        <div className={styles.headerImageWrapper}>
          <img src={img6} alt="Center Image" className={styles.headerImage} />

          <div className={styles.backgroundText}>OUR TEAM</div>
        </div>
      </header> */}

      <section className={styles.talentSection}>
        <h1 className={styles.title}>
          <span className={styles.accent}>Discover</span> Your Potential!
        </h1>
        <p className={styles.subtitle}>
          Empowering Students for a Brighter Future
        </p>

        <div
          ref={cardsRef}
          className={`${styles.cards} ${isRevealed ? styles.reveal : ""}`}
        >
          {profileData.map((profile, index) => (
            <div key={index} className={`${styles.card} ${styles.cardFront}`}>
              <img
                src={profile.img}
                alt={`Profile ${index + 1}`}
                className={styles.profileImage}
              />
              <div className={styles.cardInfo}>
                <div className={styles.verified}>
                  <Verified className={styles.verifiedIcon} />
                  Verified
                </div>
                <div className={styles.name}>{profile.name}</div>
                <div className={styles.position}>{profile.position}</div>
                <div className={styles.socialIcons}>
                  <a
                    href={profile.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn className={styles.linkedinIcon} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.introSection}>
        <h2 className={styles.sectionTitle}>Welcome to Our Learning Hub</h2>
        <p className={styles.sectionContent}>
          We are excited to offer you a range of educational videos to help you
          start your journey in Frontend Development. Explore these resources
          and take your skills to the next level!
        </p>
        <div className={styles.videoGrid}>
          {videos.slice(0, 3).map((video) => (
            <div key={video.id} className={styles.videoCard}>
              <iframe
                className={styles.videoFrame}
                src={`https://www.youtube.com/embed/${video.url
                  .split("/")
                  .pop()}`}
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className={styles.videoInfo}>
                <h3 className={styles.videoTitle}>{video.title}</h3>
                <p className={styles.videoDescription}>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.videoGrid}>
          {videos.slice(3).map((video) => (
            <div key={video.id} className={styles.videoCard}>
              <iframe
                className={styles.videoFrame}
                src={`https://www.youtube.com/embed/${video.url
                  .split("/")
                  .pop()}`}
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className={styles.videoInfo}>
                <h3 className={styles.videoTitle}>{video.title}</h3>
                <p className={styles.videoDescription}>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
