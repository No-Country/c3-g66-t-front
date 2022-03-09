import { IoIosClose } from 'react-icons/io';

const Amenity = ( {amenities, onClickAmenity} ) => {

    const onClickOption1 = () => {
        !amenities.wifi ? onClickAmenity({
            ...amenities,
            wifi: 527
        }) : onClickAmenity({
            ...amenities,
            wifi: 0
        })
    };
    const onClickOption2 = () => {
        !amenities.parking ? onClickAmenity({
            ...amenities,
            parking: 524288
        }) : onClickAmenity({
            ...amenities,
            parking: 0
        })
    };

    return (
        <div className='flex flex-col justify-center h-14 w-full gap-2 bg-gray-100'>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption1}>Wifi</span>
                { (amenities.wifi !== 0) && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption1}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption2}>Estacionamiento</span>
                { (amenities.parking !== 0) && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption2} />}
            </div>
        </div>
    )
}

export default Amenity