import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { getUser, setMessage } from "../../store/slices/user"
import ToastPortal from "../../components/atoms/Toast"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./Login.css"
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
                    errors.email='Campo requerido'
                }
                else{
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Email invalido';
                    }
                }

                if(!values.password){
                    errors.password = 'Campo requerido';
                }
                return errors;
            }}
            onSubmit={(inputs) => {
                dispatch(getUser(inputs))
                dispatch(setMessage(''))
            }}
        >            
            <div className="flex">
                <div className="container-image">
                </div>
                <div className="container">
                    {
                        message && <ToastPortal errors={[message]} />
                    }
                    <img src="https://res.cloudinary.com/dhlbsrd5k/image/upload/v1644619719/WhatsApp_Image_2022-02-11_at_5.39.23_PM_bcrws4.jpg" alt="logo"/>
                    <Form className="form-container">
                        <div className="mb-3">
                            <span className="field-label">Correo elect&oacute;nico</span>                        
                            <Field type="email" className="input-field"  placeholder="hola@hotely.com" name="email"/>
                            <ErrorMessage  className="error-message" name="email" component="div" />
                        </div>
                        <div className="mb-5">
                            <span className="field-label">Contraseña</span>
                            <Field type="password" className="input-field" placeholder="Ingrese su contraseña" name="password"/>
                            <ErrorMessage className="error-message" name="password" component="div" />

                        </div>
                        <div className="button-container">
                            <button className="button">
                                Iniciar sesi&oacute;n
                            </button>
                        </div>
                    </Form>
                    <span className="span-message">¿Todav&iacute;a no tienes una cuenta? <Link to='/register' className="text-blue-600 hover:underline underline-offset-8 ">¡Reg&iacute;strate! </Link > </span>
                </div>
            </div>
        </Formik>
    )
}

export default Login
