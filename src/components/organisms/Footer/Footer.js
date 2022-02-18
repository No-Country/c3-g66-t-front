import { AiOutlineInstagram } from 'react-icons/ai';
import { ImFacebook, ImTwitter } from 'react-icons/im'
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-stone-900 pt-10">
            <div className="w-10/12 m-auto flex flex-wrap justify-left gap-x-20 gap-y-5">
                <div className="p-5">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Empresa
                    </div>
                    <a href="#" className='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'>
                        Sobre Nosotros
                    </a>
                    <a href="#" className='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'>
                        Contacto
                    </a>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Desarrolladores
                    </a>
                </div>

                <div className="p-5">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Soporte
                    </div>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Ayuda
                    </a>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Preguntas Frecuentes
                    </a>
                </div>

                <div className="p-5">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Legal
                    </div>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Términos y condiciones
                    </a>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Políticas de privacidad
                    </a>
                </div>
            </div>

            <div className="pt-2">
                <div className="flex pb-5 px-3 m-auto pt-5 gap-y-3
                    border-t border-gray-500 text-gray-400 text-sm 
                    flex-col md:flex-row w-10/12">
                    <div className="mt-2 flex flex-row md:flex-auto md:flex-row ">
                        <a href="#" className="w-6 mx-1" >
                            <AiOutlineInstagram/>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <ImTwitter/>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <FaYoutube/>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <ImFacebook/>
                        </a>
                    </div>
                    <div className="mt-2 text-xs lg:text-sm">
                        © 2022 No-Country-G66. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
