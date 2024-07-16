import React from "react";
import styles from "./AboutPage.module.css";
const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      {" "}
      <header className={styles.header}>
        <h1 className={styles.title}>About Us</h1>{" "}
        <p className={styles.subtitle}>Discover our story and meet our team</p>
      </header>{" "}
      <section className={styles.section} id="mission">
        <div className={styles.card}>
          {" "}
          <div className={styles.imageContainer}>
            <img
              src="https://images.unsplash.com/photo-1541677854486-ae7c09ba8c0b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
              alt="Mission"
              className={styles.image}
            />{" "}
          </div>
          <div className={styles.cardContent}>
            {" "}
            <h2 className={styles.cardTitle}>Our Mission</h2>
            <p className={styles.text}>
              {" "}
              We strive to create the best user experiences by combining
              innovation and creativity.{" "}
            </p>
          </div>{" "}
        </div>
        <div className={styles.card}>
          {" "}
          <div className={styles.imageContainer}>
            <img
              src="https://plus.unsplash.com/premium_photo-1706569344019-8bdec7130196?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8"
              alt="Values"
              className={styles.image}
            />{" "}
          </div>
          <div className={styles.cardContent}>
            {" "}
            <h2 className={styles.cardTitle}>Our Values</h2>
            <p className={styles.text}>
              {" "}
              We believe in integrity, collaboration, and excellence in all that
              we do.{" "}
            </p>
          </div>{" "}
        </div>
      </section>{" "}
      <section className={styles.teamSection} id="team">
        <h2 className={styles.sectionTitle}>Meet Our Team</h2>{" "}
        <div className={styles.team}>
          <div className={styles.teamMember}>
            {" "}
            <img
              src="https://images.unsplash.com/photo-1720743830151-71532be3dc0a?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team Member"
              className={styles.teamImage}
            />
            <h3 className={styles.teamName}>John Doe</h3>{" "}
            <p className={styles.teamRole}>CEO</p>
          </div>{" "}
          <div className={styles.teamMember}>
            <img
              src="https://images.unsplash.com/photo-1719095300280-1ff6d7ecb7d4?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team Member"
              className={styles.teamImage}
            />{" "}
            <h3 className={styles.teamName}>Jane Smith</h3>
            <p className={styles.teamRole}>CTO</p>{" "}
          </div>
        </div>{" "}
      </section>
      <section className={styles.timelineSection} id="timeline">
        {" "}
        <h2 className={styles.sectionTitle}>Our Journey</h2>
        <div className={styles.timeline}>
          {" "}
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              {" "}
              <h3>2015</h3>
              <p>Company founded with a vision to innovate.</p>{" "}
            </div>
          </div>{" "}
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              {" "}
              <h3>2017</h3>
              <p>Expanded our team and moved to a new office.</p>{" "}
            </div>
          </div>{" "}
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              {" "}
              <h3>2020</h3>
              <p>Launched our flagship product.</p>{" "}
            </div>
          </div>{" "}
        </div>
      </section>{" "}
      <section className={styles.testimonialsSection} id="testimonials">
        <h2 className={styles.sectionTitle}>Testimonials</h2>{" "}
        <div className={styles.testimonials}>
          <div className={styles.testimonial}>
            {" "}
            <p className={styles.testimonialText}>
              "This company provided an outstandingservice. Their team is highly
              professional and dedicated."
            </p>{" "}
            <p className={styles.testimonialAuthor}>- Happy Client</p>
          </div>{" "}
          <div className={styles.testimonial}>
            <p className={styles.testimonialText}>
              {" "}
              "The best experience I have ever had with a tech company. Highly
              recommend!"{" "}
            </p>
            <p className={styles.testimonialAuthor}>
              - Satisfied Customer
            </p>{" "}
          </div>
        </div>{" "}
      </section>
      <section className={styles.projectsSection} id="projects">
        {" "}
        <h2 className={styles.sectionTitle}>Our Projects</h2>
        <div className={styles.projects}>
          {" "}
          <div className={styles.project}>
            <img
              src="https://plus.unsplash.com/premium_photo-1661414432619-290cff769e15?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Project"
              className={styles.projectImage}
            />{" "}
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Project One</h3>{" "}
              <p className={styles.projectDescription}>
                A brief description of Project One. Highlighting the main
                features and achievements.
              </p>{" "}
            </div>
          </div>{" "}
          <div className={styles.project}>
            <img
              src="https://images.unsplash.com/photo-1573496358773-bdcdbd984982?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Project"
              className={styles.projectImage}
            />{" "}
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Project Two</h3>{" "}
              <p className={styles.projectDescription}>
                A brief description of Project Two. Showcasing key aspects and
                results.{" "}
              </p>
            </div>{" "}
          </div>
        </div>{" "}
      </section>
      <section className={styles.partnersSection} id="partners">
        {" "}
        <h2 className={styles.sectionTitle}>Our Partners</h2>
        <div className={styles.partners}>
          {" "}
          <img
            src="https://images.unsplash.com/photo-1590874315261-788881621f7a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGxvZ29zfGVufDB8fDB8fHww"
            alt="Partner"
            className={styles.partnerLogo}
          />
          <img
            src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3N8ZW58MHx8MHx8fDA%3D"
            alt="Partner"
            className={styles.partnerLogo}
          />
          <img
            src="https://images.unsplash.com/photo-1634309490604-1270c0d486e8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxvZ29zfGVufDB8fDB8fHww"
            alt="Partner"
            className={styles.partnerLogo}
          />{" "}
        </div>
      </section>{" "}
      <section className={styles.ctaSection} id="cta">
        <h2 className={styles.ctaTitle}>Join Us</h2>{" "}
        <p className={styles.ctaText}>
          We are always looking for talented individuals to join our team. If
          you are passionate about technology and innovation, reach out to us!
        </p>{" "}
        <button className={styles.ctaButton}>Contact Us</button>
      </section>{" "}
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          {" "}
          © 2024 Company Name. All rights reserved.
        </p>{" "}
      </footer>
    </div>
  );
};
export default AboutPage;
