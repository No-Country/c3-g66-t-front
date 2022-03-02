import { MenuOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../../store/slices/user"

const Navbar = () => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const foundUser = useSelector(state => state.user)
    const showMenu = () => {
        setShow(!show)
    }
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
    }
    return (
        <>

            <div className="fixed w-full text-white flex justify-between px-4 items-center z-10">
                <div className="text-2xl font-bolod text-center">
                    <Link to="/">Aca va logo <span className="block text-4xl">Hotely</span></Link>
                </div>

                <nav>
                    <div className="absolute right-6 md:hidden top-3 scale-150">
                        <MenuOutlined onClick={showMenu} className="scale-150 courser-pointer" />
                    </div>
                    <ul className="hidden md:flex gap-6 p-4 uppercase">

                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Alojamiento</Link></li>
                        <li><Link to="/">Contacto</Link></li>
                        {
                            foundUser.user.user ? <li><button onClick={handleLogout}>Logout</button></li> :
                                <>
                                    <li><Link to="/login">Entrar</Link></li>
                                    <li><Link to="/register">Registrarse</Link></li>
                                </>
                        }

                    </ul>

                    <MenuItems showMenu={showMenu} show={show} />
                </nav>
            </div>

        </>
    );
}

export default Navbar;