import {PaymentElement, useElements, useStripe} from '@stripe/react-stripe-js';



function CheckoutForm (){
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
        return_url: "https://example.com/order/123/complete",
        },
    });  
    console.log(result);
  };

  return(<form onSubmit={handleSubmit}>
          <PaymentElement />
          <button disabled={!stripe} className='button min-w-full mt-2'>Reservar</button>
      </form>  
  );
}

export default CheckoutForm;