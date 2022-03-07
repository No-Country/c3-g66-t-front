import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';

const Price = () => {

    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [option1Active, setOption1Active] = useState(false);
    const [option2Active, setOption2Active] = useState(false);
    const [option3Active, setOption3Active] = useState(false);
    
    const getMinPrice = (e) => {
        setMinPrice(e.target.value);
    };
    const getMaxPrice = (e) => {
        setMaxPrice(e.target.value);
    };

    const onClickOption1 = () => {
        if (!option1Active && !option2Active &&!option3Active){
            setOption1Active(true);
        } else if (option1Active){
            setOption1Active(false);
        };
    };

    const onClickOption2 = () => {
        if (!option2Active && !option1Active && !option3Active){
            setOption2Active(true);
        } else if (option2Active){
            setOption2Active(false);
        };
    };

    const onClickOption3 = () => {
        if (!option3Active && !option1Active && !option2Active){
            setOption3Active(true);
        } else if (option3Active){
            setOption3Active(false);
        };
    };

    return (
        <div className='flex flex-col justify-center h-32 w-full gap-2 bg-gray-100'>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption1}>Hasta $ 50.000</span>
                {option1Active && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption1}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption2}>$ 50.000 a $ 100.000</span>
                {option2Active && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption2} />}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption3}>Más de $ 100.000</span>
                {option3Active && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption3}/>}
            </div>
            <div className='flex flex-row items-center justify-start pl-5 w-full gap-4'>
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
