import { useState } from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../../assets/Img-logo/Turquesa Elegante Pintura Tienda Logotipo.png"
import imgLogo2 from "../../../assets/Img-logo/Aerot.png"
export default function Navbar(){
  
    /* Al principio intenté mostrar el nav responsive con un useState. PROBLEMA: Se deja de ver el nav cuando la pantalla esta full.
    const [showNav, setShowNav] = useState(false);
    */
    

    const showNavBar = () => {
        //setShowNav(!showNav); 

        //El código de abajo (se que no es optimo) es el que me funcinó. PROBLEMA: en pantalla full los links no se ponen en linea.
        const menu = document.querySelector('#menu');
        menu.classList.toggle('hidden')
    }

    return(
        <>
    <nav className="flex shadow-md items-center justify-between flex-wrap bg-white-500 p-6 fixed left-0 right-0">
        
        <div className="block lg:hidden">
            <button id='boton' className="flex items-center px-3 py-2 border rounded text-dark-200 border-dark-400 hover:text-dark hover:border-darck" onClick={showNavBar} /*EL BOTÓN DONDE SE HACE LA MAGIA. */ > 
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
            </div>
        
        <div className="flex items-center flex-shrink-0 text-dark mr-6">
            <img src={imgLogo2} className="fill-current h-30 w-30 mr-2" width="64" height="64" viewBox="0 0 54 54"/> 
            <span class="font-Kaushan text-xl tracking-tight">Hotely</span>
        </div>
        
        <div id='menu' className="w-full block  flex-grow lg:flex lg:items-center lg:w-auto text-center hidden">
            <ul className="text-md lg:flex-grow">
                <li>
                    <Link to="/" className="font-Buda block mt-4 lg:inline-block lg:mt-0 text-dark-400 hover:text-blue mr-4">
                    Inicio
                    </Link>
                </li>
                <li>
                    <a  className="font-Buda block mt-4 lg:inline-block lg:mt-0 text-dark-400 hover:text-dark mr-4">
                    Hoteles
                    </a>
                </li>
                <li>
                    <a className="font-Buda block mt-4 lg:inline-block lg:mt-0 text-dark-400 hover:text-dark">
                    Contacto
                    </a>
                 </li>                      
            </ul>
        
             <div className="px-3">
                    <Link to="/login" className="inline-block bg-purple-100 text-sm px-4 py-2 leading-none border rounded text-purple-400 border-purple hover:border-purple hover:text-blue-500 hover:bg-green mt-4 lg:mt-0">Entrar</Link>     
              </div>
           <div>
             <Link to="/register" className="inline-block bg-purple-400 text-sm px-4 py-2 leading-none border rounded text-white border-purple hover:border-purple hover:text-blue-500 hover:bg-green mt-4 lg:mt-0">Registrarse</Link>
           </div>
        </div>  
    </nav>
        </>
    );
}