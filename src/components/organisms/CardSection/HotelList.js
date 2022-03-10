import HotelCard from "../../molecules/Card/HotelCard";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../../pages/Hotels/hotels.css";
import { FreeMode, Pagination } from "swiper";

const HotelList = ({ hotels }) => {
  return (
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
        {hotels.length > 0 ? (
          hotels.map((hotel, i) => (
            <SwiperSlide className="" key={i}>
              <HotelCard
                mainImg={hotel.thumbnailUrl.srpDesktop}
                title={hotel.name}
                id={hotel["hotel_id"]}
                city={hotel.address.locality}
                country={hotel.address.countryName}
                price={hotel.ratePlan.price.current}
              />
            </SwiperSlide>
          ))
        ) : (
          <div className="animate-bounce flex items-center justify-center">
            <h3 className="text-2xl text-indigo-900">Cargando...</h3>
          </div>
        )}
      </Swiper>
    </>
  );
};

export default HotelList;
