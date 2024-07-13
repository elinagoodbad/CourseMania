import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import { Link } from "react-router-dom";
import styles from "./ForgotPasswordSolution.module.css";

const ForgotPasswordSolution = () => {
  const { handleForgotPasswordSolution } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    if (
      !email.trim() ||
      !password.trim() ||
      !passwordConfirm.trim() ||
      !code.trim()
    ) {
      alert("Please fill in all fields!");
      return;
    }

    if (password !== passwordConfirm) {
      alert("Passwords do not match!");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirm", passwordConfirm);
    formData.append("code", code);

    handleForgotPasswordSolution(formData);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Forgot Password Solution</h1>
      <p className={styles.text}>
        If you have received a password reset link, please follow the
        instructions in the email.
      </p>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      />
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
      />
      <input
        type="password"
        placeholder="Confirm New Password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Verification Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleSubmit} className={styles.button}>
        Submit
      </button>
      <p className={`${styles.linkText} ${styles.backToLogin}`}>
        Back to Login?{" "}
        <Link to="/login" className={styles.link}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default ForgotPasswordSolution;
