import React, { useState } from "react";
import kempeGowdaImg from "../assets/images/kempe-gowda.jpg";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    sevaId: "",
  });

  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "pending" });

    try {
      const res = await fetch("/.netlify/functions/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      await res.json();

      setStatus({ type: "success" });
      setForm({ name: "", phone: "", sevaId: "" });
    } catch (err) {
      setStatus({
        type: "error",
        message: err.message || "Unable to submit booking request.",
      });
    }
  }

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
                Former TDB Member, Gujjanahalli, Mulabagilu. <br />
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

      {/* ================= Booking Form ================= */}
      <section className="contact-grid">
        <div className="contact-form">
          <h2>Book a Seva</h2>

          <form onSubmit={handleSubmit} className="booking-form">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              required
            />

            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              required
            />

            <label htmlFor="sevaId">Seva (ID)</label>
            <input
              id="sevaId"
              value={form.sevaId}
              onChange={(e) =>
                setForm({ ...form, sevaId: e.target.value })
              }
            />

            <div className="form-actions">
              <button type="submit">Request Booking</button>
            </div>
          </form>

          {status?.type === "pending" && (
            <div className="status">Sending…</div>
          )}
          {status?.type === "success" && (
            <div className="success">
              Booking request submitted successfully.
            </div>
          )}
          {status?.type === "error" && (
            <div className="error">Error: {status.message}</div>
          )}
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

      const res = await fetch("/.netlify/functions/bookings", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(form),
});

    </main>
  );
}
