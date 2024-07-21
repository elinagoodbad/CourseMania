import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import { Link } from "react-router-dom";
import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  const { handleForgotPassword } = useAuth();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email.trim()) {
      alert("Please enter your email!");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);

    handleForgotPassword(formData);
  };

  return (
    <div>
      <div className={styles.backgroundWrapper}></div>
      <div className={styles.container}>
        <h1 className={styles.header}>Forgot Your Password?</h1>
        <p className={styles.text}>
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleSubmit} className={styles.button}>
          Send Reset Link
        </button>
        <p className={`${styles.linkText} ${styles.backToLogin}`}>
          Back to Login?{" "}
          <Link to="/login" className={styles.link}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
