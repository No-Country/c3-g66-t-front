import '../Search/search.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import { GetLocationAction } from '../../../../store/slices/search/LocationReducer';
import { GetListHotelsAction } from '../../../../store/slices/search/ListHotelsReducer';
import { GetHotelsFilteredAction } from '../../../../store/slices/filter/HotelsFilterReducer';

const Button = ( {location, checkin_date, checkout_date, adults_number, date, locationChange, checkinChange, checkoutChange, adults_numberChange} ) => {

    const { data } = useSelector( store => store.SearchLocationReducer );
    const { dataFilter } = useSelector( store => store.FilterReducer );

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
        dispatch(GetListHotelsAction({ data }));
    }, [data] );

    //Filtro
    useEffect( () => {
        if (dataFilter.categories){
            //Categories
            const categoriesFiltered = Object.values(dataFilter.categories).filter( category => category !== 0).toString();
            let theme_ids = '';
            (categoriesFiltered !== '') ? theme_ids = categoriesFiltered : theme_ids = null;

            //Accomodation
            const accommodationFiltered = Object.values(dataFilter.accomodation).filter( element => element !== 0).toString();
            let accommodation_ids = '';
            (accommodationFiltered !== '') ? accommodation_ids = accommodationFiltered : accommodation_ids = null;

            //Amenities
            const amenitiesFiltered = Object.values(dataFilter.amenities).filter( amenity => amenity !== 0).toString();
            let amenity_ids = '';
            (amenitiesFiltered !== '') ? amenity_ids = amenitiesFiltered : amenity_ids = null;

            //Prices
            const priceFiltered = Object.values(dataFilter.price).filter( price => price !== 0).toString();
            const priceMaxFiltered = dataFilter.maxPrice.toString();
            const priceMinFiltered = dataFilter.minPrice.toString();
            let price_max = '';
            let price_min = '';
            if (priceFiltered === '' && priceMaxFiltered !== '' && priceMinFiltered !== ''){
                price_max = priceMaxFiltered;
                price_min = priceMinFiltered;
            }else if (priceFiltered === '' && priceMaxFiltered === '' && priceMinFiltered !== ''){
                price_max = null;
                price_min = priceMinFiltered;
            }else if (priceFiltered === '' && priceMaxFiltered !== '' && priceMinFiltered === ''){
                price_max = priceMaxFiltered;
                price_min = null;
            }else if (priceFiltered !== ''){
                price_min = '1';
                price_max = priceFiltered;
            }else if (priceFiltered === ''){
                price_min = null;
                price_max = null;
            }

            //Stars
            const starsFiltered = Object.values(dataFilter.stars).filter( star => star !== 0).toString();
            let star_rating_ids = '';
            (starsFiltered !== '') ? star_rating_ids = starsFiltered : star_rating_ids = null;

            //Points
            const pointsFiltered = dataFilter.minPoint.toString();
            let guest_rating_min = '';
            (pointsFiltered !== '') ? guest_rating_min = pointsFiltered : guest_rating_min = null;
            
            dispatch(GetHotelsFilteredAction({
                data,
                amenity_ids,
                theme_ids,
                accommodation_ids,
                guest_rating_min,
                star_rating_ids,
                price_min,
                price_max})
            );
            if (dataFilter.hotelsFilter === []){
                alert('No hay resultados de lo buscado');
            }
        }
    }, [dataFilter] );

    return (
        <div className='container-search-button'>
            <button className='search-button' type='submit' onClick={onSearch}>Buscar</button>
        </div>
    )
}

export default Button;