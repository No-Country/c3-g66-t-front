import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GetListHotelsAction } from '../../../../store/slices/search/ListHotelsReducer';

const HotelsPages = () => {

    const { hotelsList } = useSelector( store => store.SearchHotelListReducer );
    const { data } = useSelector( store => store.SearchLocationReducer );
    const { dataFilter } = useSelector( store => store.FilterReducer );
    const dispatch = useDispatch();

    const [amountHotels, setAmountHotels] = useState(25);
    const [page_number, setPage_number] = useState(1);
    const limit = 5;

    const onSub = () => {
        if (page_number > 1){
            setPage_number(page_number-1);
        }
    };
    const onAdd = () => {
        if (page_number < limit) { 
            setPage_number(page_number+1);
        }
    };

    useEffect(() => {
        setPage_number(1);
    }, [dataFilter.categories]);

    useEffect( () => {
        dispatch(GetListHotelsAction({ data, page_number }));
        if (page_number !== 1){
           setAmountHotels(hotelsList.length);   
        } else if (page_number !== 1){
            setAmountHotels(25);   
        }
    }, [page_number] );

    return (
        <div className='h-10 w-full flex flex-row bg-white justify-center items-center gap-4'>    
            <strong className='text-sm'>Página</strong>
            <div className='flex flex-row justify-center items-center gap-2'>
                <button className='mb-0.5' onClick={onSub} >{'<'}</button>
                <strong className='text-sm'>{page_number}</strong>
                <button className='mb-0.5' onClick={onAdd} >{'>'}</button> 
            </div>
            <strong className='text-sm'>Resultados:</strong>
            <strong className='text-sm'>{amountHotels}</strong>
        </div>
    )
}

export default HotelsPages