import { Pool } from "pg";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

export async function handler(event) {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Only POST allowed" }),
        };
    }

    try {
        const body = JSON.parse(event.body);
        const { name, phone, sevaId } = body;

        if (!name || !phone) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Name and phone required" }),
            };
        }

        const query = `
      INSERT INTO bookings (name, phone, seva)
      VALUES ($1, $2, $3)
      RETURNING id;
    `;

        const values = [name, phone, sevaId || null];

        const result = await pool.query(query, values);

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                success: true,
                bookingId: result.rows[0].id,
            }),
        };
    } catch (error) {
        console.error("DB ERROR:", error);

        return {
            statusCode: 500,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                error: "Database error",
                message: error.message,
            }),
        };
    }
}