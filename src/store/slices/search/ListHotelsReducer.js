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
    adults_number}) => async (dispatch) => {

    try {
        if (locations.latitude !== 0 && locations.longitude !== 0){
            const response = await getList.get(`/hotel/list?`, {
            params: {
                latitude: locations.latitude,
                longitude: locations.longitude,
                checkin_date,
                checkout_date,
                adults_number,  
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