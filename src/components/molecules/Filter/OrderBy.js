import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';

const OrderBy = () => {

    const [option1Active, setOption1Active] = useState(false);
    const [option2Active, setOption2Active] = useState(false);
    const [option3Active, setOption3Active] = useState(false);

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
        <div className='flex flex-col justify-center h-24 w-full gap-2 bg-gray-100'>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption1}>Mejor calidad</span>
                {option1Active && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption1}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption2}>Mejores calificados</span>
                {option2Active && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption2} />}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption3}>Más baratos</span>
                {option3Active && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption3}/>}
            </div>
        </div>
    )
}

export default OrderBy