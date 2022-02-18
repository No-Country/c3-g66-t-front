import '../Guests/guests.css'
import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai'

const InputGuests = () => {

    const [amountGuests, setAmountGuests] = useState(2);
    const [totalAmountGuests, setTotalAmountGuests] = useState(0);

    const limit = 10;

    //funcion para restar personas:
    const onSub = () => {
        if (amountGuests > 1){
            setAmountGuests(amountGuests-1);
        }
    };
    //función para sumar personas:
    const onAdd = () => {
        if (amountGuests < limit) { 
            setAmountGuests(amountGuests+1);
        }
    };

    //agregar funcion para guardar la cantidad de personas al apretar el boton buscar

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
