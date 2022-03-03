import '../Search/search.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import { GetLocationAction } from '../../../../store/slices/search/LocationReducer';
import { GetListHotelsAction } from '../../../../store/slices/search/ListHotelsReducer';

const Button = ( {location, date, locationChange, checkinChange, checkoutChange, adults_numberChange, checkin_date, checkout_date, adults_number } ) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        locations,
        errorGetLocation } = useSelector( store => store.SearchLocationReducer );

    const {
        listHotels,
        errorGetHotels } = useSelector( store => store.SearchListHotelsReducer );

    const onSearch = async () => {
        dispatch(GetLocationAction({
            location,
            date,
            locationChange,
            checkinChange,
            checkoutChange,
            adults_numberChange,
            navigate})
        );

    }

    useEffect( () => {
        dispatch(GetListHotelsAction({
                locations,
                checkin_date,
                checkout_date,
                adults_number})
        );
    }, [locations] );

    return (
        <div className='container-search-button'>
            <button className='search-button' type='submit' onClick={onSearch}>Buscar</button>
        </div>
    )
}

export default Button;
