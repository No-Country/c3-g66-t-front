import React from "react";

const AboutUS = () =>{
    return(
     
        <main class="fixed w-full h-full bg-slate-400 flex flex-col justify-center items-center">
                <div class="flex justify-center m-10">
                   <p class="text-3xl text-white mt-4 mb-2">Hotely</p>
                </div>
                <div class="flex flex-wrap justify-start m-10">
                    <p class="text-2xl text-white text-justify">En Hotely buscamos dar la mejor experiencia posible a aquellos viajero que requieran de hoteles confiables a precios razonables. 
                        Es por ello que nos dedicamos cada día a mejorar nuestra plataforma y atender a los usuarios que requieran ayuda con sus reservaciones.  
                    </p>
                    <p class="text-2xl text-white mt-5 text-justify">
                        Nuestra misión es generar una conexión segura entre los viajeros y los hoteles a través de una aplicación confiable y sencilla de utilizar.
                    </p>
                </div>  
        </main>
   
    );
}

export default AboutUS;