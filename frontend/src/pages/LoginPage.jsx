import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login(username, password);
      localStorage.setItem("token", res.data.token);
      navigate("/profile");
    } catch (err) {
      alert("Login failed: " + (err.response?.data || err.message));
    }
  };


  return (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #3bd1f6ff, #33ea42ff)"
  }}>
    <form
      onSubmit={handleLogin}
      style={{
        width: "380px",
        padding: "2.5rem",
        borderRadius: "16px",
        background: "white",
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
      }}
    >
      <h2 style={{
        marginBottom: "1.5rem",
        textAlign: "center",
        fontSize: "1.8rem",
        fontWeight: "700",
        color: "#1f2937"
      }}>
        Welcome Back
      </h2>

      <label style={{ fontSize: "0.9rem", fontWeight: "600" }}>Username</label>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        style={{
          width: "100%",
          padding: "0.75rem",
          marginBottom: "1rem",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
          background: "#f9fafb"
        }}
      />

      <label style={{ fontSize: "0.9rem", fontWeight: "600" }}>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        style={{
          width: "100%",
          padding: "0.75rem",
          marginBottom: "1.5rem",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
          background: "#f9fafb"
        }}
      />

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "0.85rem",
          background: "#673bf6ff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "700",
          fontSize: "1rem",
          transition: "0.2s"
        }}
      >
        Login
      </button>
    </form>
  </div>
);
}
//   return (
//     <form onSubmit={handleLogin} className="p-3">
//       <h2>Login</h2>
//       <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// }

export default LoginPage;
