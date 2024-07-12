import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
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
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Login</h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
        className={styles.input}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className={styles.input}
      />
      <button onClick={handleSave} className={styles.button}>
        Login
      </button>
      <p className={styles.linkText}>
        Don’t have an account?{" "}
        <Link to="/register" className={styles.link}>
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
