import { searchLocation } from '../../../config/axios/axios';

//valores por defecto:
const defaultLocation = {
    locations:{
        longitude: 0,
        latitude: 0,
    },
    errorGetLocation: false
};

//tipos de acción:
const SEARCHLOCATION = 'SEARCHLOCATION';
const ERROR = 'ERROR';

//reducers:
export default function SearchLocationReducer(state = defaultLocation, { type, payload}) {
    switch(type){
        case SEARCHLOCATION: return {...state, locations: payload, errorGetLocation: false };
        case ERROR: return {...state, errorGetLocation: true};
        default: return state;
    };
};

//acciones:
export const GetLocationAction = ({ 
    location,
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
                    longitude: longitude,
                    latitude: latitude  
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

