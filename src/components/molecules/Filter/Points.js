import { useState } from 'react';

const Points = () => {

    const [inputValue, setInputValue] = useState(10);

    const getValue = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className='pl-6 py-2 h-40 w-64 gap-4 flex flex-col items-start justify-center bg-gray-100'>
            <h3 className='font-sans text-base text-stone-900'>Puntuación</h3>
            <div className='flex items-center h-16 w-52 bg-white border border-gray-300 rounded-lg shadow-md'>
                <div className="flex flex-row items-center justify-center p-2 h-28 w-44 gap-1.5">
                    <div className="text-sm text-stone-900">0</div>
                    <input onInput={getValue} type='range' min='0' max='10' step='1' value={inputValue}/>
                    <div className="text-sm text-stone-900">{inputValue}</div>
                </div>
            </div>
        </div>
    )
}

export default Points
