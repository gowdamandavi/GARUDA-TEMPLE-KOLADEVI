import { Client } from "pg";

export async function handler(event) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const { name, phone, sevaId: seva } = JSON.parse(event.body);

        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false },
        });

        await client.connect();

        await client.query(
            "INSERT INTO bookings (name, phone, seva) VALUES ($1, $2, $3)", [name, phone, seva]
        );

        await client.end();

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: error.message,
            }),
        };
    }
}