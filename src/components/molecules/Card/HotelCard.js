import {AiTwotoneEnvironment} from "react-icons/ai"
import { VscTriangleRight } from "react-icons/vsc";

function HotelCard( {title, city, country, mainImg, key} ) {
    return (
   <div className="p-5">
        <div className="w-60 p-15 rounded-lg mx-auto flex flex-col items-center transform hover:scale-125 transition-all">
           <img className="w-70 h-80  rounded-full h-auto" src={mainImg} alt="" />
           <h3 className="text-lg font-bold text-neutral-200 px-2">{title}</h3>
            
            <div className=" py-2 flex  flex-wrap items-center">
                <div className="flex items-center">
                    <AiTwotoneEnvironment className="text-slate-200" />
                    <h4 className="px-1 text-sm font-semibold text-slate-200">{city}, {country}</h4>
                </div>
                <div className="flex items-center">
                    <VscTriangleRight className="text-slate-200" />
                    <a className="px-1 text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0" href=""> Ver detalles</a>
                 </div>  
            </div>     
         </div>
    </div> 
    );

}
    export default HotelCard;
