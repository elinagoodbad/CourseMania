import React, { useState, useEffect, useRef } from "react";
import { Verified } from "@mui/icons-material"; // Import the Verified icon from MUI
import styles from "./TalentSection.module.css";

const TalentSection = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const cardsRef = useRef(null);

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
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.accent}>Discover</span> Your Potential!
      </h1>
      <p className={styles.subtitle}>
        Empowering Students for a Brighter Future
      </p>

      <div className={styles.words}>
        <div className={styles.word}>Learn</div>
        <div className={styles.word}>Practice</div>
        <div className={styles.word}>Create</div>
      </div>

      <div
        ref={cardsRef}
        className={`${styles.cards} ${isRevealed ? styles.reveal : ""}`}
      >
        <div className={`${styles.card} ${styles.cardFront}`}>
          <img
            src="https://sun9-48.userapi.com/impg/YXK0uYpbbzqOJZlCqQ3thGnzzMR0F0tJnOuAbQ/-UAZFSc7rMc.jpg?size=424x628&quality=96&sign=306863baf6f9605d8a9165251b7e695a&type=album"
            alt="Profile 1"
            className={styles.profileImage}
          />
          <div className={styles.cardInfo}>
            <div className={styles.verified}>
              <Verified className={styles.verifiedIcon} />
              Verified
            </div>
            <div className={styles.name}>Adilet</div>
            <div className={styles.position}>Frontend - Mentor</div>
          </div>
        </div>
        <div className={`${styles.card} ${styles.cardBack}`}>
          <img
            src="https://sun9-43.userapi.com/impg/PR0i0QDzYf-aDFwP2FhRKs0bAE687whi4hYbKA/uDfhsUr34Pk.jpg?size=640x640&quality=96&sign=31fadcd5c9a79023570a49fa750e4736&type=album"
            alt="Profile 2"
            className={styles.profileImage}
          />
          <div className={styles.cardInfo}>
            <div className={styles.verified}>
              <Verified className={styles.verifiedIcon} />
              Verified
            </div>
            <div className={styles.name}>Kanykei</div>
            <div className={styles.position}>Сurator</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentSection;
