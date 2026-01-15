import React, { useEffect, useContext } from "react";
import "./About.css";

import venugopalaImg from "../assets/images/venugopalswamygujjanahalli.png";
import koladeviMorningImg from "../assets/images/koladevi-garuda-temple-morning.png";
import garudaIconographyImg from "../assets/images/garuda-iconography.png";
import communityFestivalImg from "../assets/images/community-temple-festival.png";

import serviceIcon from "../assets/icons/service.png";
import loyaltyIcon from "../assets/icons/loyalty.png";
import moralStrengthIcon from "../assets/icons/moral-strength.png";

import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../data/translations";

/* ================= Fade-in on Scroll ================= */
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

/* ================= About Page ================= */
const AboutPage = () => {
  useFadeInOnScroll();

  const { lang, toggleLanguage } = useContext(LanguageContext);
  const t = translations[lang].about;

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute(
      "data-theme",
      current === "dark" ? "light" : "dark"
    );
  };

  return (
    <main className="about-page">

      {/* ===== Page Controls ===== */}
      <div className="page-controls">
        <button className="theme-toggle" onClick={toggleTheme}>
          🌗 Evening Darshan
        </button>

        <button className="lang-toggle" onClick={toggleLanguage}>
          🕉️ {lang === "en" ? "ಕನ್ನಡ" : "English"}
        </button>
      </div>

      {/* ===== Hero Section ===== */}
      <section className="hero-section fade-in">
        <div className="hero-content">

          <div className="hero-text">
            <h1>{t.siteTitle}</h1>
            <p className="hero-subtitle">{t.subtitle}</p>

            <section className="service-sanctuary-section fade-in">
              <h2 className="service-sanctuary-title">
                A rare Vaishnava sanctuary where devotion is defined through service
              </h2>

              <p>
                Koladevi Garuda Temple represents a philosophically distinctive
                Vaishnava sanctuary in which devotion is articulated through
                disciplined, selfless service.
              </p>

              <p>
                Unlike conventional Vaishnava shrines centered on divine authority,
                this temple accords primacy to Garuda as a moral exemplar whose life
                embodies loyalty, restraint, and conscious devotion.
              </p>

              <p>
                Devotion here is understood as ethical responsibility rather than
                symbolic reverence, encouraging devotees to embody dharma through
                daily conduct.
              </p>

              <p>
                Through ritual, festivals, and communal observances, the temple
                functions as a living institution transmitting values across
                generations.
              </p>
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

      {/* ===== Theology ===== */}
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
          The theological orientation of Koladevi Garuda Temple emphasizes
          service-centered devotion over ritual grandeur or cosmic authority.
          Garuda is venerated not merely as the divine vehicle, but as a conscious
          moral agent whose devotion is expressed through action.
        </p>

        <blockquote className="quote-section">
          “The sanctum does not enthrone the ruler of the cosmos,
          but the embodiment of unwavering devotion.”
        </blockquote>
      </section>

      {/* ===== Values ===== */}
      <section className="values-section fade-in">
        <div className="value-card">
          <img src={serviceIcon} alt="Service" />
          <h3>{t.service}</h3>
          <p>{t.serviceDesc}</p>
        </div>

        <div className="value-card">
          <img src={loyaltyIcon} alt="Loyalty" />
          <h3>{t.loyalty}</h3>
          <p>{t.loyaltyDesc}</p>
        </div>

        <div className="value-card">
          <img src={moralStrengthIcon} alt="Moral Strength" />
          <h3>{t.moralStrength}</h3>
          <p>{t.moralStrengthDesc}</p>
        </div>
      </section>

      {/* ===== Community ===== */}
      <section className="content-section soft-bg fade-in">
        <h2>A Living Sacred Institution</h2>

        <img
          src={communityFestivalImg}
          alt="Community gathering during temple festival"
          className="section-image"
          loading="lazy"
        />

        <p>
          The temple serves as a communal space where devotion, memory,
          and ethical identity converge across generations.
        </p>
      </section>

      {/* ===== Associated Temple ===== */}
      <section className="content-section fade-in">
        <figure className="temple-figure">
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

      {/* ===== Maps ===== */}
      <section className="content-section fade-in">
        <h2>{t.howToReach} – Koladevi Garuda Temple</h2>

        <div className="map-container">
          <iframe
            title="Koladevi Garuda Temple Location"
            src="https://www.google.com/maps?q=Koladevi+Garuda+Temple+Mulabagilu&output=embed"
            loading="lazy"
          />
        </div>
      </section>

      <section className="content-section fade-in">
        <h2>{t.howToReach} – Gujjanahalli Venugopala Temple</h2>

        <div className="map-container small-map">
          <iframe
            title="Sri Venugopala Swamy Temple, Gujjanahalli"
            src="https://www.google.com/maps?q=Sri+Venugopala+Swamy+Temple+Gujjanahalli+Mulbagal&output=embed"
            loading="lazy"
          />
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section className="content-section contact-section fade-in">
        <h2>Contact Information</h2>

        <address className="contact-card">
          <p><strong>Contact Person:</strong><br />Mattanahalli Gopal</p>
          <p><strong>Address:</strong><br />Gujjanahalli, Mulabagal Taluk, Karnataka</p>
          <p><strong>Mobile:</strong><br /><a href="tel:8095913703">80959 13703</a></p>
        </address>
      </section>

    </main>
  );
};

export default AboutPage;
