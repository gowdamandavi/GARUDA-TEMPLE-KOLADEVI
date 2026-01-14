export async function handler(event) {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: "Method Not Allowed",
        };
    }

    try {
        const data = JSON.parse(event.body);

        console.log("Booking received:", data);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Booking saved successfully",
            }),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: "Internal Server Error",
            }),
        };
    }
}