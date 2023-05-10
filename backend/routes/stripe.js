const express = require('express');
const Stripe = require('stripe');
require('dotenv').config();
const stripe = Stripe(process.env.STRIPE_KEY);
// const axios = require('axios');
const router = express.Router();
const apiKey =
  'sk_test_51JlqzGKKulry6PMkx4i0hGGUEhGrP99wllOFEnH1tQe48iOqdAqtTtEVE7T4dllV6CSOrk1LT9JVkaxAVAmPSKJf00Ozx83kUj';

router.post('/create-checkout-session', async (req, res) => {
  const { email, price, url } = req.body;

  const customer = await stripe.customers.create({
    email: email,
  });

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: price,
        quantity: 1,
      },
    ],

    mode: 'subscription',
    customer: customer.id,
    payment_method_types: ['card'],
    success_url: `${url}/create-account?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${url}/cancel?session_id={CHECKOUT_SESSION_ID}`,
  });

  res.send({
    url: session.url,
    session_id: session.id,
    api_key: apiKey,
  });
});


module.exports = router;
