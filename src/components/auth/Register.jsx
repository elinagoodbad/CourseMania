import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import styles from "./Register.module.css";

const Register = () => {
  const { handleRegister } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSave = () => {
    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !passwordConfirm.trim()
    ) {
      alert("Заполните все данные!");
      return;
    }
    if (password !== passwordConfirm) {
      alert("Пароли не совпадают!");
      return;
    }

    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirm", passwordConfirm);

    handleRegister(formData);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Register</h1>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
        className={styles.input}
      />
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
      <input
        onChange={(e) => setPasswordConfirm(e.target.value)}
        type="password"
        placeholder="Confirm Password"
        className={styles.input}
      />
      <button onClick={handleSave} className={styles.button}>
        Register
      </button>
    </div>
  );
};

export default Register;
