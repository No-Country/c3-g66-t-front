import '../Guests/guests.css'
import { AiOutlineUser } from 'react-icons/ai'

const InputGuests = ( {amountGuests, adults_numberChange} ) => {
    const limit = 7;

    //funcion para restar personas:
    const onSub = () => {
        if (amountGuests > 1){
            adults_numberChange(amountGuests-1);
        }
    };
    //función para sumar personas:
    const onAdd = () => {
        if (amountGuests < limit) { 
            adults_numberChange(amountGuests+1);
        }
    };

    return (
        <div className='container-guests'>
            <AiOutlineUser className='iconPerson' />
            <div className='container-title-guests'>
                <span className='title-guests'>Personas</span>
                <div className='container-amount-guests'>    
                    <button className='add-guests' onClick={onSub} >{'-'}</button>
                    <strong className='amount'>{amountGuests}</strong>
                    <button className='add-guests' onClick={onAdd} >{'+'}</button> 
                </div>
            </div>                
        </div>
    )
}

export default InputGuests;
