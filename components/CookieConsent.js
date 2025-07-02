import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShowBanner(true);
  }, []);

  const handleCookieChange = (event) => {
    const { name, checked } = event.target;
    setCookieSettings((prevSettings) => ({
      ...prevSettings,
      [name]: checked,
    }));
  };

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(cookieSettings));
    setShowBanner(false);
  };

  const showCookieDetails = () => {
    setShowDetails(!showDetails);
  };

  if (!showBanner) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#222",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
        zIndex: 1000,
        fontFamily: "Arial, sans-serif",
        borderTop: "2px solid #4CAF50",
      }}
    >
      <p style={{ fontSize: "16px" }}>
        We use cookies to improve your experience on our website. You can
        choose which cookies to accept.
      </p>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ marginRight: "10px" }}>
          <input
            type="checkbox"
            name="functional"
            checked={cookieSettings.functional}
            onChange={handleCookieChange}
          />
          Functional Cookies
        </label>
        <br />
        <label style={{ marginRight: "10px" }}>
          <input
            type="checkbox"
            name="analytics"
            checked={cookieSettings.analytics}
            onChange={handleCookieChange}
          />
          Analytics Cookies
        </label>
        <br />
        <label style={{ marginRight: "10px" }}>
          <input
            type="checkbox"
            name="marketing"
            checked={cookieSettings.marketing}
            onChange={handleCookieChange}
          />
          Marketing Cookies
        </label>
      </div>
      <button
        onClick={acceptCookies}
        style={{
          back
