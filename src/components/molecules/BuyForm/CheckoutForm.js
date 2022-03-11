import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { registerPaidReservation } from "../../../services/hotel";

function CheckoutForm({ hotel_id, checkin_date, checkout_date, payment_id }) {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState(false);

  const handleSubmit = async event => {
    try {
      event.preventDefault();
      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "https://example.com/order/123/complete",
        },
        redirect: "if_required",
      });
      console.log(result);
      const res = await registerPaidReservation({
        hotel_id,
        checkin_date,
        checkout_date,
        payment_id: result.paymentIntent.id,
      });
      elements.getElement(PaymentElement).destroy();
      setPaymentStatus(true);
      return;
    } catch (err) {
      console.log(err);
      alert("Algo salio mal, intenta mas tarde");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {paymentStatus ? (
        <div className="button min-w-full mt-2 bg-green-500">Pago Exitoso</div>
      ) : (
        <button disabled={!stripe} className="button min-w-full mt-2">
          Reservar
        </button>
      )}
    </form>
  );
}

export default CheckoutForm;
