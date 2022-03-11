import './checks.css';

const CheckOutInput = ( {checkout_date, checkoutChange} ) => {

    const handleChange = (e) => {
        checkoutChange(e.target.value);
    };

    return (
        <div className='container-schedule-out' >
            <div className='container-inputs-schedule'>
                <label form='inputs-value' className='title-schedule'>Check-Out
                    <input onChange={handleChange} type='date' className='inputs-value' value={checkout_date}/>
                </label> 
            </div>
        </div>
  );
}

export default CheckOutInput;