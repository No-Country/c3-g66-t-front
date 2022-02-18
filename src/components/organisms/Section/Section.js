import React from "react";
import Search from "../Search/Search";

const Section = () => {
    return(
      <>
        <div className="bg-hero-image w-full h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 gap-8">
            <div className="text-center text-white font-extrabold">
                <h1 className="text-6xl">Alquiler Barato</h1>
                <h3>Reserva una habitacion de manera rápida, barata y segura.</h3>
            </div>
            <Search/>
        </div>
      </>
    );
}

export default Section;