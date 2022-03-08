import { IoIosClose } from 'react-icons/io';

const Accomodation = ( {accomodation, onClickAccomodation} ) => {

    const onClickOption1 = () => {
        !accomodation[0].hotels ? onClickAccomodation([{
            ...accomodation[0],
            hotels: true
        }]) : onClickAccomodation([{
            ...accomodation[0],
            hotels: false
        }])
    };

    const onClickOption2 = () => {
        !accomodation[0].apartments ? onClickAccomodation([{
            ...accomodation[0],
            apartments: true
        }]) : onClickAccomodation([{
            ...accomodation[0],
            apartments: false
        }])
    };

    const onClickOption3 = () => {
        !accomodation[0].hostels ? onClickAccomodation([{
            ...accomodation[0],
            hostels: true
        }]) : onClickAccomodation([{
            ...accomodation[0],
            hostels: false
        }])
    };

    const onClickOption4 = () => {
        !accomodation[0].apartHotel ? onClickAccomodation([{
            ...accomodation[0],
            apartHotel: true
        }]) : onClickAccomodation([{
            ...accomodation[0],
            apartHotel: false
        }])
    };

    const onClickOption5 = () => {
        !accomodation[0].resorts ? onClickAccomodation([{
            ...accomodation[0],
            resorts: true
        }]) : onClickAccomodation([{
            ...accomodation[0],
            resorts: false
        }])
    };

    return (
        <div className='flex flex-col justify-center h-32 w-full gap-2 bg-gray-100'>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption1}>Hoteles</span>
                {accomodation[0].hotels && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption1}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption2}>Departamentos</span>
                {accomodation[0].apartments && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption2} />}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption3}>Hostels</span>
                {accomodation[0].hostels && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption3}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption4}>Apart-Hotels</span>
                {accomodation[0].apartHotel && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption4}/>}
            </div>
            <div className='flex flex-row items-center'>
                <span className='pl-5 text-xs cursor-pointer w-40 hover:text-gray-800 duration-700' onClick={onClickOption5}>Resorts</span>
                {accomodation[0].resorts && <IoIosClose className='cursor-pointer text-gray-400' onClick={onClickOption5}/>}
            </div>
        </div>
    )
}

export default Accomodation