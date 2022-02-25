import { useEffect, useState } from "react";
import HotelList from "./HotelList";

const HotelListContainer = () => {
   
    const [hotels, setHotels] = useState([]);

    useEffect(()=> {
        fetch("https://nc-hotely.herokuapp.com/api/v1/location/:location")
         .then(respuesta => respuesta.json())
         .then(respuesta => setHotels(respuesta.data))
         .catch(err => alert(err))
    },[])
    console.log(hotels);

   return(
       <>
         <div className="bg-hero-image w-full h-screen bg-cover bg-center flex flex-wrap items-center justify-center px-4 gap-8 "> 
             <HotelList hotels={hotels} />
         </div>
       </>
   );
}

export default HotelListContainer;