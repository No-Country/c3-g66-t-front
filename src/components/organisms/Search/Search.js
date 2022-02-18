

import './search.css';
import ButtonSearch from '../../atoms/Buttons/Search/ButtonSearch';
import InputDestiny from '../../molecules/Search/Destiny/InputDestiny';
import InputGuests from '../../molecules/Search/Guests/InputGuests';
import CheckInInput from '../../molecules/Search/Schedule/CheckIn';
import CheckOutInput from '../../molecules/Search/Schedule/CheckOut';

const Search = () => {

    return (
        <div className='container-search'>
            <h5 className='title-search'>Reserva tu Hotel</h5>
            <InputDestiny/>
            <CheckInInput/>
            <CheckOutInput/>
            <InputGuests/>
            <ButtonSearch/> 
        </div> 
    )
}

export default Search;

