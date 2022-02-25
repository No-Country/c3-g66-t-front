import '../Search/search.css';
import { searchLocation } from '../../../../config/axios/axios';

const Button = ( {location, date, locationChange, checkinChange, checkoutChange, amountGuestsChange } ) => {

    const onSearch = async () => {
        try {
            const response = await searchLocation.get(`/location/${location}`);
            console.log('Longitud: ', response.data.data[0].longitude);
            console.log('Latitud: ', response.data.data[0].latitude);
            //Limpiamos buscador al hacer click en buscar:
            locationChange('');
            checkinChange(date);
            checkoutChange(date);
            amountGuestsChange(2);
        } catch (error) {
            console.log('Error fetching data: ', error)
        };
    };

    return (
        <div className='container-search-button'>
            <button className='search-button' type='submit' onClick={onSearch}>Buscar</button>
        </div>
    )
}

export default Button;
