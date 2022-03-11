import { TiStar, TiStarOutline } from 'react-icons/ti';

const Stars = ( { stars, onChangeStarsChecked} ) => {

    const handleChecked1 = () => {
        !stars.fiveStarsChecked ? onChangeStarsChecked({
            ...stars,
            fiveStarsChecked: 5
        }) : onChangeStarsChecked({
            ...stars,
            fiveStarsChecked: 0
        })
    };
    const handleChecked2 = () => {
        !stars.fourStarsChecked ? onChangeStarsChecked({
            ...stars,
            fourStarsChecked: 4
        }) : onChangeStarsChecked({
            ...stars,
            fourStarsChecked: 0
        })
    };
    const handleChecked3 = () => {
        !stars.threeStarsChecked ? onChangeStarsChecked({
            ...stars,
            threeStarsChecked: 3
        }) : onChangeStarsChecked({
            ...stars,
            threeStarsChecked: 0
        })
    };
    const handleChecked4 = () => {
        !stars.twoStarsChecked ? onChangeStarsChecked({
            ...stars,
            twoStarsChecked: 2
        }) : onChangeStarsChecked({
            ...stars,
            twoStarsChecked: 0
        })
    };
    const handleChecked5 = () => {
        !stars.oneStarChecked ? onChangeStarsChecked({
            ...stars,
            oneStarChecked: 1
        }) : onChangeStarsChecked({
            ...stars,
            oneStarChecked: 0
        })
    };

    return (
        <div className='pl-5 h-32 w-64 gap-2 flex flex-col items-start justify-center bg-gray-100 border-r border-gray-200'>
            <div className='flex flex-row items-center gap-2' onClick={handleChecked1}>
                <input type='checkbox' className='cursor-pointer' onChange={handleChecked1} checked={(stars.fiveStarsChecked !== 0)}/>
                <div className='flex flex-row items-center gap-1 cursor-pointer'>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/> 
                </div>
            </div>
            <div className='flex flex-row items-center gap-2' onClick={handleChecked2}>
                <input type='checkbox' className='cursor-pointer' onChange={handleChecked2} checked={(stars.fourStarsChecked !== 0)}/>
                <div className='flex flex-row items-center gap-1 cursor-pointer'>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStarOutline className='text-gray-300'/> 
                </div>
            </div>
            <div className='flex flex-row items-center gap-2' onClick={handleChecked3}>
                <input type='checkbox' className='cursor-pointer' onChange={handleChecked3} checked={(stars.threeStarsChecked !== 0)}/>
                <div className='flex flex-row items-center gap-1 cursor-pointer'>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStarOutline className='text-gray-300'/>
                    <TiStarOutline className='text-gray-300'/> 
                </div>
            </div>
            <div className='flex flex-row items-center gap-2' onClick={handleChecked4}>
                <input type='checkbox' className='cursor-pointer' onChange={handleChecked4} checked={(stars.twoStarsChecked !== 0)}/>
                <div className='flex flex-row items-center gap-1 cursor-pointer'>
                    <TiStar className='text-yellow-400'/>
                    <TiStar className='text-yellow-400'/>
                    <TiStarOutline className='text-gray-300'/>
                    <TiStarOutline className='text-gray-300'/>
                    <TiStarOutline className='text-gray-300'/>  
                </div>
            </div>
            <div className='flex flex-row items-center gap-2' onClick={handleChecked5}>
                <input type='checkbox' className='cursor-pointer' onChange={handleChecked5} checked={(stars.oneStarChecked !== 0)}/>
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