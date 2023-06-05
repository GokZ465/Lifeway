module.exports = {
  async headers() {
    return [
      {
        source: "/api/createPaymentIntent",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; img-src https://m.stripe.network https://m.stripe.com https://b.stripecdn.com data:;",
          },
        ],
      },
    ];
  },
};
