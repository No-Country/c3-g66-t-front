import { useState } from 'react';

const Price = () => {

    const [price, setPrice] = useState(10000);

    const getPrice = (e) => {
        setPrice(e.target.value);
    };

    return (
        <div className='pl-6 py-2 h-40 w-64 gap-4 flex flex-col items-start justify-center bg-gray-100'>
            <h3 className='font-sans text-base text-stone-900'>Precio</h3>
            <div className='flex items-center h-16 w-52 bg-white border border-gray-300 rounded-lg shadow-md'>
                <div className="flex flex-row items-center p-2 h-28 w-44 gap-1.5">
                    <div className="text-sm text-stone-900">0</div>
                    <input onInput={getPrice} type='range' min='1000' max='10000' step='1000' value={price}/>
                    <div className="text-sm text-stone-900">{price}</div>
                </div>
            </div>
        </div>
    )
}

export default Price
