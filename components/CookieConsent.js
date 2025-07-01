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
        padding: "15px",
        textAlign: "center",
        zIndex: 1000,
      }}
    >
      <p>This site uses cookies to enhance your experience.</p>
      <label>
        <input
          type="checkbox"
          name="functional"
          checked={cookieSettings.functional}
          onChange={handleCookieChange}
        />
        Functional Cookies
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="analytics"
          checked={cookieSettings.analytics}
          onChange={handleCookieChange}
        />
        Analytics Cookies
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="marketing"
          checked={cookieSettings.marketing}
          onChange={handleCookieChange}
        />
        Marketing Cookies
      </label>
      <br />
      <button onClick={acceptCookies} style={{ marginTop: "10px" }}>
        Accept
      </button>
    </div>
  );
}
