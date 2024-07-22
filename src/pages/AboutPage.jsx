import React, { useState, useEffect, useRef } from "react";
import { Verified, LinkedIn } from "@mui/icons-material";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const cardsRef = useRef(null);

  const profileData = [
    {
      img: "https://psv4.userapi.com/c909628/u557095737/docs/d15/1eb48f280121/img4.jpg?extra=qh7E00Hdw7T1rireT5eUrq3lgQY7jnSz7ygJ3-nehKEPPohD1yFIGrLNrfVrbN4MteabsCiUZn-lMFisS7MmKFgPJCYgIMbJuRjHbPVzHWBUU1Mmqqc2qbSXVvnLWiuSk8waiESZpcGlFbWWStR2fCur",
      name: "RISHAT",
      position: "TRACKER",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/rishat-osmonov-8934382aa/",
      },
    },
    {
      img: "https://psv4.userapi.com/c909628/u557095737/docs/d12/dea91e7d7f83/img2.jpg?extra=8RVgrifNyj-PodxcolMnKcV_0wQjRNVRD5H-ylv-U-SIPMPaQTcZjlCsmBlsYp8WOZASCfFtKP-KZfc9mXCZdZw0ixTHfjTZRSTjXJbFlWoOSu5W_D2YILBSN9ibj_RbhAzvFW57EZZQJ91J33GYb7Cy",
      name: "KANYKEI",
      position: "CURATOR",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/kanykei-dairbekova-594a67285/",
      },
    },
    {
      img: "https://psv4.userapi.com/c909628/u557095737/docs/d7/3a7308a805d3/img1.jpg?extra=UgCwDGcHfu7mjnBUel0r9qac4BQkoZnVUR6b-QfSrnNrpYEFeX2ic7YSduALVQxBgVs_no58nie8fWYe2a6Pf8z0HUHNhkHP342LHpd0WZ-IaNvW2Z6-9fwaQnoYvEVLvYG3W9DltdO4J1kYwX--W5S7",
      name: "ADILET",
      position: "MENTOR",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/adilet-gazybekov-190660240/",
      },
    },
    {
      img: "https://psv4.userapi.com/c909628/u557095737/docs/d56/cfcc5510cbd4/img3.jpg?extra=wy7d4T1HuFZtE-Ro7vNrhN0vk9p4_0bC4fVU68STHqx0sb0NtR7ILgNOYo3KN3iZmkYxTXefgZdivZ4RlIu7GEug8qLByEF7rSkb6gwqgzw3mLGl_FnusmK12zoRuh1P2Lx8crq6Ko66bYIos7Wvd6G6",
      name: "AIPERI",
      position: "CURATOR",
      socialLinks: {
        linkedin: "#img-representation-5",
      },
    },
    {
      img: "https://psv4.userapi.com/c909628/u557095737/docs/d22/23d32bdb0d9e/img5.jpg?extra=PrQ08ZqxR2gzpgkY-j9K5bYUBF-lzPmDCdTiiJsZYBwX2RuNK9M_K09IwTpNMJkS8wjhdQCjAram1Rc-GoVAe2d2irIpXFZe3Loyp5RFc8yNRpiD6BI7h20ks1i2-8mCZBpnZUzUM8dtafS_PHsjeuUe",
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
      description: "Обзор технологий для Frontend-разработки.",
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
      <section className={styles.introSection}>
        <div className={styles.introText}>
          <h2 className={styles.sectionTitle}>Welcome to Our Learning Hub</h2>
          <p className={styles.sectionContent}>
            We are excited to offer you a range of educational videos to help
            you start your journey in Frontend Development. Explore these
            resources and take your skills to the next level
          </p>
        </div>
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
          <span className={styles.accent}>Discover</span> Your Potential
        </h1>
        <p className={styles.subtitle}>Empowering for a Brighter Future</p>
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
                  <Verified fontSize="small" />
                  <span className={styles.verifiedText}>Verified</span>
                </div>
                <div className={styles.nameAndLinkedIn}>
                  <h2 className={styles.cardName}>{profile.name}</h2>
                  {profile.socialLinks.linkedin && (
                    <a
                      href={profile.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkedinIcon}
                    >
                      <LinkedIn fontSize="large" />
                    </a>
                  )}
                </div>

                <p className={styles.cardPosition}>{profile.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
