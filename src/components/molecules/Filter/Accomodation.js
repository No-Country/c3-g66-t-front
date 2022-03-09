import { IoIosClose } from 'react-icons/io';

const Accomodation = ( {accomodation, onClickAccomodation} ) => {

    const onClickOption1 = () => {
        !accomodation.hotels ? onClickAccomodation({
            ...accomodation,
            hotels: 1
        }) : onClickAccomodation({
            ...accomodation,
            hotels: 0
        })
    };

    const onClickOption2 = () => {
        !accomodation.apartments ? onClickAccomodation({
            ...accomodation,
            apartments: 15
        }) : onClickAccomodation({
            ...accomodation,
            apartments: 0
        })
    };

    const onClickOption3 = () => {
        !accomodation.hostels ? onClickAccomodation({
            ...accomodation,
            hostels: 12
        }) : onClickAccomodation({
            ...accomodation,
            hostels: 0
        })
    };

    const onClickOption4 = () => {
        !accomodation.apartHotel ? onClickAccomodation({
            ...accomodation,
            apartHotel: 20
        }) : onClickAccomodation({
            ...accomodation,
            apartHotel: 0
        })
    };

    const onClickOption5 = () => {
        !accomodation.resorts ? onClickAccomodation({
            ...accomodation,
            resorts: 3
        }) : onClickAccomodation({
            ...accomodation,
            resorts: 0
        })
    };

    return (
        <div className='flex flex-col justify-center h-32 w-full gap-2 bg-gray-100'>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption1}>Hoteles</span>
                {(accomodation.hotels !== 0) && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption1}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption2}>Departamentos</span>
                {(accomodation.apartments !== 0) && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption2} />}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption3}>Hostels</span>
                {(accomodation.hostels !== 0) && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption3}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption4}>Apart-Hotels</span>
                {(accomodation.apartHotel !== 0) && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption4}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption5}>Resorts</span>
                {(accomodation.resorts !== 0) && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption5}/>}
            </div>
        </div>
    )
}

export default Accomodation