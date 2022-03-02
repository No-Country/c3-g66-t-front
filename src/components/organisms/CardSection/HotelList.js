import HotelCard from "../../molecules/Card/HotelCard";
import React from "react";
const HotelList = ( {hotels} ) =>{
    return(
        <>
           {
               hotels.map( (hotel, i) =>(
                   <HotelCard
                      key={i}
                      title={hotel.place_name}
                   />
               ))
           }
        </>
    );

}

export default HotelList
