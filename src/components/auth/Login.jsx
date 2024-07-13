import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    if (!email.trim() || !password.trim()) {
      alert("Please fill in all fields!");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    handleLogin(formData, email);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
      />
      <p className={`${styles.linkText} ${styles.forgotPassword}`}>
        Forgot your password?{" "}
        <Link to="/forgot-password" className={styles.link}>
          Reset Password
        </Link>
      </p>
      <button onClick={handleSave} className={styles.button}>
        Login
      </button>
      <p className={styles.linkText}>
        Don't have an account?{" "}
        <Link to="/register" className={styles.link}>
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
