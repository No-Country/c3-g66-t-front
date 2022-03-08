import { getList } from '../../../config/axios/axios';

const defaultHotelList = {
    hotelsList: [], 
    errorGetHotels: false
};

const SEARCHLISTHOTELS = 'SEARCHLISTHOTELS';
const ERROR = 'ERROR';

export default function SearchHotelListReducer(state = defaultHotelList, { type, payload }) {
    switch(type){
        case SEARCHLISTHOTELS: return {...state, hotelsList: payload, errorGetHotels: false };
        case ERROR: return {...state, errorGetHotels: true};
        default: return state;
    }
}

export const GetListHotelsAction = ({ 
    locations,
    checkin_date,
    checkout_date,
    adults_number,
    dataFilter,
    amenity_ids,
    theme_ids,
    accommodation_ids,
    guest_rating_min,
    star_rating_ids,
    price_min,
    price_max   }) => async (dispatch) => {

    try {
        if (locations.latitude !== 0 && locations.longitude !== 0){
            if (dataFilter > 0){
                //Categories
                const categoriesFilterTrue = dataFilter.categories[0].filter( categories => categories === true);
                const newCategoriesArray = [];
                if (categoriesFilterTrue.includes("beach")){
                    newCategoriesArray.push(6)
                };
                if (categoriesFilterTrue.includes("historic")){
                    newCategoriesArray.push(2)
                };
                if (categoriesFilterTrue.includes("business")){
                    newCategoriesArray.push(14)
                };
                if (categoriesFilterTrue.includes("familyFriendly")){
                    newCategoriesArray.push(25);
                };
                if (categoriesFilterTrue.includes("romantic")){
                    newCategoriesArray.push(1)
                };
                if (categoriesFilterTrue.includes("spaHotel")){
                    newCategoriesArray.push(27)
                };
                if (categoriesFilterTrue.includes("adventure")){
                    newCategoriesArray.push(18)
                };
                theme_ids = newCategoriesArray;
                //Accomodation
                const accomodationFilterTrue = dataFilter.accommodation[0].filter( accommodation => accommodation === true);
                const newAccomodationArray = [];
                if (accomodationFilterTrue.includes("hotels")){
                    newAccomodationArray.push(1)
                };
                if (accomodationFilterTrue.includes("apartments")){
                    newAccomodationArray.push(15)
                };
                if (accomodationFilterTrue.includes("hostels")){
                    newAccomodationArray.push(12)
                };
                if (accomodationFilterTrue.includes("apartHotel")){
                    newAccomodationArray.push(20);
                };
                if (accomodationFilterTrue.includes("resorts")){
                    newAccomodationArray.push(3)
                };
                accommodation_ids = newAccomodationArray;
                //Amenity
                if (dataFilter.amenities[0].wifi === true && dataFilter.amenities[0].parking === true){
                    amenity_ids = [527,524288];
                } else if (dataFilter.amenities[0].wifi === true && dataFilter.amenities[0].parking === false){
                    amenity_ids = 527;
                } else if (dataFilter.amenities[0].wifi === false && dataFilter.amenities[0].parking === true){
                    amenity_ids = 524288;
                } else{
                    amenity_ids = null;
                };
                //Prices
                if (dataFilter[0].minPrice !== '' && dataFilter[0].maxPrice !== ''){
                    price_min = dataFilter[0].minPrice;
                    price_max = dataFilter[0].maxPrice;
                } else if (dataFilter[0].minPrice !== '' && dataFilter[0].maxPrice === ''){
                    price_min = dataFilter[0].minPrice;
                    price_max = null;
                } else if (dataFilter[0].minPrice === '' && dataFilter[0].maxPrice !== ''){
                    price_min = null;
                    price_max = dataFilter[0].maxPrice;
                } else{
                    price_min = null
                    price_max = null;
                };
                if ( dataFilter[0].price[0].hasta50mil === true){
                    price_min = 0;
                    price_max = 50000;
                } else if ( dataFilter[0].price[0].de50milA100mil === true){
                    price_min = 50000;
                    price_max = 100000;
                } else if ( dataFilter[0].price[0].masDe100mil === true){
                    price_min = 100000;
                    price_max = 1000000;
                };
                //Stars
                const starsFilterTrue = dataFilter.accommodation[0].filter( stars => stars === true);
                const newStarsArray = [];
                if (starsFilterTrue.includes("fiveStarsChecked")){
                    newStarsArray.push(5)
                };
                if (starsFilterTrue.includes("fourStarsChecked")){
                    newStarsArray.push(4)
                };
                if (starsFilterTrue.includes("threeStarsChecked")){
                    newStarsArray.push(3)
                };
                if (starsFilterTrue.includes("twoStarsChecked")){
                    newStarsArray.push(2);
                };
                if (starsFilterTrue.includes("oneStarChecked")){
                    newStarsArray.push(1)
                };
                star_rating_ids = newStarsArray;
                //Points
                if (dataFilter[0].minPoint !== '' && dataFilter[0].maxPoint !== ''){
                    guest_rating_min = dataFilter[0].minPoint;
                } else if (dataFilter[0].minPoint !== '' && dataFilter[0].maxPoint === ''){
                    guest_rating_min = dataFilter[0].minPoint;
                } else if (dataFilter[0].minPoint === '' && dataFilter[0].maxPoint !== ''){
                    guest_rating_min = dataFilter[0].maxPoint;
                } else{
                    guest_rating_min = null;
                };
            }

            const response = await getList.get(`/hotel/list?`, {
            params: {
                latitude: locations.latitude,
                longitude: locations.longitude,
                checkin_date,
                checkout_date,
                adults_number, 
                amenity_ids,
                theme_ids,
                accommodation_ids,
                guest_rating_min,
                star_rating_ids,
                price_min,
                price_max
            }});
            dispatch({
            type: SEARCHLISTHOTELS,
            payload: response.data.data
            });
        };
    } catch( errorGetHotels ) {
        dispatch({
            type: ERROR,
        })
    }
}