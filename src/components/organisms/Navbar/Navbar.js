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
        <div className="fixed z-10 w-full text-white flex justify-between px-4 items-center">
            <div className="text-2xl font-bolod text-center">
                <Link to="/">Aca va logo <span className="block text-4xl">Hotely</span></Link>
            </div>

            <nav>
                <div className="absolute right-6 md:hidden top-3 scale-150">
                    <MenuOutlined onClick={showMenu} className="scale-150 courser-pointer"/>
                </div>
                <ul className="hidden md:flex gap-6 p-4 uppercase">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Alojamiento</Link></li>
                    <li><Link to="/">Contacto</Link></li>
                    <li><Link to="/login">Entrar</Link></li>
                    <li><Link to="/register">Registrarse</Link></li>
                </ul>

                <MenuItems showMenu={showMenu} show={show}/>
            </nav>
        </div>
        
        </>
    );
}

export default Navbar;