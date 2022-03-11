import React from "react";

const AboutUS = () =>{
    return(
      <div className="p-10 border-2 border-indigo-600">
        <main class="w-full h-full bg-slate-400 flex flex-col justify-center items-center p-10 m-10 rounded-md">
            <div class="">
                <div class="flex justify-center">
                   <p class="text-3xl text-white mb-4 p-20">Hotely</p>
                </div>
                <div class="flex flex-wrap justify-start p-15">
                    <p class="text-2xl text-white text-justify">En Hotely buscamos dar la mejor experiencia posible a aquellos viajero que requieran de hoteles confiables a precios razonables. 
                        Es por ello que nos dedicamos cada día a mejorar nuestra plataforma y atender a los usuarios que requieran ayuda con sus reservaciones.  
                    </p>
                    <p class="text-2xl text-white  text-justify py-2">
                        Nuestra misión es generar una conexión segura entre los viajeros y los hoteles a través de una aplicación confiable y sencilla de utilizar.
                    </p>
                </div>
            </div>   
        </main>
    </div>
    );
}

export default AboutUS;