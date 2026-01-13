import { useState } from "react";

const Footer = () => {
  const [lang, setLang] = useState("en");

  return (
    <footer className="footer">
      <button
        onClick={() => setLang(lang === "en" ? "kn" : "en")}
      >
        🕉️ {lang === "en" ? "ಕನ್ನಡ" : "English"}
      </button>

      <p>
        {lang === "en"
          ? "Koladevi Garuda Temple"
          : "ಕೊಲದೇವಿ ಗರುಡ ದೇವಸ್ಥಾನ"}
      </p>
    </footer>
  );
};

export default Footer;
