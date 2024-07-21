import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import { Link } from "react-router-dom";
import styles from "./ChangePassword.module.css";

const ChangePassword = () => {
  const { handleChangePassword } = useAuth();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSave = () => {
    if (!oldPassword.trim() || !newPassword.trim()) {
      alert("Please fill in all fields!");
      return;
    }

    const formData = new FormData();
    formData.append("oldPassword", oldPassword);
    formData.append("newPassword", newPassword);

    handleChangePassword(formData, oldPassword, newPassword);
  };

  return (
    <div>
      <div className={styles.backgroundWrapper}></div>
      <div className={styles.container}>
        <h1 className={styles.header}>Change Password</h1>
        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleSave} className={styles.button}>
          Change Password
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

export default ChangePassword;
