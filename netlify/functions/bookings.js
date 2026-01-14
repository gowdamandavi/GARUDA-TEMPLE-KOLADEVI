import { Client } from "pg";

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
});

export async function handler(event) {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: "Method Not Allowed",
        };
    }

    try {
        const { name, phone, sevaId } = JSON.parse(event.body);

        await client.connect();

        await client.query(
            "INSERT INTO bookings (name, phone, seva) VALUES ($1, $2, $3)", [name, phone, sevaId]
        );

        await client.end();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Booking saved" }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
}