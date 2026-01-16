import React, { useState } from "react";
export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sevaId, setSevaId] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!window.Razorpay) {
      setStatus("Payment gateway not loaded. Please refresh the page.");
      return;
    }

    if (!name || !phone) {
      setStatus("Name and phone number are required.");
      return;
    }

    setLoading(true);
    setStatus("Opening payment gateway…");

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID, // MUST exist in .env
      amount: 50000, // ₹500 (in paise)
      currency: "INR",
      name: "Koladevi Garuda Temple",
      description: "Seva Booking",

      handler: async (response) => {
        try {
          const res = await fetch("/.netlify/functions/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              phone,
              sevaId,
              paymentId: response.razorpay_payment_id,
            }),
          });

          if (!res.ok) {
            throw new Error("Failed to save booking");
          }

          setStatus("Booking confirmed. Payment successful.");
          setName("");
          setPhone("");
          setSevaId("");
        } catch (error) {
          setStatus("Payment successful, but booking storage failed.");
        } finally {
          setLoading(false);
        }
      },

      prefill: {
        name: name,
        contact: phone,
      },

      theme: {
        color: "#7a5c2e",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <form onSubmit={handlePayment} className="booking-form">
      <label>
        Full Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Phone
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>

      <label>
        Seva ID
        <input
          type="text"
          value={sevaId}
          onChange={(e) => setSevaId(e.target.value)}
        />
      </label>

      <button type="submit" disabled={loading}>
        {loading ? "Processing…" : "Pay & Confirm Booking"}
      </button>

      {status && <p className="status-message">{status}</p>}
    </form>
  );
}
