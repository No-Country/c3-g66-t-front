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

export const GetListHotelsAction = ({ data, page_number }) => async (dispatch) => {
    try {
        if (data.locations.latitude !== 0 && data.locations.longitude !== 0){
            const response = await getList.get(`/hotel/list?`, {
            params: {
                latitude: data.locations.latitude,
                longitude: data.locations.longitude,
                checkin_date: data.checkin_date,
                checkout_date: data.checkout_date,
                adults_number: data.adults_number,
                page_number
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