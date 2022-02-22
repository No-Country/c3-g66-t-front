

function HotelCard() {
    return (
   <div className="bg-green-500">
        <div className="w-80 p-10 bg-black/20 rounded-lg mx-auto flex flex-wrap items-center">
           <img className="w-1/3 rounded-full h-auto" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
           <h3 className="text-lg font-bold text-neutral-200 px-2">Nombre Hotel</h3>
           <h4 className="text-sm font-semibold text-slate-200">Ubicación</h4>
           <div className=" py-2flex items-center flex-wrap">
               <a className="px-2 text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0" href="">Ver detalles</a>
           </div>
        </div>
    </div> 
    );

}
    export default HotelCard;
