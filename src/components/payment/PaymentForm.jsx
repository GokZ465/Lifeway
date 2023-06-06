import React, { useState } from "react";
import { CardElement, useStripe } from "@stripe/react-stripe-js";
import stripeConfig from "../../services/stripeConfig";

const PaymentForm = () => {
  const [amount, setAmount] = useState(0);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Create a payment intent on the server
      const response = await fetch("/api/createPaymentIntent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const { clientSecret } = await response.json();

      // Set the client secret received from the server
      setClientSecret(clientSecret);

      // Call Stripe's confirmCardPayment method to handle the payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: "John Doe",
          },
        },
      });

      if (result.error) {
        // Handle error
        console.error(result.error.message);
      } else {
        // Payment successful
        console.log("Payment succeeded:", result.paymentIntent);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "60vw",
          height: "40vh",
          margin: "0 auto",
        }}
        onSubmit={handleSubmit}
      >
        <input
          style={{
            padding: "10px",
            marginBottom: "10px",
          }}
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <CardElement
          options={stripeConfig.cardOptions}
          style={{
            base: {
              fontSize: "16px",
              fontFamily: '"Open Sans", sans-serif',
              "::placeholder": {
                color: "#ccc",
              },
            },
          }}
        />
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
          type="submit"
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
