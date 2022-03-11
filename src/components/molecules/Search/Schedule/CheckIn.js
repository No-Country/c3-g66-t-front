import './checks.css';

const CheckInInput = ( {checkin_date, checkinChange} ) => {

    const handleChange = (e) => {
        checkinChange(e.target.value);
    }

    return (
        <div className='container-schedule-in'>
            <div className='container-inputs-schedule'>
                <label form='inputs-value' className='title-schedule'>Check-In
                    <input onChange={handleChange} type='date' className='inputs-value' value={checkin_date} />
                </label> 
            </div>
        </div>
  );
}

export default CheckInInput;
