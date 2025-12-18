import React, { useState } from "react";
import { register } from "../services/auth";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await register(username, email, password);
      alert("Registered: " + res.data.username);
    } catch (err) {
      alert("Error: " + (err.response?.data || err.message));
    }
  };

  return (
    <form onSubmit={handleRegister} className="p-3">
      <h2>Register</h2>
      <ul>
      <li><input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" /> </li>

      <li><input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /> </li>

      <li><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /> </li></ul>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterPage;
