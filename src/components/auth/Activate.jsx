import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";

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
    <div>
      <h1>Activate Your Account</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Activation Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleSave}>Activate</button>
    </div>
  );
};

export default Activate;
