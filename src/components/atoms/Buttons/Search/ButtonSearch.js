import '../Search/search.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import { GetLocationAction } from '../../../../store/slices/search/LocationReducer';
import { GetListHotelsAction } from '../../../../store/slices/search/ListHotelsReducer';

const Button = ( {location, checkin_date, checkout_date, adults_number, date, locationChange, checkinChange, checkoutChange, adults_numberChange} ) => {

    const { data } = useSelector( store => store.SearchLocationReducer );
    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    //Buscador latitud, longitud al hacer click en buscar
    const onSearch = async (e) => {
        e.preventDefault();
        dispatch(GetLocationAction({
            location,
            checkin_date,
            checkout_date,
            adults_number,
            navigate})
        );
        //Limpiamos buscador:
        locationChange('');
        checkinChange(date);
        checkoutChange(date);
        adults_numberChange(2);
    };

    //Buscador
    useEffect( () => {
        dispatch(GetListHotelsAction({ data, page_number: 1 }));
    }, [dispatch, data] );

    return (
        <div className='container-search-button'>
            <button className='search-button' type='submit' onClick={onSearch}>Buscar</button>
        </div>
    )
}

export default Button;