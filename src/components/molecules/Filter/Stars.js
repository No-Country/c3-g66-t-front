import { TiStar, TiStarOutline } from 'react-icons/ti';

const Stars = () => {
    return (
        <div className='pl-6 py-2 h-52 w-64 gap-4 flex flex-col items-start justify-center bg-gray-100'>
            <h3 className='font-sans text-base text-stone-900'>Calidad</h3>
            <div className='h-36 w-52 flex flex-col justify-center pl-2 gap-2 bg-white border border-gray-300 rounded-lg shadow-md'>
                <div className='flex flex-row items-center gap-2'>
                    <input type='checkbox'/>
                    <div className='flex flex-row items-center gap-1'>
                        <TiStar className='text-yellow-400'/>
                        <TiStar className='text-yellow-400'/>
                        <TiStar className='text-yellow-400'/>
                        <TiStar className='text-yellow-400'/>
                        <TiStar className='text-yellow-400'/> 
                    </div>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <input type='checkbox' />
                    <div className='flex flex-row items-center gap-1'>
                        <TiStar className='text-yellow-400'/>
                        <TiStar className='text-yellow-400'/>
                        <TiStar className='text-yellow-400'/>
                        <TiStar className='text-yellow-400'/>
                        <TiStarOutline className='text-gray-300'/> 
                    </div>
                    
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <input type='checkbox' />
                    <div className='flex flex-row items-center gap-1'>
                        <TiStar className='text-yellow-400'/>
                        <TiStar className='text-yellow-400'/>
                        <TiStar className='text-yellow-400'/>
                        <TiStarOutline className='text-gray-300'/>
                        <TiStarOutline className='text-gray-300'/> 
                    </div>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <input type='checkbox' />
                    <div className='flex flex-row items-center gap-1'>
                        <TiStar className='text-yellow-400'/>
                        <TiStar className='text-yellow-400'/>
                        <TiStarOutline className='text-gray-300'/>
                        <TiStarOutline className='text-gray-300'/>
                        <TiStarOutline className='text-gray-300'/>  
                    </div>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <input type='checkbox' />
                    <div className='flex flex-row items-center gap-1'>
                        <TiStar className='text-yellow-400'/>
                        <TiStarOutline className='text-gray-300'/>
                        <TiStarOutline className='text-gray-300'/>
                        <TiStarOutline className='text-gray-300'/>
                        <TiStarOutline className='text-gray-300'/> 
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Stars;
