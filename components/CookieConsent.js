import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
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
    logConsent(cookieSettings);
  };

  const logConsent = (consent) => {
    // log the consent data to an external service or local database
    console.log("User consent logged:", consent);
    // Here you can send the consent data to your backend or a service like Google Analytics
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
        Functional Cookies (necessary for site operation)
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="analytics"
          checked={cookieSettings.analytics}
          onChange={handleCookieChange}
        />
        Analytics Cookies (used to analyze site usage)
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="marketing"
          checked={cookieSettings.marketing}
          onChange={handleCookieChange}
        />
        Marketing Cookies (used for personalized ads)
      </label>
      <br />
      <button onClick={acceptCookies} style={{ marginTop: "10px" }}>
        Accept
      </button>
      <button onClick={showCookieDetails} style={{ marginTop: "10px", marginLeft: "10px" }}>
        Show Cookie Details
      </button>

      {showDetails && (
        <div
          style={{
            background: "#333",
            color: "#fff",
            marginTop: "15px",
            padding: "10px",
            textAlign: "left",
          }}
        >
          <h4>Cookie Details:</h4>
          <p>
            <strong>Functional Cookies:</strong> These cookies are necessary for the website to function properly.
          </p>
          <p>
            <strong>Analytics Cookies:</strong> These cookies help us analyze how our website is used, such as traffic data and user behavior.
          </p>
          <p>
            <strong>Marketing Cookies:</strong> These cookies track your browsing habits for personalized advertisements and marketing.
          </p>
        </div>
      )}
    </div>
  );
}
