import HotelCard from "../../molecules/Card/HotelCard";
import React from "react";
import  { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../../pages/Hotels/hotels.css";
// import required modules
import { FreeMode, Pagination } from "swiper";

const HotelList = ( {hotels} ) =>{
    return(
        <>
          <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
          >
          
           {
               hotels.map( (hotel, i) =>(
                <SwiperSlide>  
                   <HotelCard
                      key={i}
                      hotelId={hotel.id}
                      mainImg={hotel.thumbnailUrl.srpDesktop}
                      title={hotel.name}
                      city={hotel.address.locality}
                      country={hotel.address.countryName}
                   />
                </SwiperSlide>
               ))
           }
           
        </Swiper>
        </>
    );

}

export default HotelList
