import React, { useState } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sevaId, setSevaId] = useState("");
  const [status, setStatus] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!window.Razorpay) {
      setStatus("Payment system not loaded");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: 50000, // ₹500
      currency: "INR",
      name: "Koladevi Garuda Temple",
      description: "Seva Booking",
      handler: async function (response) {
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

          if (!res.ok) throw new Error("Booking save failed");

          setStatus("Booking confirmed and payment successful.");
          setName("");
          setPhone("");
          setSevaId("");
        } catch (err) {
          setStatus("Payment done, but booking failed.");
        }
      },
      prefill: { name, contact: phone },
      theme: { color: "#7a5c2e" },
    };

    new window.Razorpay(options).open();
  };

  return (
    <form onSubmit={handlePayment}>
      <input
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <input
        placeholder="Seva ID"
        value={sevaId}
        onChange={(e) => setSevaId(e.target.value)}
      />

      <button type="submit">Pay & Confirm Booking</button>

      <p>{status}</p>
    </form>
  );
}
