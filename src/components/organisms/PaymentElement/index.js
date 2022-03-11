import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { paymentFormDataService } from "../../../services/hotel";
import Loader from "../../atoms/Loader";

import CheckoutForm from "../../molecules/BuyForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51KalcSBGm1w1OkqgMrJr3o8GJtmwxSljglxv5sxMGibqbkdQxS1r9ege3WQmV2eEQBHNHvqKhwuaXuJSJWqympbh00tRk2bam9"
);
const PaymentElement = ({
  hotel_id,
  checkin_date,
  checkout_date,
  amount,
  currency,
  logged,
}) => {
  const [loadingStripe, setLoadingStripe] = useState(false);
  const [dataForm, setDataForm] = useState({
    ready: false,
    clientSecret: undefined,
    payment_id: undefined,
  });
  //carga la data necesaria del servidor para renderizar el form
  const loadPaymentForm = async evt => {
    try {
      evt.preventDefault();
      if (!logged) {
        alert("Usuario no autenticado");
        return;
      }
      setLoadingStripe(true);
      const checkin = new Date(checkin_date).getTime();
      const checkout = new Date(checkout_date).getTime();
      const totalAmount =
        amount * Math.ceil((checkout - checkin) / (1000 * 3600 * 24));

      const res = await paymentFormDataService({
        hotel_id,
        checkin_date,
        checkout_date,
        amount: totalAmount,
        currency: "ARS",
      });
      setDataForm({
        ready: true,
        clientSecret: res.client_secret,
        payment_id: res.id,
      });
      setLoadingStripe(false);
    } catch (err) {
      alert("Algo salio mal, intenta mas tarde");
      setLoadingStripe(false);
    }
  };

  const options = {
    clientSecret: dataForm.clientSecret,
  };
  return dataForm.ready ? (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm
        hotel_id={hotel_id}
        checkin_date={checkin_date}
        checkout_date={checkout_date}
      />
    </Elements>
  ) : (
    <button
      disabled={loadingStripe}
      className="button min-w-full mt-2"
      onClick={loadPaymentForm}
    >
      {loadingStripe ? "Cargando..." : "Reservar"}
    </button>
  );
};

export default PaymentElement;
