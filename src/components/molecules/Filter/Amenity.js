import { IoIosClose } from 'react-icons/io';

const Amenity = ( {amenities, onClickAmenity} ) => {

    const onClickOption1 = () => {
        !amenities[0].wifi ? onClickAmenity([{
            ...amenities,
            wifi: true
        }]) : onClickAmenity([{
            ...amenities,
            wifi: false
        }])
    };
    const onClickOption2 = () => {
        !amenities[0].parking ? onClickAmenity([{
            ...amenities[0],
            parking: true
        }]) : onClickAmenity([{
            ...amenities[0],
            parking: false
        }])
    };

    return (
        <div className='flex flex-col justify-center h-14 w-full gap-2 bg-gray-100'>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption1}>Wifi</span>
                {amenities[0].wifi && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption1}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption2}>Estacionamiento</span>
                {amenities[0].parking && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption2} />}
            </div>
        </div>
    )
}

export default Amenity