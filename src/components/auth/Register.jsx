import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import styles from "./Register.module.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Register = () => {
  const { handleRegister } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

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
    <div>
      <div className={styles.backgroundWrapper}></div>
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
        <div className={styles.passwordContainer}>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
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
            onChange={(e) => setPasswordConfirm(e.target.value)}
            type={showPasswordConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            className={styles.input}
          />
          <span
            className={styles.passwordIcon}
            onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
          >
            {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
          </span>
        </div>
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
    </div>
  );
};

export default Register;
