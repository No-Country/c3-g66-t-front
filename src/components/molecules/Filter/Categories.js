import { IoIosClose } from 'react-icons/io';

const Categories = ( {categories, onClickCategory} ) => {

    const onClickOption1 = () => {
        !categories.business ? onClickCategory({
                ...categories,
                business: 14
            }) : onClickCategory({
                ...categories,
                business: 0
            })
    };
    const onClickOption2 = () => {
        !categories.familyFriendly ? onClickCategory({
                ...categories,
                familyFriendly: 25
            }) : onClickCategory({
                ...categories,
                familyFriendly: 0
            })
    };
    const onClickOption3 = () => {
        !categories.romantic ? onClickCategory({
                ...categories,
                romantic: 1
            }) : onClickCategory({
                ...categories,
                romantic: 0
            })
    };
    const onClickOption4 = () => {
        !categories.spaHotel ? onClickCategory({
                ...categories,
                spaHotel: 27
            }) : onClickCategory({
                ...categories,
                spaHotel: 0
            })
    };
    const onClickOption5 = () => {
        !categories.beach ? onClickCategory({
                ...categories,
                beach: 6
            }) : onClickCategory({
                ...categories,
                beach: 0
            })
    };
    const onClickOption6 = () => {
        !categories.adventure ? onClickCategory({
                ...categories,
                adventure: 18
            }) : onClickCategory({
                ...categories,
                adventure: 0
            })
    };
    const onClickOption7 = () => {
        !categories.historic ? onClickCategory({
                ...categories,
                historic: 2
            }) : onClickCategory({
                ...categories,
                historic: 0
            })
    };

    return (
        <div className='flex flex-col justify-center h-44 w-full gap-2 bg-gray-100'>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption1}>Negocios</span>
                {(categories.business !== 0) && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption1}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption2}>Familiar</span>
                {(categories.familyFriendly !== 0) && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption2}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption3}>Romántico</span>
                {(categories.romantic !== 0) && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption3}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption4}>Spa</span>
                {(categories.spaHotel !== 0) && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption4}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption5}>Playa</span>
                {(categories.beach !== 0) && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption5}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption6}>Aventura</span>
                {(categories.adventure !== 0) && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption6}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption7}>Histórico</span>
                {(categories.historic !== 0) && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption7}/>}
            </div>
        </div>
    )
}

export default Categories