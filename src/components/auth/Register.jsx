import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";

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
    <div>
      <h1>Register</h1>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <input
        onChange={(e) => setPasswordConfirm(e.target.value)}
        type="password"
        placeholder="Confirm Password"
      />
      <button onClick={handleSave}>Register</button>
    </div>
  );
};

export default Register;
