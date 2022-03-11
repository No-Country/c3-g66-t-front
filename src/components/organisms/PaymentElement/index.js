import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "../../molecules/BuyForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51KalcSBGm1w1OkqgMrJr3o8GJtmwxSljglxv5sxMGibqbkdQxS1r9ege3WQmV2eEQBHNHvqKhwuaXuJSJWqympbh00tRk2bam9"
);

const PaymentElement = () => {
  const options = {
    clientSecret:
      "pi_3Kc0ODBGm1w1Okqg1N8vd8Aj_secret_VZDpNRCxKu9eXJd9AfCqXxXhH",
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentElement;
