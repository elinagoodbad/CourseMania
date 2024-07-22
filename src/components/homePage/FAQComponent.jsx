import React, { useState } from "react";
import styles from "./FAQComponent.module.css";

const faqData = [
  {
    question: "How do I register for the course?",
    answer:
      "Contact us via email to register for the course, and we will provide you with all the instructions to begin your learning journey.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "You can pay for the course using VISA and Mastercard. For citizens of KR, payment is accepted through Мbank, O! Money, Balance KG, Elsom, Elkart.",
  },
  {
    question:
      "How long will I have access to the lessons after completing the course?",
    answer:
      "After completing the course, you will have access to the lessons for an additional 30 days for review and completion of assignments.",
  },
  {
    question: "Can I get a refund if I am not satisfied with the course?",
    answer:
      "Unfortunately, our course policy does not allow refunds after the start of the course.",
  },
  {
    question: "How can I find out the duration and schedule of the course?",
    answer:
      "After enrolling in the course, you will receive the course schedule and information about its duration.",
  },
  {
    question: "What are the technical requirements for taking the course?",
    answer:
      "For comfortable course participation, a laptop or personal computer is required.",
  },
  {
    question:
      "What should I do if I have trouble accessing the course materials?",
    answer:
      "In case of issues accessing the course materials, we recommend contacting our support email. We are ready to help you resolve any issues that arise.",
  },
];

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.backgroundWrapper}></div>
      <div className={styles.faqContainer}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={`${styles.questionButton} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => toggleQuestion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`answer-${index}`}
            >
              {item.question}
              <svg
                className={styles.icon}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V19M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              id={`answer-${index}`}
              className={`${styles.answerContainer} ${
                activeIndex === index ? styles.show : ""
              }`}
              style={{
                height: activeIndex === index ? "auto" : "0",
              }}
            >
              <p className={styles.answer}>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
