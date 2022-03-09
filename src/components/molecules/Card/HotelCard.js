

function HotelCard( {title, city, country, mainImg, key, price} ) {
    return (
   
        <div className="group bg-withe-700 flex flex-wrap sm:flex-inherit rounded-lg shadow-xl relative overflow-hidden mb-8 flex-row transform hover:scale-125 transition-all">
            <a className="contents" href="http://">
                <img className="relative w-full sm:max-w-xs sm:max-h-full max-h-48 object-cover" src={mainImg} alt="Img-hoteles" />
            </a>
            <div className="relative flex flex-col p-4">
                <h1 className="text-3xl mb-2 text-black">{title}</h1>
                <div className="small mb-2">
                    <p className="text-slate-400">{city}</p>
                </div>
                <div className="w-0 group-hover:w-48 h-1 rounded bg-green-400 duration-150">
                    
                </div>
                
                <ul className="flex flex-row flex-wrap justify-center mt-8">
                    <li className="inline-block px-4 py-1 bg-green-400 mr-2 cursor-default mb-1 rounded-lg">${price}</li>
                    <li className="inline-block px-4 py-1 bg-green-400 mr-2 cursor-default mb-1 rounded-lg">{country}</li>
                    <a className="inline-block px-1 py-1 text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0" href="">Ver detalles</a>
                </ul>
            </div>
        </div>
    
    );

}
    export default HotelCard;
