import { useEffect } from "react";
import { logout } from "../services/auth";
import { useNavigate } from "react-router-dom";

function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const doLogout = async () => {
      try {
        await logout();
      } catch (err) {
        console.error("Logout error:", err);
      }

      if (isMounted) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    doLogout();

    return () => {
      isMounted = false;
    };
  }, [navigate]);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Logging you out...</h2>
    </div>
  );
}

export default LogoutPage;
