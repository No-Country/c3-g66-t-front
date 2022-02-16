import './checks.css';
import { useState } from 'react';

const CheckOutInput = () => {

    //falta agregar funcionalidad para guardar las fechas que ingresa el usuario

    const [endDate, setEndDate] = useState(new Date());

    const handleChange = (e) => {
        setEndDate(e.target.value);
        console.log(endDate);
    };

    return (
        <div className='container-schedule-out' >
            <div className='container-inputs-schedule'>
                <label form='inputs-value' className='title-schedule'>Check-Out
                    <input onChange={handleChange} type='date' className='inputs-value' value={endDate}/>
                </label> 
            </div>
        </div>
  );
}

export default CheckOutInput;