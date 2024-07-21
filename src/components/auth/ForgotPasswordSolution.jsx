import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import { Link } from "react-router-dom";
import styles from "./ForgotPasswordSolution.module.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const ForgotPasswordSolution = () => {
  const { handleForgotPasswordSolution } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [code, setCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

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
    <div>
      <div className={styles.backgroundWrapper}></div>
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
        <div className={styles.passwordContainer}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <span
            className={styles.passwordIcon}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </span>
        </div>
        <div className={styles.passwordContainer}>
          <input
            type={showPasswordConfirm ? "text" : "password"}
            placeholder="Confirm New Password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            className={styles.input}
          />
          <span
            className={styles.passwordIcon}
            onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
          >
            {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
          </span>
        </div>
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
    </div>
  );
};

export default ForgotPasswordSolution;
