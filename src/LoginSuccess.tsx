import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");
    if (code) {
      alert(`GitHub OAuth Code: ${code}`);
      // Optional: Store or forward this code to your backend
      // For now: redirect or console.log
    } else {
      alert("No GitHub code received.");
    }

    navigate("/");
  }, [location, navigate]);

  return <div className="text-white text-center py-20">Authenticating with GitHub...</div>;
}
