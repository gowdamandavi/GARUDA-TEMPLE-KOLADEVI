import React, { useState } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sevaId, setSevaId] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch("/.netlify/functions/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          sevaId,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error ${response.status}`);
      }

      setStatus("Booking submitted successfully.");
      setName("");
      setPhone("");
      setSevaId("");
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
          type="text"
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

      <button type="submit">Request Booking</button>

      {status && <p>{status}</p>}
    </form>
  );
}
