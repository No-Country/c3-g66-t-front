import '../Search/search.css';
import { searchLocation } from '../../../../config/axios/axios';
import { getList } from '../../../../config/axios/axios';

const Button = ( {location, date, locationChange, checkinChange, checkoutChange, adults_numberChange, checkin_date, checkout_date, adults_number } ) => {

    const onSearch = async () => {
        try {
            if(location !== ''){
                const response = await searchLocation.get(`/location/${location}`);
                const longitude = response.data.data[0].longitude;
                const latitude = response.data.data[0].latitude;
                getHotels(latitude, longitude);
                //Limpiamos buscador al hacer click en buscar:
                locationChange('');
                checkinChange(date);
                checkoutChange(date);
                adults_numberChange(2);
            }else if (location === ''){
                alert('Ingrese un destino');
            }
            
        } catch (error) {
            console.log('Error fetching data: ', error)
        };
    };

    const getHotels = async (latitude, longitude) => {
        try {
            if (latitude !== 0 && longitude !== 0){
               const response = await getList.get(`/hotel/list?`, {
                params: {
                    latitude,
                    longitude,
                    checkin_date,
                    checkout_date,
                    adults_number,  
                }
               });
               console.log(response);
            };
        } catch (error) {
            console.log('Error fetching', error)
        }
    };

    return (
        <div className='container-search-button'>
            <button className='search-button' type='submit' onClick={onSearch}>Buscar</button>
        </div>
    )
}

export default Button;
