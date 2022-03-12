import { useEffect, useState } from "react";
import HotelList from "./HotelList";
import { useSelector } from "react-redux";

const HotelListContainer = () => {
   
    const [hotels, setHotels] = useState([]);

    /*useEffect(()=> {
        fetch("https://nc-hotely.herokuapp.com/api/v1/hotel/list?latitude=-22.911&longitude=-43.2094&checkin_date=2022-03-05&checkout_date=2022-03-19&sort_order=STAR_RATING_HIGHEST_FIRST&adults_number=7&page_number=1&currency=ARS&locale=es_ES")
         .then(respuesta => respuesta.json())
         .then(respuesta => setHotels(respuesta.data))
         .catch(err => err)
    },[])
    console.log(hotels);*/

    const list = useSelector(store => store.SearchHotelListReducer);

    useEffect(() => {
        setHotels(list.hotelsList);
    }, [list]);

   return(
       <>
         
        <div className="grid gap-6 bg-gray-100">
            <HotelList hotels={hotels} />
        </div>   
       </>
   );
}

export default HotelListContainer;