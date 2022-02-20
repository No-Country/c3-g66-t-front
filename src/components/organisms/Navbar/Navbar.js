import { MenuOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";


const Navbar = () => {

    const [show, setShow] = useState(false);

    const showMenu = () => {
        setShow(!show)
    }
    return(
        <>
        <div className="fixed z-10 w-full text-white flex justify-between px-4  items-center bg-black/20">
            <div className="text-2xl font-bolod text-center">
                <Link to="/"><span className="block text-4xl hover:text-amber-300">Hotely</span></Link>
            </div>

            <nav>
                <div className="absolute right-6 md:hidden top-3 scale-150">
                    <MenuOutlined onClick={showMenu} className="scale-150 courser-pointer"/>
                </div>
                <ul className="hidden md:flex gap-6 p-4 uppercase">
                    <li><Link to="/" className="hover:text-amber-400 hover:border-b-2 border-amber-400">Home</Link></li>
                    <li><Link to="/" className="hover:text-amber-400 hover:border-b-2 border-amber-400">Alojamiento</Link></li>
                    <li><Link to="/" className="hover:text-amber-400 hover:border-b-2 border-amber-400">Contacto</Link></li>
                    <li><Link to="/login" className="hover:text-amber-400 hover:border-b-2 border-amber-400">Entrar</Link></li>
                    <li><Link to="/register" className="hover:text-amber-400 hover:border-b-2 border-amber-400">Registrarse</Link></li>
                </ul>

                <MenuItems showMenu={showMenu} show={show}/>
            </nav>
        </div>
        
        </>
    );
}

export default Navbar;