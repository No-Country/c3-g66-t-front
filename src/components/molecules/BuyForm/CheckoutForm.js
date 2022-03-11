import {PaymentElement, useElements, Elements, useStripe} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51KalcSBGm1w1OkqgMrJr3o8GJtmwxSljglxv5sxMGibqbkdQxS1r9ege3WQmV2eEQBHNHvqKhwuaXuJSJWqympbh00tRk2bam9');

function Formulario (){
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

function App() {
    const options = {
        // passing the client secret obtained from the server
        clientSecret: 'pi_3Kc0ODBGm1w1Okqg1N8vd8Aj_secret_VZDpNRCxKu9eXJd9AfCqXxXhH',
    };

    return (
        <Elements stripe={stripePromise} options={options}>
           <Formulario />
        </Elements>
    );
};

export default App;