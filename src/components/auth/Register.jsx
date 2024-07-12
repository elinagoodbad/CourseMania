import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      alert("Please fill in all fields!");
      return;
    }
    if (password !== passwordConfirm) {
      alert("Passwords do not match!");
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
      <p className={styles.linkText}>
        Already have an account?{" "}
        <Link to="/login" className={styles.link}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
