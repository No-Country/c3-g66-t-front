import { useDispatch } from "react-redux";
import { FilterAction } from '../../../store/slices/filter/FilterReducer';

const Button = ( {categories, accomodation, amenities, price, minPrice, maxPrice, stars, minPoint, maxPoint} ) => {

    const dispatch = useDispatch();

    /*const {
        dataFilter,
        errorGetData } = useSelector( store => store.FilterReducer );*/

    const onFilter = () => {
        dispatch(FilterAction({
            categories, accomodation, amenities, price, minPrice, maxPrice, stars, minPoint, maxPoint})
        );
    };

    return (
        <button onClick={onFilter} className='text-xs font-semibold w-24 h-8 text-gray-900 bg-white border-gray-400 rounded-lg cursor-pointer
        hover:bg-gray-200 border hover:border-gray-300 hover:text-gray-800 duration-700'>
        Filtrar
        </button>
    )
}

export default Button
