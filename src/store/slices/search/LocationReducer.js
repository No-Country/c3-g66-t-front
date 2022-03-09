import { searchLocation } from '../../../config/axios/axios';

//valores por defecto:
const defaultLocation = {
    data:{
        locations:{
            longitude: 0,
            latitude: 0
        },
        checkin_date: 2022/31/12,
        checkout_date: 2022/31/12,
        adults_number: 1,
    },
    errorGetLocation: false
};

//tipos de acción:
const SEARCHLOCATION = 'SEARCHLOCATION';
const ERROR = 'ERROR';

//reducers:
export default function SearchLocationReducer(state = defaultLocation, { type, payload}) {
    switch(type){
        case SEARCHLOCATION: return {...state, data: payload, errorGetLocation: false };
        case ERROR: return {...state, errorGetLocation: true};
        default: return state;
    };
};

//acciones:
export const GetLocationAction = ({ 
    location,
    checkin_date,
    checkout_date,
    adults_number,
    navigate}) => async (dispatch) => {

    try {
        if(location !== ''){
            const response = await searchLocation.get(`/location/${location}`);
            const longitude = response.data.data[0].longitude;
            const latitude = response.data.data[0].latitude;
            navigate('/hotels');
            dispatch({
                type: SEARCHLOCATION,
                payload: {
                    locations:{
                        longitude: longitude,
                        latitude: latitude 
                    },
                    checkin_date: checkin_date,
                    checkout_date: checkout_date,
                    adults_number: adults_number
                }
            });
        }else if (location === ''){
            alert('Ingrese un destino');
        };
        
    } catch( errorGetLocation ) {
        dispatch({
            type: ERROR,
        });
    };
};