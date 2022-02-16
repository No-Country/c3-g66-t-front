import { useState } from 'react';
import './checks.css';

const CheckInInput = () => {
    
    //falta agregar funcionalidad para guardar las fechas que ingresa el usuario

    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (e) => {
        setStartDate(e.target.value);
        console.log(startDate);
    }

    return (
        <div className='container-schedule-in'>
            <div className='container-inputs-schedule'>
                <label form='inputs-value' className='title-schedule'>Check-In
                    <input onChange={handleChange} type='date' className='inputs-value' value={startDate} />
                </label> 
            </div>
        </div>
  );
}

export default CheckInInput;
