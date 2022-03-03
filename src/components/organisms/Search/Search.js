import './search.css';
import { useState } from 'react';
import ButtonSearch from '../../atoms/Buttons/Search/ButtonSearch';
import InputDestiny from '../../molecules/Search/Destiny/InputDestiny';
import InputGuests from '../../molecules/Search/Guests/InputGuests';
import CheckInInput from '../../molecules/Search/Schedule/CheckIn';
import CheckOutInput from '../../molecules/Search/Schedule/CheckOut';

const Search = () => {

    const date = new Date().toLocaleDateString('en-GB').split('/').reverse().join('-'); //fecha actual
    const [location, setLocation] = useState('');
    const [checkin_date, setCheckin_date] = useState(date);
    const [checkout_date, setCheckout_date] = useState(date);
    const [adults_number, setAdults_number] = useState(2);

    const handleChangeLocation = (newLocation) => {
        setLocation(newLocation);
    };
    const handleChangeCheckinDate = (newDate) => {
        setCheckin_date(newDate);
    };
    const handleChangeCheckoutDate = (newDate) => {
        setCheckout_date(newDate);
    };
    const handleChangeAdults_number = (newGuests) => {
        setAdults_number(newGuests);
    };

    return (
        <div className='container-search'>
            <h5 className='title-search'>Reserva tu Hotel</h5>
            <InputDestiny location={location} locationChange={handleChangeLocation} />
            <CheckInInput checkin_date={checkin_date} checkinChange={handleChangeCheckinDate} />
            <CheckOutInput checkout_date={checkout_date} checkoutChange={handleChangeCheckoutDate} />
            <InputGuests amountGuests={adults_number} adults_numberChange={handleChangeAdults_number} />
            <ButtonSearch
            location={location} date={date}
            locationChange={handleChangeLocation}
            checkinChange={handleChangeCheckinDate}
            checkoutChange={handleChangeCheckoutDate}
            adults_numberChange={handleChangeAdults_number}
            checkin_date={checkin_date}
            checkout_date={checkout_date}
            adults_number={adults_number}
            /> 
        </div> 
    )
}

export default Search;

