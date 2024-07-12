import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import styles from "./Login.module.css";

const Login = () => {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSave = () => {
    if (!email.trim() || !password.trim()) {
      alert("Заполните поля!");
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
        placeholder="email"
        className={styles.input}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
        className={styles.input}
      />
      <button onClick={handleSave} className={styles.button}>
        Save
      </button>
    </div>
  );
};

export default Login;
