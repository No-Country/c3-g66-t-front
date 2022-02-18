import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import useForm from "../../hooks/useForm"
import { getUser } from "../../store/slices/user"

const Login = () => {    
    const dispatch= useDispatch()
    let navigate = useNavigate();
    const [data, setData] = useState({        
        email:'',
        password:''
    });    
    const submitForm = () => {
        dispatch(getUser(inputs))
    }
    const foundUser = useSelector(state => state.user)    
    if(foundUser.user.email){
        navigate('/')
    }
    const { inputs, handleInput, handleSubmit } = useForm(submitForm, data);
    
    return (
        <div className="flex">
            <div className="bg-no-repeat bg-cover bg-[url('https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/20/08/2008427_v4.jpeg')] w-3/5 ">
            </div>
            <div className="w-2/5 h-screen grid justify-center content-center">
                <img src="https://res.cloudinary.com/dhlbsrd5k/image/upload/v1644619719/WhatsApp_Image_2022-02-11_at_5.39.23_PM_bcrws4.jpg" />
                <form className="mx-24 my-5" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <span className="block text-sm font-medium text-slate-700">Correo elect&oacute;nico</span>    
                        <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 "  placeholder="hola@hotely.com" onChange={handleInput} name="email" value={inputs.email} />
                    </div>
                    <div className="mb-5">
                        <span className="block text-sm font-medium text-slate-700">Contraseña</span>    
                        <input type="password" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 " placeholder="Ingrese su contraseña" onChange={handleInput} name="password" value={inputs.password} />
                    </div>
                    <div className="grid justify-center mb-5">
                        <button className="p-2 w-36 rounded-md text-gray-200 bg-sky-600 hover:-translate-y-0.5 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none ">
                            Iniciar sesi&oacute;n
                        </button>
                    </div>

                </form>
                <span className="text-center text-gray-500">¿Todav&iacute;a no tienes una cuenta? <Link to='/register' className="text-blue-600 hover:underline underline-offset-8 ">¡Reg&iacute;strate! </Link > </span>

            </div>
        </div>
    )
}

export default Login
