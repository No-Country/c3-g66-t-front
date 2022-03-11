import React from "react";
import Search from "../Search/Search";

const Section = ( {classname} ) => {
    return(
      <>
        <div className={classname}>
            <div className="flex flex-col text-center text-white gap-1">
                <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">Alquiler Barato</h1>
                <h3 className="text-lg font-semibold md:font-bold md:text-xl">Reserva una habitacion de manera rápida, barata y segura</h3>
            </div>
            <Search/>
        </div>
       
      </>
    );
};

export default Section;