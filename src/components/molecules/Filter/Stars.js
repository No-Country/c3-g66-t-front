import { TiStar, TiStarOutline } from 'react-icons/ti';

const Stars = ( { stars, onChangeStarsChecked} ) => {

    const handleChecked1 = () => {
        !stars[0].fiveStarsChecked ? onChangeStarsChecked([{
            ...stars[0],
            fiveStarsChecked: true
        }]) : onChangeStarsChecked([{
            ...stars[0],
            fiveStarsChecked: false
        }])
    };
    const handleChecked2 = () => {
        !stars[0].fourStarsChecked ? onChangeStarsChecked([{
            ...stars[0],
            fourStarsChecked: true
        }]) : onChangeStarsChecked([{
            ...stars[0],
            fourStarsChecked: false
        }])
    };
    const handleChecked3 = () => {
        !stars[0].threeStarsChecked ? onChangeStarsChecked([{
            ...stars[0],
            threeStarsChecked: true
        }]) : onChangeStarsChecked([{
            ...stars[0],
            threeStarsChecked: false
        }])
    };
    const handleChecked4 = () => {
        !stars[0].twoStarsChecked ? onChangeStarsChecked([{
            ...stars[0],
            twoStarsChecked: true
        }]) : onChangeStarsChecked([{
            ...stars[0],
            twoStarsChecked: false
        }])
    };
    const handleChecked5 = () => {
        !stars[0].oneStarChecked ? onChangeStarsChecked([{
            ...stars[0],
            oneStarChecked: true
        }]) : onChangeStarsChecked([{
            ...stars[0],
            oneStarChecked: false
        }])
    };

    return (
        <div className='pl-5 h-32 w-64 gap-2 flex flex-col items-start justify-center bg-gray-100'>
            <div className='flex flex-row items-center gap-2' onClick={handleChecked1}>
                <input type='checkbox' className='cursor-pointer' onChange={handleChecked1} checked={stars[0].fiveStarsChecked}/>
                <div className='flex flex-row items-center gap-1 cursor-pointer'>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/> 
                </div>
            </div>
            <div className='flex flex-row items-center gap-2' onClick={handleChecked2}>
                <input type='checkbox' className='cursor-pointer' onChange={handleChecked2} checked={stars[0].fourStarsChecked}/>
                <div className='flex flex-row items-center gap-1 cursor-pointer'>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStarOutline className='text-gray-300'/> 
                </div>
            </div>
            <div className='flex flex-row items-center gap-2' onClick={handleChecked3}>
                <input type='checkbox' className='cursor-pointer' onChange={handleChecked3} checked={stars[0].threeStarsChecked}/>
                <div className='flex flex-row items-center gap-1 cursor-pointer'>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStarOutline className='text-gray-300'/>
                    <TiStarOutline className='text-gray-300'/> 
                </div>
            </div>
            <div className='flex flex-row items-center gap-2' onClick={handleChecked4}>
                <input type='checkbox' className='cursor-pointer' onChange={handleChecked4} checked={stars[0].twoStarsChecked}/>
                <div className='flex flex-row items-center gap-1 cursor-pointer'>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStarOutline className='text-gray-300'/>
                    <TiStarOutline className='text-gray-300'/>
                    <TiStarOutline className='text-gray-300'/>  
                </div>
            </div>
            <div className='flex flex-row items-center gap-2' onClick={handleChecked5}>
                <input type='checkbox' className='cursor-pointer' onChange={handleChecked5} checked={stars[0].oneStarChecked}/>
                <div className='flex flex-row items-center gap-1 cursor-pointer'>
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