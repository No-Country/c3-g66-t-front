import { IoIosClose } from 'react-icons/io';

const Price = ( {price, minPrice, maxPrice, onChangeMinPrice, onChangeMaxPrice, onClickPrice }) => {
    
    const getMinPrice = (e) => {
        onChangeMinPrice(e.target.value);
    };
    const getMaxPrice = (e) => {
        onChangeMaxPrice(e.target.value);
    };

    const onClickOption1 = () => {
        !price.hasta50mil && !price.de50milA100mil && !price.masDe100mil ? onClickPrice({
            ...price,
            hasta50mil: 50000
        }) : onClickPrice({
            ...price,
            hasta50mil: 0
        })
    };
    const onClickOption2 = () => {
        !price.de50milA100mil && !price.hasta50mil && !price.masDe100mil ? onClickPrice({
            ...price,
            de50milA100mil: 100000
        }) : onClickPrice({
            ...price,
            de50milA100mil: 0
        })
    };
    const onClickOption3 = () => {
        !price.masDe100mil && !price.de50milA100mil && !price.hasta50mil ? onClickPrice({
            ...price,
            masDe100mil: 500000
        }) : onClickPrice({
            ...price,
            masDe100mil: 0
        })
    };

    return (
        <div className='flex flex-col justify-center h-28 w-full gap-2 bg-gray-100'>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption1}>Hasta $ 50.000</span>
                { (price.hasta50mil !== 0) && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption1}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption2}>$ 50.000 a $ 100.000</span>
                { (price.de50milA100mil !== 0) && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption2} />}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption3}>Más de $ 100.000</span>
                { (price.masDe100mil !== 0) && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption3}/>}
            </div>
            <div className='flex flex-row items-center justify-start pl-5 pb-1 w-full gap-4'>
                <div className="h-6 w-20 rounded shadow-md">
                    <input className='p-2 h-full w-full bg-white border border-gray-400 rounded text-xs focus:outline-none' onInput={getMinPrice} type='number' min='0' placeholder='Mínimo' value={minPrice}/>
                </div>
                <span className='text-sm text-gray-400'>-</span>
                <div className="h-6 w-20 rounded shadow-md">
                    <input className='p-2 h-full w-full rounded bg-white border border-gray-400 text-xs focus:outline-none' onInput={getMaxPrice} type='number' min='0' placeholder='Máximo' value={maxPrice}/>
                </div>
            </div>
        </div>
    )
}

export default Price