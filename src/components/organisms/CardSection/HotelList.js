import HotelCard from "../../molecules/Card/HotelCard";
import React from "react";
const HotelList = ( {hotels} ) =>{
    return(
        <>
           {
               hotels.map(hotel =>(
                   <HotelCard
                      title={hotel.place_name}
                   />
               ))
           }
        </>
    );

}

export default HotelList
