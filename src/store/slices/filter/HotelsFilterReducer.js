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
    data,
    amenity_ids,
    theme_ids,
    accommodation_ids,
    guest_rating_min,
    star_rating_ids,
    price_min,
    price_max   }) => async (dispatch) => {

    try {
        if (data.locations.latitude !== 0 && data.locations.longitude !== 0){
            const response = await getList.get(`/hotel/list?`, {
            params: {
                latitude: data.locations.latitude,
                longitude: data.locations.longitude,
                checkin_date: data.checkin_date,
                checkout_date: data.checkout_date,
                adults_number: data.adults_number,
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