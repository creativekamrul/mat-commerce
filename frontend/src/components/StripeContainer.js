import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Stripe from "./Stripe";

const PUBLIC_KEY = "pk_test_8FsG09cwBxQspvbEaEThg8Dn00Doom2joC";
const NewKey = "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"
const stripePromise = loadStripe(PUBLIC_KEY);

const StripeContainer = ({children}) => {
  return (
    <Elements stripe={stripePromise}>
      {children}
    </Elements>
  );
};

export default StripeContainer;