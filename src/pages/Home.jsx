import React from "react";
import garudaImg from "../assets/images/garuda-home.png";
import "./Home.css";

export default function Home() {
  return (
    <main className="page home-page" aria-labelledby="home-heading">
      <header className="hero">
        <h1 id="home-heading">Koladevi — Garuda Temple</h1>

        <p className="lede">
          A small temple with a unique focus — Garuda worship as the central
          devotional form. Quiet atmosphere, deep tradition, welcoming to
          visitors and pilgrims.
        </p>

        <figure className="hero-figure">
          <img
            src={garudaImg}
            alt="Garuda, the divine mount of Lord Vishnu"
            className="hero-garuda"
          />
          <figcaption className="hero-caption">
            Garuda — the unique presiding deity of Koladevi
          </figcaption>
        </figure>
      </header>

      <section className="intro">
        <h2>Welcome</h2>
        <p>
          The Koladevi temple preserves a localized Vaishnava tradition.
          Visitors come for darshan, seva, and for the peaceful setting that
          supports reflection and devotional practice.
        </p>

        <ul className="quick-links" aria-label="quick links">
          <li><a href="/about">About the temple</a></li>
          <li><a href="/unique-deity">Unique Deity</a></li>
          <li><a href="/visit">Visit & Timings</a></li>
        </ul>
      </section>

      <section className="highlights">
        <h2>Highlights</h2>
        <ol>
          <li>Garuda as principal deity — a distinct feature.</li>
          <li>Close to Gujjanahalli and Sri Venugopala Swamy Temple.</li>
          <li>Quiet rural setting for meditation and seasonal festivals.</li>
        </ol>
      </section>
    </main>
  );
}
