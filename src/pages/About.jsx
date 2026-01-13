import React, { useEffect, useContext } from "react";
import "./About.css";

import venugopalaImg from "../assets/images/venugopalswamygujjanahalli.png";
import koladeviMorningImg from "../assets/images/koladevi-garuda-temple-morning.png";
import garudaIconographyImg from "../assets/images/garuda-iconography.png";
import serviceIcon from "../assets/icons/service.png";
import loyaltyIcon from "../assets/icons/loyalty.png";
import moralStrengthIcon from "../assets/icons/moral-strength.png";
import communityFestivalImg from "../assets/images/community-temple-festival.png";

import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../data/translations";


/* ================= Scroll Fade-in Hook ================= */
function useFadeInOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ================= Main Component ================= */
const AboutPage = () => {
  useFadeInOnScroll();

 const { lang, toggleLanguage } = useContext(LanguageContext);
const t = translations[lang].about;



  /* ===== Dark Mode Toggle ===== */
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute(
      "data-theme",
      current === "dark" ? "light" : "dark"
    );
  };

  return (
    <main className="about-page">

      {/* ===== Controls ===== */}
      <div className="page-controls">
        <button className="theme-toggle" onClick={toggleTheme}>
          🌗 Evening Darshan
        </button>

        <button className="lang-toggle" onClick={toggleLanguage}>
          🕉️ {lang === "en" ? "ಕನ್ನಡ" : "English"}
        </button>
      </div>

      {/* ================= HERO ================= */}
      <section className="hero-section fade-in">
        <div className="hero-content">

          <div className="hero-text">
            <h1>{t.siteTitle}</h1>
            <p className="hero-subtitle">{t.subtitle}</p>

           <section className="service-sanctuary-section fade-in">
  <h2 className="service-sanctuary-title">
    A rare Vaishnava sanctuary where devotion is defined through service
  </h2>

  <div className="service-sanctuary-content">
    <p>
      Koladevi Garuda Temple represents a rare and philosophically distinctive
      Vaishnava sanctuary in which devotion is articulated primarily through the
      principle of selfless service.
    </p>

    <p>
      Within the broader Vaishnava tradition, worship is most often centered on
      Lord Vishnu or one of his incarnations, emphasizing divine sovereignty,
      grace, and salvific power. In contrast, this sacred space accords primacy
      to Garuda, not merely as the divine vehicle of Vishnu, but as an exemplary
      figure whose life embodies disciplined service, loyalty, and unwavering
      commitment to dharma.
    </p>

    <p>
      This theological orientation foregrounds ethical conduct and devotional
      responsibility as central religious ideals. Garuda is venerated here as
      a conscious and morally resolute being whose devotion is expressed through
      action rather than authority.
    </p>

    <p>
      The temple’s traditions encourage devotees to internalize this model,
      presenting service not as an auxiliary religious duty but as the very
      foundation of spiritual life.
    </p>

    <p>
      Through sustained ritual practice, festivals, and communal observances,
      the temple functions not only as a site of worship but also as a formative
      institution that transmits values of loyalty, restraint, and ethical
      action across generations.
    </p>
  </div>
</section>

          </div>

          <div className="hero-image">
            <img
              src={koladeviMorningImg}
              alt="Koladevi Garuda Temple in morning light"
              loading="eager"
            />
          </div>

        </div>
      </section>

      <div className="section-divider fade-in"></div>

      {/* ================= RISING SUN ================= */}
      <section className="rising-sun-section fade-in">
        <h2 className="rising-sun-title">
          A Sanctuary of Service-Centered Devotion
        </h2>

        <div className="sun-divider"></div>

        <p>
          Koladevi Garuda Temple represents a rare Vaishnava sanctuary in which
          devotion is expressed primarily through the ideal of selfless service.
        </p>

        <p>
          The shrine places Garuda at the heart of worship, emphasizing ethical
          discipline and conscious devotion rather than authority or power.
        </p>
      </section>

      {/* ================= QUOTE ================= */}
      <section className="quote-section fade-in">
        <blockquote>
          “The sanctum does not enthrone the ruler of the cosmos,
          but the embodiment of unwavering devotion.”
        </blockquote>
      </section>

      {/* ================= THEOLOGY ================= */}
      <section className="content-section fade-in">
        <h2>Theology of Garuda Worship</h2>

        <figure className="inline-figure">
          <img
            src={garudaIconographyImg}
            alt="Garuda iconography symbolizing disciplined devotion"
            loading="lazy"
          />
          <figcaption>
            Garuda as the embodiment of devotion, discipline, and moral clarity
          </figcaption>
        </figure>

        <p>
Koladevi Garuda Temple represents a rare Vaishnava sanctuary in which devotion is articulated primarily through the ideal of selfless service rather than ritual grandeur or divine authority. Within the broader Vaishnava tradition, worship is most often oriented toward Lord Vishnu or his incarnations, emphasizing sovereignty, grace, and cosmic order. In contrast, this sacred space places Garuda at the very heart of worship, offering a distinctive theological perspective grounded in ethical discipline and conscious devotion.

Here, Garuda is revered not merely as the divine vehicle, but as a moral exemplar whose life embodies unwavering loyalty, restraint, and purposeful service. The shrine thus redirects the devotee’s attention from power to responsibility, from dominance to humility. Devotion is understood not as passive reverence, but as an active moral commitment expressed through disciplined action and inner clarity.

The temple’s guiding philosophy affirms that spiritual fulfillment arises through consistency in service and adherence to dharma in everyday life. Ritual practices, festivals, and communal observances reinforce this vision, cultivating a collective ethos rooted in responsibility, mutual care, and ethical awareness. Over generations, this service-centered orientation has shaped the religious consciousness of the surrounding community, sustaining a lived tradition of devotion grounded in action rather than abstraction.

As eloquently captured in its guiding sentiment, “The sanctum does not enthrone the ruler of the cosmos, but the embodiment of unwavering devotion.” In affirming Garuda as the focal point of worship, Koladevi Garuda Temple offers a profound and enduring model of Vaishnava faith—one that remains deeply relevant by placing service at the core of spiritual life.
        </p>
        

      </section>

      {/* ================= VALUES ================= */}
      <section className="values-section fade-in">
        <div className="value-card">
          <img src={serviceIcon} alt="Service" className="value-icon" />
          <h3>{t.service}</h3>
          <p>{t.serviceDesc}</p>
        </div>

        <div className="value-card">
          <img src={loyaltyIcon} alt="Loyalty" className="value-icon" />
          <h3>{t.loyalty}</h3>
          <p>{t.loyaltyDesc}</p>
        </div>

        <div className="value-card">
          <img src={moralStrengthIcon} alt="Moral Strength" className="value-icon" />
          <h3>{t.moralStrength}</h3>
          <p>{t.moralStrengthDesc}</p>
        </div>
      </section>

      {/* ================= COMMUNITY ================= */}
      <section className="content-section soft-bg fade-in">
        <h2>A Living Sacred Institution</h2>

        <img
          className="section-image"
          src={communityFestivalImg}
          alt="Community gathering during temple festival"
          loading="lazy"
        />

        <p>
          The temple functions as a gathering ground where memory, identity,
          and devotion converge across generations.
        </p>
      </section>

      {/* ================= SECOND TEMPLE ================= */}
      <section className="content-section fade-in">
        <figure className="temple-figure fade-in">
  <img
    src={venugopalaImg}
    alt="Sri Venugopala Swamy Temple at Gujjanahalli"
    loading="lazy"
  />
  <figcaption>
    Sri Venugopala Swamy Temple
    <span>Gujjanahalli, Mulabagilu Taluk, Karnataka</span>
  </figcaption>
</figure>

      </section>

      {/* ================= MAP – KOLADEVI ================= */}
      <section className="content-section fade-in">
        <h2>{t.howToReach} – Koladevi Garuda Temple</h2>

        <div className="map-container">
          <iframe
            title="Koladevi Garuda Temple Location"
            src="https://www.google.com/maps?q=Koladevi+Garuda+Temple+Mulabagilu&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <section className="content-section fade-in">
  <h2>{t.howToReach }--Gujjanahalli Venugopala Temple  </h2>

  <p>{t.howToReachDesc}</p>

  <div className="map-container small-map">
    <iframe
      title="Sri Venugopala Swamy Temple, Gujjanahalli"
      src="https://www.google.com/maps?q=Sri+Venugopala+Swamy+Temple+Gujjanahalli+Mulbagal&output=embed"
      width="100%"
      height="260"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  <p className="map-link">
    <a
      href="https://www.google.com/maps?q=Sri+Venugopala+Swamy+Temple+Gujjanahalli+Mulbagal"
      target="_blank"
      rel="noopener noreferrer"
    >
      {t.openInMaps}
    </a>
  </p>
</section>
<section className="theology-narrative">
  <p>Koladevi Garuda Temple represents a rare Vaishnava sanctuary...</p>
</section>

{/* ================= CONTACT SECTION ================= */}
<section className="content-section contact-section fade-in">
  <h2>Contact Information</h2>

  <address className="contact-card">
    <p>
      <strong>Contact Person:</strong><br />
      Mattanahalli Gopal
    </p>

    <p>
      <strong>Address:</strong><br />
       Gujjanahalli,<br />
      Mudiyanur, Mulabagal Taluk,<br />
      Kolar District, Karnataka
    </p>

    <p>
      <strong>Mobile:</strong><br />
      <a href="tel:8095913703">80959 13703</a>
    </p>
  </address>
</section>


    </main>
  );
};

export default AboutPage;
