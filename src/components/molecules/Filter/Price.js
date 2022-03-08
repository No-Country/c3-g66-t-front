import { IoIosClose } from 'react-icons/io';

const Price = ( {price, minPrice, maxPrice, onChangeMinPrice, onChangeMaxPrice, onClickPrice }) => {
    
    const getMinPrice = (e) => {
        onChangeMinPrice(e.target.value);
    };
    const getMaxPrice = (e) => {
        onChangeMaxPrice(e.target.value);
    };

    const onClickOption1 = () => {
        !price[0].hasta50mil && !price[0].de50milA100mil && !price[0].masDe100mil ? onClickPrice([{
            ...price[0],
            hasta50mil: true
        }]) : onClickPrice([{
            ...price[0],
            hasta50mil: false
        }])
    };
    const onClickOption2 = () => {
        !price[0].de50milA100mil && !price[0].hasta50mil && !price[0].masDe100mil ? onClickPrice([{
            ...price[0],
            de50milA100mil: true
        }]) : onClickPrice([{
            ...price[0],
            de50milA100mil: false
        }])
    };
    const onClickOption3 = () => {
        !price[0].masDe100mil && !price[0].de50milA100mil && !price[0].hasta50mil ? onClickPrice([{
            ...price[0],
            masDe100mil: true
        }]) : onClickPrice([{
            ...price[0],
            masDe100mil: false
        }])
    };

    return (
        <div className='flex flex-col justify-center h-28 w-full gap-2 bg-gray-100'>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption1}>Hasta $ 50.000</span>
                {price[0].hasta50mil && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption1}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption2}>$ 50.000 a $ 100.000</span>
                {price[0].de50milA100mil && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption2} />}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption3}>Más de $ 100.000</span>
                {price[0].masDe100mil && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption3}/>}
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