import { getList } from '../../../config/axios/axios';

const defaultFilterValue = {
    hotelsFilter: [], 
    errorGetHotels: false
};

const HOTELSFILTERED = 'SEARCHLISTHOTELS';
const ERROR = 'ERROR';

export default function FilterHotelsListReducer(state = defaultFilterValue, { type, payload }) {
    switch(type){
        case HOTELSFILTERED: return {...state, hotelsFilter: payload, errorGetHotels: false };
        case ERROR: return {...state, errorGetHotels: true};
        default: return state;
    }
}

export const GetHotelsFilteredAction = ({ 
    locations,
    checkin_date,
    checkout_date,
    adults_number,
    amenity_ids,
    theme_ids,
    accommodation_ids,
    guest_rating_min,
    star_rating_ids,
    price_min,
    price_max   }) => async (dispatch) => {

    try {
        if (locations.latitude !== 0 && locations.longitude !== 0){
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
            type: HOTELSFILTERED,
            payload: response.data.data
            });
        };
    } catch( errorGetHotels ) {
        dispatch({
            type: ERROR,
        })
    }
}