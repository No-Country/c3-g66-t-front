import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Searched = () => {

    const { data } = useSelector( store => store.SearchLocationReducer );
    const { hotelsList } = useSelector( store => store.SearchHotelListReducer );
    const { hotelsFilter } = useSelector( store => store.FilterHotelsListReducer );
    const [destiny, setDestiny] = useState('');
    const [numberOfHotels, setNumberOfHotels] = useState(0);

    useEffect(() => {
        setDestiny(data.destiny);
    }, [data]);

    useEffect(() => {
        if (hotelsList.length > 0) {
            setNumberOfHotels(hotelsList.length);  
        }
        if (hotelsFilter.length > 0) {
            setNumberOfHotels(hotelsFilter.length);
        }
    }, [hotelsList, hotelsFilter]);

    return (
        <div className='w-full h-10 pl-5 py-2 sm:pr-5 flex flex-row justify-start sm:justify-end items-center gap-4 border-b border-gray-200'>
            <span className='text-sm'>{destiny}:</span>
            <span className='text-sm'>{numberOfHotels} Resultados encontrados</span>
        </div>
    )
}

export default Searched
