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
                breakpoints={{
                  640: {
                    width: 640,
                    slidesPerView: 1,
                  },
                  768: {
                    width: 768,
                    slidesPerView: 2,
                  },
                }}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
          >
        {
        hotels.length > 0
            ?hotels.map( (hotel, i) =>(
                    <SwiperSlide>  
                    <HotelCard
                        key={hotel.id}
                        mainImg={hotel.thumbnailUrl.srpDesktop}
                        title={hotel.name}
                        city={hotel.address.locality}
                        country={hotel.address.countryName}
                    />
                    </SwiperSlide>
                ))
                :<h3 className="text-9xl text-indigo-900">No carga</h3>  
        }   
        </Swiper>
        </>
    );

}

export default HotelList
