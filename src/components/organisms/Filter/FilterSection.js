import Points from '../../molecules/Filter/Points';
import Price from '../../molecules/Filter/Price';
import Stars from '../../molecules/Filter/Stars';

const FilterSection = () => {
    return (
        <div className='h-full flex flex-col justify-start items-center bg-gray-100'>
            <h3 className='text-lg pl-6 py-2 w-64 bg-gray-200'>Filtro</h3>
            <div className='flex flex-col'>
                <Price/>
                <Stars/>
                <Points/> 
            </div>
            
        </div>
    )
}

export default FilterSection
