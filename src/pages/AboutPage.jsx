import React, { useState, useEffect, useRef } from "react";
import { Verified } from "@mui/icons-material";
import styles from "./AboutPage.module.css";
import { Footer } from "antd/es/layout/layout";

const AboutPage = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const cardsRef = useRef(null);

  const profilePhotos = [
    "https://images.unsplash.com/photo-1596075780750-81249df16d19?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D1",
    "https://images.unsplash.com/photo-1542327897-d73f4005b533?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1608494779198-eaa382a2cf3f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NDgxMzk1NHx8ZW58MHx8fHx8",
    "https://media.istockphoto.com/id/920982244/photo/black-man-with-tattoo-on-arms.webp?s=170667a&w=0&k=20&c=z5gnLu6K0slgpBrCGXmvOgeADwUV5fN4JYE3UI315wo=",
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
      <header className={styles.header}>
        {/* <h1 className={styles.headerTitle}>About Us</h1> */}
        <p className={styles.headerSubtitle}>
          Get to know more about our mission, vision, and values.
        </p>
        {/* <img
          className={styles.headerImage}
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"
          alt="Learning Hub"
        /> */}
      </header>

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
          {profilePhotos.map((photo, index) => (
            <div key={index} className={`${styles.card} ${styles.cardFront}`}>
              <img
                src={photo}
                alt={`Profile ${index + 1}`}
                className={styles.profileImage}
              />
              <div className={styles.cardInfo}>
                <div className={styles.verified}>
                  <Verified className={styles.verifiedIcon} />
                  Verified
                </div>
                <div className={styles.name}>Name {index + 1}</div>
                <div className={styles.position}>Position {index + 1}</div>
                <div className={styles.socialIcons}>
                  {/* Add your social media links here */}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <Footer /> */}
      </section>
    </div>
  );
};

export default AboutPage;
