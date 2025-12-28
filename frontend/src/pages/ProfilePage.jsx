import React, { useEffect, useState } from "react";
import { getProfile } from "../services/auth";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const [info, setInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfile();
        setInfo(res.data);
      } catch (err) {
        console.error("Error:", err.response?.data || err.message);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "40px 20px" }}>
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          border: "1px solid #e5e5e5",
        }}
      >
        <h2 style={{ fontSize: "28px", fontWeight: "600", marginBottom: "20px", color: "#222" }}>
          My Profile
        </h2>

        <div style={{ marginBottom: "25px" }}>
          {info ? (
            <div
              style={{
                background: "#f7f7f7",
                padding: "15px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                overflowX: "auto",
              }}
            >
              <pre style={{ margin: 0 }}>{JSON.stringify(info, null, 2)}</pre>
            </div>
          ) : (
            <p style={{ fontSize: "16px", color: "#666" }}>Loading your information...</p>
          )}
        </div>

        <button
          onClick={() => navigate("/logout")}
          style={{
            width: "100%",
            padding: "12px",
            background: "#4d94ff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
