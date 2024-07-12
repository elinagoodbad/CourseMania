import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import styles from "./Activate.module.css";

const Activate = () => {
  const { handleActivate } = useAuth();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleSave = () => {
    if (!email.trim() || !code.trim()) {
      alert("Заполните все данные!");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("code", code);

    handleActivate(formData);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Activate Your Account</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Activation Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleSave} className={styles.button}>
        Activate
      </button>
    </div>
  );
};

export default Activate;
