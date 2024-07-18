import React, { useState, useEffect, useRef } from "react";
import { Verified } from "@mui/icons-material";
import styles from "./Cards.module.css";

const Cards = () => {
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
      <span className={`${styles.title} ${styles.lowercase}`}>
        Discover Your Potential
      </span>
      <span className={`${styles.subtitle} ${styles.lowercase}`}>
        Empowering Students for a Brighter Future
      </span>
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
            src="https://sun9-33.userapi.com/impg/WHnYVseBS9wqWnvXIsHnzH5nkTVjOrv3gyk4UA/v30LcPvVpZQ.jpg?size=705x940&quality=95&sign=e6dcc0d2d55f39e919d4fe5c4cc7d95e&type=album"
            alt="Profile 1"
            className={styles.profileImage}
          />
          <div className={styles.cardInfo}>
            <div className={styles.verified}>
              <Verified className={styles.verifiedIcon} />
              Verified
            </div>
            <div className={styles.name}>Aiperi</div>
            <div className={styles.position}>Curator</div>
          </div>
        </div>
        <div className={`${styles.card} ${styles.cardBack}`}>
          <img
            src="https://sun9-78.userapi.com/impg/pj-K-_V1lyDSfp_g4Bo-Ou9YVAQVao2gS3cLtw/98nov2JPLYI.jpg?size=504x672&quality=95&sign=03e45e751b7ce22897fe19e3c9ac8d87&type=album"
            alt="Profile 2"
            className={styles.profileImage}
          />
          <div className={styles.cardInfo}>
            <div className={styles.verified}>
              <Verified className={styles.verifiedIcon} />
              Verified
            </div>
            <div className={styles.name}>Kanykei</div>
            <div className={styles.position}>Curator</div>
          </div>
        </div>
      </div>
      <p className={`${styles.curatorText} ${styles.bounceEffect}`}>
        Meet our esteemed team of curators dedicated to nurturing and guiding
        students through their educational journey, fostering growth and
        excellence in learning.
      </p>
    </div>
  );
};

export default Cards;
