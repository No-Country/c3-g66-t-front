import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { getUser, setMessage } from "../../store/slices/user"

import ModalPortal from "../../components/organisms/Error"

import { Formik, Form, Field, ErrorMessage } from 'formik';
const Login = () => {
    let navigate = useNavigate();    
    const dispatch = useDispatch()    
    const {message ,logged} = useSelector(state => state.user.user)
    useEffect(() => {
        if (logged) {
            navigate('/')
        }
    }, [navigate,dispatch,logged])

    return (
        <Formik
            initialValues={{            
                email: '',
                password: ''
            }}
            validate={values => {
                const errors = {};            
                if(!values.email){
                    errors.email='email requerido'
                }
                else{
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'email invalido';
                    }
                }

                if(!values.password){
                    errors.password = 'Required';
                }
                return errors;
            }}
            onSubmit={(inputs) => {
                dispatch(getUser(inputs))
                dispatch(setMessage(''))
            }}
        >
            
        <div className="flex">
            <div className="bg-no-repeat bg-cover bg-background-login lg:w-3/5 md:w-1/2 w-0">
            </div>
            <div className="lg:w-2/5 md:w-1/2 w-full h-screen grid justify-center content-center">
                {
                    message && <ModalPortal errors={[message]} />
                }
                <img src="https://res.cloudinary.com/dhlbsrd5k/image/upload/v1644619719/WhatsApp_Image_2022-02-11_at_5.39.23_PM_bcrws4.jpg" />
                <Form className="my-5 px-10 mx-5">
                    <div className="mb-3">
                        <span className="block text-sm font-medium text-slate-700">Correo elect&oacute;nico</span>                        
                        <Field type="email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 "  placeholder="hola@hotely.com" name="email"/>
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div className="mb-5">
                        <span className="block text-sm font-medium text-slate-700">Contraseña</span>
                        <Field type="password" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 " placeholder="Ingrese su contraseña" name="password"/>
                        <ErrorMessage name="password" component="div" />

                    </div>
                    <div className="grid justify-center mb-5">
                        <button className="p-2 w-36 rounded-md text-gray-200 bg-sky-600 hover:-translate-y-0.5 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none ">
                            Iniciar sesi&oacute;n
                        </button>
                    </div>

                </Form>
                <span className="text-center text-gray-500">¿Todav&iacute;a no tienes una cuenta? <Link to='/register' className="text-blue-600 hover:underline underline-offset-8 ">¡Reg&iacute;strate! </Link > </span>
            </div>
        </div>
        
    </Formik>

    )
}

export default Login
