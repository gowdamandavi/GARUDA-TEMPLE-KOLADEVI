import React, { useEffect, useState } from "react";

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/.netlify/functions/bookings-list")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch bookings");
        }
        return res.json();
      })
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <main className="page admin-page">
      <h1>Admin – Seva Bookings</h1>

      {loading && <p>Loading bookings…</p>}

      {error && <p className="error">Error: {error}</p>}

      {!loading && bookings.length === 0 && (
        <p>No bookings found.</p>
      )}

      {!loading && bookings.length > 0 && (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Seva</th>
              <th>Booked On</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.name}</td>
                <td>{b.phone}</td>
                <td>{b.seva}</td>
                <td>{new Date(b.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
