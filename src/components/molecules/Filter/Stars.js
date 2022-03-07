import { TiStar, TiStarOutline } from 'react-icons/ti';

const Stars = () => {
    return (
        <div className='pl-5 h-36 w-64 gap-2 flex flex-col items-start justify-center bg-gray-100'>
            <div className='flex flex-row items-center gap-2'>
                <input type='checkbox' className='cursor-pointer'/>
                <div className='flex flex-row items-center gap-1'>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/> 
                </div>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <input type='checkbox' className='cursor-pointer'/>
                <div className='flex flex-row items-center gap-1'>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStarOutline className='text-gray-300'/> 
                </div>
                
            </div>
            <div className='flex flex-row items-center gap-2'>
                <input type='checkbox' className='cursor-pointer'/>
                <div className='flex flex-row items-center gap-1'>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStarOutline className='text-gray-300'/>
                    <TiStarOutline className='text-gray-300'/> 
                </div>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <input type='checkbox' className='cursor-pointer'/>
                <div className='flex flex-row items-center gap-1'>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStarOutline className='text-gray-300'/>
                    <TiStarOutline className='text-gray-300'/>
                    <TiStarOutline className='text-gray-300'/>  
                </div>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <input type='checkbox' className='cursor-pointer'/>
                <div className='flex flex-row items-center gap-1'>
                    <TiStar className='text-yellow-400'/>
                    <TiStarOutline className='text-gray-300'/>
                    <TiStarOutline className='text-gray-300'/>
                    <TiStarOutline className='text-gray-300'/>
                    <TiStarOutline className='text-gray-300'/> 
                </div>
            </div>
        </div>
    )
}

export default Stars;
