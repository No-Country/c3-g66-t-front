import React from "react";

const AboutUS = () =>{
    return(
        <main class="container w-full h-full bg-slate-300 flex flex-col justify-center items-center p-10">
            <div class="">
                <div class="flex justify-center">
                   <p class="text-3xl text-white mb-4">Hotelyn</p>
                </div>
                <div class="flex flex-wrap justify-start">
                    <p class="text-2xl text-justify">En Hotely buscamos dar la mejor experiencia posible a aquellos viajero que requieran de hoteles confiables a precios razonables. 
                        Es por ello que nos dedicamos cada día a mejorar nuestra plataforma y atender a los usuarios que requieran ayuda con sus reservaciones.  
                    </p>
                    <p class="text-2xl text-justify py-2">
                        Nuestra misión es generar una conexión segura entre los viajeros y los hoteles a través de una aplicación confiable y sencilla de utilizar.
                    </p>
                </div>
            </div>   
        </main>

    );
}

export default AboutUS;