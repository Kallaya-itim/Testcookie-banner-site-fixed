import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShowBanner(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0,
      background: "#222", color: "#fff", padding: "15px",
      textAlign: "center", zIndex: 1000
    }}>
      This site uses cookies to enhance your experience.{" "}
      <button onClick={acceptCookies} style={{
        background: "#4CAF50", color: "#fff", padding: "10px 15px",
        border: "none", marginLeft: "10px", cursor: "pointer"
      }}>
        Accept
      </button>
    </div>
  );
}
