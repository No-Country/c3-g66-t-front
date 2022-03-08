import '../Search/search.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import { GetLocationAction } from '../../../../store/slices/search/LocationReducer';
import { GetListHotelsAction } from '../../../../store/slices/search/ListHotelsReducer';
import { FilterAction } from '../../../../store/slices/filter/FilterReducer';

const Button = ( {location, date, locationChange, checkinChange, checkoutChange, adults_numberChange, checkin_date, checkout_date, adults_number } ) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        locations,
        errorGetLocation } = useSelector( store => store.SearchLocationReducer );
    const {
        hotelsList,
        errorGetHotels } = useSelector( store => store.SearchHotelListReducer );
    const {
        dataFilter,
        errorGetDataFilter } = useSelector( store => store.FilterReducer );

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
            adults_number,
            dataFilter:null,
            amenity_ids: null,
            theme_ids: null,
            accommodation_ids: null,
            guest_rating_min: null,
            star_rating_ids: null,
            price_min: null,
            price_max: null
        })
        );
    }, [locations] );

    useEffect(() => {
        dispatch(GetListHotelsAction({
            locations,
            checkin_date,
            checkout_date,
            adults_number,
            dataFilter})
    );
    }, [dataFilter]);

    return (
        <div className='container-search-button'>
            <button className='search-button' type='submit' onClick={onSearch}>Buscar</button>
        </div>
    )
}

export default Button;
