import React from "react";
import kempeGowdaImg from "../assets/images/kempe-gowda.jpg";
import "./Contact.css";

import BookingForm from "../components/BookingForm";

export default function Contact() {
  return (
    <main className="page contact-page" aria-labelledby="contact-heading">
      <h1 id="contact-heading">Contact & Booking</h1>

      {/* ================= Memorial Plaque ================= */}
      <section className="memorial-section" aria-labelledby="memorial-heading">
        <div className="memorial-frame">
          <h2 id="memorial-heading" className="memorial-title">
            In Sacred Remembrance
          </h2>

          <div className="memorial-content">
            <figure className="memorial-image">
              <img
                src={kempeGowdaImg}
                alt="Sri Kempe Gowda"
                className="memorial-photo"
              />
              <figcaption className="memorial-caption">
                Sri Kempe Gowda
              </figcaption>
            </figure>

            <div className="memorial-text">
              <p className="memorial-name">
                <strong>Sri Kempe Gowda</strong>
              </p>

              <p className="memorial-description">
                Former TDB Member, Gujjanahalli, Mulabagilu.
                <br />
                Grandson of Sri Nanje Gowda, who constructed the historic{" "}
                <em>Sri Venugopala Swamy Temple</em>.
              </p>

              <p className="memorial-dedication">
                This website is humbly dedicated in his loving memory, in
                recognition of his lifelong service, devotion, and contribution
                to temple traditions and community life.
              </p>

              <p className="memorial-author">
                — Dedicated by <br />
                <strong>Dr. Srinivasa Gowda G K</strong>
                <br />
                BE, M.Tech (Aerospace), M.Tech (CSE), PhD
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Booking Section ================= */}
      <section className="contact-grid">
        <div className="contact-form">
          <h2>Book a Seva</h2>

          {/* Booking + Payment handled inside component */}
          <BookingForm />
        </div>

        {/* ================= Map ================= */}
        <aside className="map-aside" aria-label="temple location">
          <h2>How to Reach</h2>
          <p>
            From Kolar or Mulabagilu, proceed toward Gujjanahalli and then to
            Koladevi. The map below provides directions.
          </p>

          <div className="map-embed" style={{ aspectRatio: "16 / 9" }}>
            <iframe
              title="Koladevi Garuda Temple map"
              src="https://www.google.com/maps?q=Koladevi+Garuda+Temple&output=embed"
              loading="lazy"
              style={{ border: 0 }}
            />
          </div>

          <p className="nearby">
            Nearby: Gujjanahalli, Sri Venugopala Swamy Temple
          </p>
        </aside>
      </section>
    </main>
  );
}
