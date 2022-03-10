import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GetListHotelsAction } from '../../../../store/slices/search/ListHotelsReducer';
import { GetHotelsFilteredAction } from '../../../../store/slices/filter/HotelsFilterReducer';

const HotelsPages = () => {
    
    const dispatch = useDispatch();
    const { data } = useSelector( store => store.SearchLocationReducer );
    const { dataFilter } = useSelector( store => store.FilterReducer );
    const [page_number, setPage_number] = useState(1);
    const [pageFiltered, setPageFiltered] = useState(false);
    const limit = 5;

    const onSub = () => {
        if (page_number > 1){
            setPage_number(page_number-1);
        }
    };
    const onAdd = () => {
        if (page_number < limit) { 
            setPage_number(page_number+1);
        }
    };

    useEffect(() => {
        setPage_number(1);
        setPageFiltered(false);
    }, [data]);

    useEffect(() => {
        if (dataFilter.categories) {
            setPageFiltered(true);
            setPage_number(1);
        }
    }, [dataFilter]);

    //trae hoteles de la página que se indique
    useEffect( () => {
        if (!pageFiltered && !dataFilter.categories){
           dispatch(GetListHotelsAction({ data, page_number })); 
        }
    }, [page_number] );

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
                price_max,
                page_number})
            );
            if (dataFilter.hotelsFilter === []){
                alert('No hay resultados de lo buscado');
            }
        }
    }, [dataFilter, page_number] );

    return (
        <div className='h-10 w-full flex flex-row bg-gray-100 justify-center items-start'>
            <div className='flex flex-row justify-center items-center gap-3'>
                <button className='mb-0.5 font-medium hover:text-gray-600 ease-in-out duration-500' onClick={onSub} >{'<'}</button>
                <span className='text-sm'>Página {page_number}</span>
                <button className='mb-0.5 font-medium hover:text-gray-600 ease-in-out duration-500' onClick={onAdd} >{'>'}</button> 
            </div>
        </div>
    )
}

export default HotelsPages