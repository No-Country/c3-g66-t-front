import { IoIosClose } from 'react-icons/io';

const Categories = ( {categories, onClickCategory} ) => {

    const onClickOption1 = () => {
        !categories[0].business ? onClickCategory([{
                ...categories[0],
                business: true
            }]) : onClickCategory([{
                ...categories[0],
                business: false
            }])
    };
    const onClickOption2 = () => {
        !categories[0].familyFriendly ? onClickCategory([{
                ...categories[0],
                familyFriendly: true
            }]) : onClickCategory([{
                ...categories[0],
                familyFriendly: false
            }])
    };
    const onClickOption3 = () => {
        !categories[0].romantic ? onClickCategory([{
                ...categories[0],
                romantic: true
            }]) : onClickCategory([{
                ...categories[0],
                romantic: false
            }])
    };
    const onClickOption4 = () => {
        !categories[0].spaHotel ? onClickCategory([{
                ...categories[0],
                spaHotel: true
            }]) : onClickCategory([{
                ...categories[0],
                spaHotel: false
            }])
    };
    const onClickOption5 = () => {
        !categories[0].beach ? onClickCategory([{
                ...categories[0],
                beach: true
            }]) : onClickCategory([{
                ...categories[0],
                beach: false
            }])
    };
    const onClickOption6 = () => {
        !categories[0].adventure ? onClickCategory([{
                ...categories[0],
                adventure: true
            }]) : onClickCategory([{
                ...categories[0],
                adventure: false
            }])
    };
    const onClickOption7 = () => {
        !categories[0].historic ? onClickCategory([{
                ...categories[0],
                historic: true
            }]) : onClickCategory([{
                ...categories[0],
                historic: false
            }])
    };

    return (
        <div className='flex flex-col justify-center h-44 w-full gap-2 bg-gray-100'>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption1}>Negocios</span>
                {categories[0].business && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption1}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption2}>Familiar</span>
                {categories[0].familyFriendly && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption2}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption3}>Romántico</span>
                {categories[0].romantic && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption3}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption4}>Spa</span>
                {categories[0].spaHotel && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption4}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption5}>Playa</span>
                {categories[0].beach && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption5}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption6}>Aventura</span>
                {categories[0].adventure && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption6}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption7}>Histórico</span>
                {categories[0].historic && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption7}/>}
            </div>
        </div>
    )
}

export default Categories