import { FiRefreshCcw } from 'react-icons/fi';
import { Link, useNavigate  } from 'react-router-dom';
import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import registerService from "../../services/auth"

const Register = () => {
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        dni:'',
        phone:'',
        img:'',
        email:'',
        password:''        
    });    
    const submitForm = () => {
        inputs.img='https://img2.freepng.es/20180717/cz/kisspng-avatar-youtube-person-kahoot-a-roommate-who-plays-with-a-cell-phone-5b4d74010dd214.7783760115318026250566.jpg'
        registerService(inputs).then(res =>{
            if(res){
                return navigate("/login");
            }
            else{
                return alert('Datos incorrectos')
            }
        })
    };
    const { inputs, handleInput, handleSubmit } = useForm(submitForm, data);
    let navigate = useNavigate();

    return (
        <div className="flex">
            <div className="bg-no-repeat bg-cover bg-[url('https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2018/04/akalki-0.jpg?fit=1920%2C820&ssl=1')] w-full h-screen flex opacity-100">
                <div className="bg-white grid content-center justify-center w-1/3 m-10 rounded-lg shadow-2xl p-5 ">
                    <img src="https://res.cloudinary.com/dhlbsrd5k/image/upload/v1644619719/WhatsApp_Image_2022-02-11_at_5.39.23_PM_bcrws4.jpg" className="w-3/5 m-auto"/>
                    <form className="m-5" onSubmit={handleSubmit}>
                        <div className="flex gap-3">
                            <div className="mb-3 w-1/2">
                                <span className="block text-sm font-medium text-slate-700">Nombre(s)</span>    
                                <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                    focus:outline-none focus:border-sky-500 focus:ring-1"  placeholder="Ingrese su nombre" name="firstname" onChange={handleInput}
                                    value={inputs.firstname} 
                                />
                            </div>
                            <div className="mb-3 w-1/2">
                                <span className="block text-sm font-medium text-slate-700">Apellidos</span>    
                                <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                    focus:outline-none focus:border-sky-500 focus:ring-1 " placeholder="Ingrese su apellido" name="lastname"
                                    onChange={handleInput} value={inputs.lastname}
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-1/2">
                                <div className="mb-3 w-full">
                                    <span className="block text-sm font-medium text-slate-700">DNI</span>    
                                    <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-sky-500 focus:ring-1 " placeholder="Ingrese su identificaci&oacute;n"
                                        onChange={handleInput} name="dni" value={inputs.dni}
                                    />
                                </div>
                                <div className="mb-3 w-full">
                                    <span className="block text-sm font-medium text-slate-700">Telefono</span>    
                                    <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-sky-500 focus:ring-1 " placeholder="Ingrese su n&uacute;mero de celular"
                                        onChange={handleInput} name="phone" value={inputs.phone}
                                    />
                                </div>
                                <div className="mb-3 w-full ">
                                    <span className="block text-sm font-medium text-slate-700">Foto</span>    
                                    <input type="file" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-sky-500 focus:ring-1" name="img"
                                        onChange={handleInput} value={inputs.img}
                                    />
                                </div>
                            </div>
                            {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGcBqHI_nx1QkcHOgUPs5JaIhH0Epi476MTBWRVmimQhILgWpie070xtty5wovR6X9QXU&usqp=CAU */}
                            {/* https://img2.freepng.es/20180717/cz/kisspng-avatar-youtube-person-kahoot-a-roommate-who-plays-with-a-cell-phone-5b4d74010dd214.7783760115318026250566.jpg */}
                            <div className="w-44 h-44 ml-5 bg-slate-400 rounded-full bg-[url('https://img2.freepng.es/20180717/cz/kisspng-avatar-youtube-person-kahoot-a-roommate-who-plays-with-a-cell-phone-5b4d74010dd214.7783760115318026250566.jpg')] bg-cover bg-no-repeat self-center  -scale-x-100" >   
                                <button  className="bg-white h-8 w-8 -mt-8 rounded-full hover:animate-spin" >
                                    <FiRefreshCcw  size={24}/>
                                </button>
                            </div>
                        </div>                        
                        <div className="flex gap-3 mt-2">
                            <div className="mb-3 w-1/2">
                                <span className="block text-sm font-medium text-slate-700">Email</span>    
                                <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                    focus:outline-none focus:border-sky-500 focus:ring-1" placeholder="Ingrese su correo electr&oacute;nico"
                                    onChange={handleInput} name="email" value={inputs.email}
                                />
                            </div>
                            <div className="mb-3 w-1/2">
                                <span className="block text-sm font-medium text-slate-700">Contraseña</span>    
                                <input type="password" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                    focus:outline-none focus:border-sky-500 focus:ring-1 " placeholder="Ingrese su contraseña" 
                                    onChange={handleInput} name="password" value={inputs.password}
                                />
                            </div>
                        </div>                         
                        <div className="grid mt-2">
                            <button className="p-2 w-full rounded-md text-gray-200 bg-sky-700 hover:-translate-y-0.5 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none ">
                                Registrarme
                            </button>
                        </div>

                    </form>
                    <span className="text-center text-gray-500">¿Ya tienes una cuenta? <Link to="/login" className="text-blue-600 hover:underline underline-offset-8 ">¡Iniciar sesi&oacute;n! </Link > </span>
                </div>
            </div>
        </div>
    )
}
    
export default Register
