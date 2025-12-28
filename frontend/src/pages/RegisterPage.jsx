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
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #3bd1f6ff, #33ea42ff)"
    }}
  >
    <form
      onSubmit={handleRegister}
      style={{
        width: "400px",
        padding: "2.5rem",
        borderRadius: "14px",
        background: "white",
        boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "0.5rem",
          fontSize: "1.8rem",
          fontWeight: "700",
          color: "#1e293b",
        }}
      >
        Create Account
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        <label style={{ fontSize: "0.9rem", fontWeight: "600", color: "#475569" }}>
          Username
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          style={{
            padding: "0.75rem",
            borderRadius: "8px",
            border: "1px solid #cbd5e1",
            background: "#f8fafc",
            fontSize: "1rem",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        <label style={{ fontSize: "0.9rem", fontWeight: "600", color: "#475569" }}>
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          style={{
            padding: "0.75rem",
            borderRadius: "8px",
            border: "1px solid #cbd5e1",
            background: "#f8fafc",
            fontSize: "1rem",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        <label style={{ fontSize: "0.9rem", fontWeight: "600", color: "#475569" }}>
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          style={{
            padding: "0.75rem",
            borderRadius: "8px",
            border: "1px solid #cbd5e1",
            background: "#f8fafc",
            fontSize: "1rem",
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          marginTop: "0.5rem",
          padding: "0.85rem",
          background: "#1056b9ff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontWeight: "700",
          fontSize: "1rem",
          cursor: "pointer",
          transition: "0.2s",
        }}
      >
        Sign Up
      </button>
    </form>
  </div>
);

  // return (
  //   <form onSubmit={handleRegister} className="p-3">
  //     <h2>Register</h2>
  //     <ul>
  //     <li><input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" /> </li>

  //     <li><input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /> </li>

  //     <li><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /> </li></ul>
  //     <button type="submit">Register</button>
  //   </form>
  // );
}

export default RegisterPage;
