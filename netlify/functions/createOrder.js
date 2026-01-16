import Razorpay from "razorpay";

export async function handler(event) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const { amount } = JSON.parse(event.body);

        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const order = await razorpay.orders.create({
            amount: amount * 100, // INR → paise
            currency: "INR",
            receipt: `seva_${Date.now()}`,
        });

        return {
            statusCode: 200,
            body: JSON.stringify(order),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err.message }),
        };
    }
}