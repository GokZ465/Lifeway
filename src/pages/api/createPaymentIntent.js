import stripeConfig from "../../config";
import Stripe from "stripe";

const stripe = new Stripe(stripeConfig.secretKey);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { amount } = req.body;

      // Create a payment intent with the given amount
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd",
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
