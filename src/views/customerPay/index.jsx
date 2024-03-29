import { loadStripe } from "@stripe/stripe-js";
import stripeConfig from "@/services/stripeConfig";
//import PaymentForm from "@/components/payment/paymentForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(stripeConfig.publicKey);

import React from "react";

export default function customerPay() {
  return (
    <main className="content">
      <div
        className="home"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "10rem",
        }}
      >
        <Elements stripe={stripePromise}>{/* //  <PaymentForm /> */}</Elements>
      </div>
    </main>
  );
}
