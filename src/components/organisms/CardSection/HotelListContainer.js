import { useEffect, useState } from "react";
import HotelList from "./HotelList";
import { useDispatch, useSelector } from "react-redux";
import { GetListHotelsAction } from '../../../store/slices/search/ListHotelsReducer';

const HotelListContainer = () => {
   
    const dispatch = useDispatch();
    const [hotels, setHotels] = useState([]);

    const { data } = useSelector( store => store.SearchLocationReducer );
    const list = useSelector(store => store.SearchHotelListReducer);

    const refreshPage = () => {
        if (list.hotelsList === []){
            dispatch(GetListHotelsAction({ data, page_number: 1 }));
            setHotels(list.hotelsList);
        };
    };

    useEffect(() => {
        setHotels(list.hotelsList);
    }, [dispatch, list]);

    useEffect(() => {
        refreshPage();
    }, []);

   return(
       <>
         
        <div className="grid gap-6 bg-gray-100">
            <HotelList hotels={hotels} />
        </div>   
       </>
   );
}

export default HotelListContainer;