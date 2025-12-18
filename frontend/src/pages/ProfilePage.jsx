import React, { useEffect, useState } from "react";
import { getProfile, logout } from "../services/auth";
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

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="p-3">
      <h2>Profile </h2>
      {info ? <pre>{JSON.stringify(info, null, 2)}</pre> : <p>Loading...</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default ProfilePage;
