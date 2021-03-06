const defaultFilter = {
    dataFilter: [], 
    errorGetDataFilter: false
};

const FILTER = 'FILTER';
const ERROR = 'ERROR';

export default function FilterReducer(state = defaultFilter, { type, payload }) {
    switch(type){
        case FILTER: return {...state, dataFilter: payload, errorGetDataFilter: false };
        case ERROR: return {...state, errorGetDataFilter: true};
        default: return state;
    }
}

export const FilterAction = ({ 
    categories,
    accomodation,
    amenities,
    price,
    minPrice,
    maxPrice,
    stars,
    minPoint,
    maxPoint}) => async (dispatch) => {

        dispatch({
        type: FILTER,
        payload: { 
            categories,
            accomodation,
            amenities,
            price,
            minPrice,
            maxPrice,
            stars,
            minPoint,
            maxPoint
        }
    }); 
}