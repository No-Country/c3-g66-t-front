import { FiRefreshCcw } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"
import { register, resetUserSignUp } from "../../store/slices/user"
import ModalPortal from "../../components/organisms/Error"



import { Formik, Form, Field, ErrorMessage } from 'formik';
 
const Register = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()    
    const {status, errors} = useSelector(state => state.user.signUp)
    useEffect(()=>{
        if(status === "ok") {
            navigate('/login')
            dispatch(resetUserSignUp())
        }
    },[navigate,status,dispatch])

    return (
        <Formik
            initialValues={{
                firstname: '',
                lastname: '',
                dni: '',
                phone: '',
                img: '',
                email: '',
                password: ''
            }}
            validate={values => {
                const errors = {};
                if (!values.firstname) {
                    errors.firstname = 'Required';
                } 
                if(!values.lastname){
                    errors.lastname =   'Required';
                }
                if(!values.dni){
                    errors.dni = 'Required';
                }
                if(!values.img){
                    errors.img = 'Required';
                }
                if(!values.email){
                    errors.email='email requerido'
                }
                else{
                    if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                    errors.email = 'email invalido';
                    }

                }
                if(!values.password){
                    errors.password = 'Required';
                }
                return errors;
            }}
            onSubmit={(inputs) => {
                    dispatch(register(inputs))    
            }}
            >
                <div className="bg-no-repeat bg-cover bg-[url('https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2018/04/akalki-0.jpg?fit=1920%2C820&ssl=1')] w-full min-h-screen flex opacity-100">
                    <div className="bg-white grid content-center justify-center lg:w-1/3 md:w-1/2 w-full md:m-auto lg:mx-10 rounded-lg shadow-2xl p-3">
                        <img src="https://res.cloudinary.com/dhlbsrd5k/image/upload/v1644619719/WhatsApp_Image_2022-02-11_at_5.39.23_PM_bcrws4.jpg" className="w-1/2 m-auto" />
                        {errors && <ModalPortal errors={errors}/>}
                        <Form className="m-5">
                            <div className="md:flex gap-3">
                                <div className="mb-3 w-full md:w-1/2">
                                    <span className="block text-sm font-medium text-slate-700">Nombre(s)</span>
                                    <Field type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-sky-500 focus:ring-1"  placeholder="Ingrese su nombre" name="firstname"                                         
                                    />
                                    <ErrorMessage name="firstname" component="div" />
                                </div>
                                <div className="mb-3 w-full md:w-1/2">
                                    <span className="block text-sm font-medium text-slate-700">Apellidos</span>
                                    <Field type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-sky-500 focus:ring-1 " placeholder="Ingrese su apellido" name="lastname"                                         
                                    />
                                    <ErrorMessage name="lastname" component="div" />
                                </div>
                                {/* {errors.length > 0 && <ModalPortal errors={errors} />} */}
                            </div>
                            <div className="md:flex">
                                <div className="w-full md:w-1/2">
                                    <div className='flex gap-3 md:flex-col'>
                                        <div className="mb-3 w-1/2 md:w-full">
                                            <span className="block text-sm font-medium text-slate-700">DNI</span>
                                            <Field type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                                focus:outline-none focus:border-sky-500 focus:ring-1 " placeholder="Ingrese su identificaci&oacute;n"
                                                 name="dni" 
                                            />
                                            <ErrorMessage name="dni" component="div" />
                                        </div>
                                        <div className="mb-3 w-1/2 md:w-full">
                                            <span className="block text-sm font-medium text-slate-700">Telefono</span>
                                            <Field type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                                focus:outline-none focus:border-sky-500 focus:ring-1 " placeholder="Ingrese su n&uacute;mero de celular"
                                                 name="phone" 
                                            />
                                            <ErrorMessage name="phone" component="div" />
                                        </div>
                                    </div>
                                    <div className="mb-3 w-full ">
                                        <span className="block text-sm font-medium text-slate-700">Foto</span>
                                        <Field type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                            focus:outline-none focus:border-sky-500 focus:ring-1" name="img"                                             
                                        />
                                        <ErrorMessage name="img" component="div" />
                                    </div>
                                </div>
                                {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGcBqHI_nx1QkcHOgUPs5JaIhH0Epi476MTBWRVmimQhILgWpie070xtty5wovR6X9QXU&usqp=CAU */}
                                {/* https://img2.freepng.es/20180717/cz/kisspng-avatar-youtube-person-kahoot-a-roommate-who-plays-with-a-cell-phone-5b4d74010dd214.7783760115318026250566.jpg */}
                                <div className="w-44 h-44 ml-5 bg-slate-400 rounded-full bg-[url('https://img2.freepng.es/20180717/cz/kisspng-avatar-youtube-person-kahoot-a-roommate-who-plays-with-a-cell-phone-5b4d74010dd214.7783760115318026250566.jpg')] bg-cover bg-no-repeat self-center  -scale-x-100" >
                                    <button className="bg-white h-8 w-8 -mt-8 rounded-full hover:animate-spin" >
                                        <FiRefreshCcw size={24} />
                                    </button>
                                </div>
                            </div>
                            <div className="md:flex gap-3 mt-2">
                                <div className="mb-3 w-full md:w-1/2">
                                    <span className="block text-sm font-medium text-slate-700">Email</span>
                                    <Field type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-sky-500 focus:ring-1" placeholder="Ingrese su correo electr&oacute;nico"
                                         name="email" 
                                    />
                                    <ErrorMessage name="email" component="div" />
                                </div>
                                <div className="mb-3 w-full md:w-1/2">
                                    <span className="block text-sm font-medium text-slate-700">Contraseña</span>
                                    <Field type="password" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-sky-500 focus:ring-1 " placeholder="Ingrese su contraseña"
                                         name="password" 
                                    />
                                    <ErrorMessage name="password" component="div" />
                                </div>
                            </div>
                            <div className="grid mt-2">
                                <button className="p-2 w-full rounded-md text-gray-200 bg-sky-700 hover:-translate-y-0.5 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none ">
                                    Registrarme
                                </button>
                            </div>
    
                        </Form>
                        <span className="text-center text-gray-500">¿Ya tienes una cuenta? <Link to="/login" className="text-blue-600 hover:underline underline-offset-8 ">¡Iniciar sesi&oacute;n! </Link > </span>
                    </div>
                </div>
        </Formik>
    )
}

export default Register
