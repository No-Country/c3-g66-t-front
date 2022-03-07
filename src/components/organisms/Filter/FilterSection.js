import Points from '../../molecules/Filter/Points';
import Price from '../../molecules/Filter/Price';
import Stars from '../../molecules/Filter/Stars';
import OrderBy from '../../molecules/Filter/OrderBy';
import { AiOutlineDown } from 'react-icons/ai';
import { useEffect, useState } from 'react';

const FilterSection = () => {

    const [filterActive, setFilterActive] = useState(false);
    const [priceActive, setPriceActive] = useState(false);
    const [starsActive, setStarsActive] = useState(false);
    const [pointsActive, setPointsActive] = useState(false);
    const [orderByActive, setOrderByActive] = useState(false);
    const [cleaned, setCleaned] = useState(false);

    const onShowPrice = () => {
        if (!priceActive){
           setPriceActive(true); 
        } else if (priceActive){
            setPriceActive(false); 
        };
    };

    const onShowFilter = () => {
        if (!filterActive){
            setFilterActive(true);
         } else if (filterActive){
            setFilterActive(false);
         };
    };

    const onShowStars = () => {
        if (!starsActive){
            setStarsActive(true);
         } else if (starsActive){
            setStarsActive(false);
         };
    };

    const onShowPoints = () => {
        if (!pointsActive){
            setPointsActive(true);
         } else if (pointsActive){
            setPointsActive(false);
         };
    };

    const onShowOrderBy = () => {
        if (!orderByActive){
            setOrderByActive(true);
         } else if (orderByActive){
            setOrderByActive(false);
         };
    };

    const onClean = () => {
        setCleaned(true);
    };

    /* LIMPIAR FILTRO
    useEffect(() => {
        if (cleaned){

        }
    }, [cleaned]);*/

    return (
        <div className='h-10 w-full flex flex-row justify-between bg-white'>
            <div className='bg-gray-100 w-64 absolute z-10' onMouseLeave={() => setFilterActive(false)}>
                <div className='flex flex-row items-center gap-1 pl-5 py-2 w-64 h-10 bg-white text-stone-900' >
                    <h3 className='text-base cursor-pointer' onClick={onShowFilter} >Filtrar Alojamientos</h3>
                    {!filterActive && <AiOutlineDown className='text-xs mt-1 text-gray-500' onClick={onShowFilter}/>}
                    {filterActive && <AiOutlineDown className='text-xs mt-1 text-gray-400' onClick={onShowFilter}/>}
                </div>
                {filterActive && <div className='w-64'>
                    <div className='flex flex-col items-start hover:bg-white'>
                        <ul className='flex flex-row items-center gap-1 pl-5 py-2'>
                            <li className='text-sm cursor-pointer font-semibold' onClick={onShowPrice}>Precio</li>
                            {!priceActive && <AiOutlineDown className='text-xs mt-0.5 text-gray-500 cursor-pointer' onClick={onShowPrice}/>}
                            {priceActive && <AiOutlineDown className='text-xs mt-0.5 text-gray-400 cursor-pointer' onClick={onShowPrice}/>}
                        </ul>
                        {priceActive && <Price/>}
                    </div> 
                    <div className='flex flex-col items-start hover:bg-white'>
                        <ul className='flex flex-row items-center gap-1 pl-5 py-2'>
                            <li className='text-sm cursor-pointer font-semibold' onClick={onShowStars}>Calidad</li>
                            {!starsActive && <AiOutlineDown className='text-xs mt-0.5 text-gray-500 cursor-pointer' onClick={onShowStars}/>}
                            {starsActive && <AiOutlineDown className='text-xs mt-0.5 text-gray-400 cursor-pointer' onClick={onShowStars}/>}
                        </ul>
                        {starsActive && <Stars/>}
                    </div>
                    <div className='flex flex-col items-start hover:bg-white'>
                        <ul className='flex flex-row items-center gap-1 pl-5 py-2'>
                            <li className='text-sm cursor-pointer font-semibold' onClick={onShowPoints}>Calificación</li>
                            {!pointsActive && <AiOutlineDown className='text-xs mt-0.5 text-gray-500 cursor-pointer' onClick={onShowPoints}/>}
                            {pointsActive && <AiOutlineDown className='text-xs mt-0.5 text-gray-400 cursor-pointer' onClick={onShowPoints}/>}
                        </ul>
                        {pointsActive && <Points/>}
                    </div>
                    <div className='flex flex-col items-start hover:bg-white'>
                        <ul className='flex flex-row items-center gap-1 pl-5 py-2'>
                            <li className='text-sm cursor-pointer font-semibold' onClick={onShowOrderBy}>Ordenar por</li>
                            {!orderByActive && <AiOutlineDown className='text-xs mt-0.5 text-gray-500 cursor-pointer' onClick={onShowOrderBy}/>}
                            {orderByActive && <AiOutlineDown className='text-xs mt-0.5 text-gray-400 cursor-pointer' onClick={onShowOrderBy}/>}
                        </ul>
                        {orderByActive && <OrderBy/>}
                    </div>
                    <div className='flex flex-row justify-center items-center gap-2 pb-3 pt-2'>
                        <button className='text-xs hover:bg-gray-200 border hover:border-gray-300 hover:text-gray-800 font-semibold w-24 h-8
                         text-gray-900 bg-white border-gray-400 rounded-lg cursor-pointer duration-700'>Filtrar</button>
                        <h4 className='text-xs font-semibold hover:text-gray-700 text-stone-900 hover:cursor-pointer duration-700' onClick={onClean}>Limpiar Filtros</h4>
                    </div>
                </div>}
            </div>
            <h3>X Resultados</h3>
        </div>
    )
}

export default FilterSection
