import { Close } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../../store/slices/user"
const MenuItems = ({showMenu, show}) =>{
    const foundUser = useSelector(state => state.user)
    const dispatch = useDispatch()
    
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
    }

    return(
      <>
        
               <ul className={show ? "flex-col flex items-center fixed inset-0 left-1/4 gap-8 justify-center p-8  bg-black/20 backdrop-blur-lg  md:hidden" : "hidden"}>
                 <Close onClick={showMenu} className="courser-pointer"/>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/hotels">Alojamiento</Link></li>
                    <li><Link to="/">Contacto</Link></li>
                    {
                        foundUser.user.user ? <li><button onClick={handleLogout}>Logout</button></li> :
                        <>                            
                            <li><Link to="/login">Ingresar</Link></li>
                            <li><Link to="/register">Registrarse</Link></li>
                        </>
                    }
                </ul>
        
      </>
    );
}

export default MenuItems;