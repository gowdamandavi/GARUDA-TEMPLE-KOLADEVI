import { Client } from "pg";

export async function handler(event) {
    // Allow only POST requests
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: "Method Not Allowed" }),
        };
    }

    let client;

    try {
        // Parse request body
        const { name, phone, sevaId } = JSON.parse(event.body);

        if (!name || !phone) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Name and phone are required" }),
            };
        }

        // Create Neon PostgreSQL client
        client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false, // REQUIRED for Neon on Netlify
            },
        });

        // Connect to database
        await client.connect();

        // Insert booking
        await client.query(
            `
      INSERT INTO bookings (name, phone, seva)
      VALUES ($1, $2, $3)
      `, [name, phone, sevaId || null]
        );

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ success: true, message: "Booking stored" }),
        };
    } catch (error) {
        console.error("Booking error:", error);

        return {
            statusCode: 500,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                error: "Database error",
                details: error.message,
            }),
        };
    } finally {
        // Ensure connection is always closed
        if (client) {
            await client.end();
        }
    }
}