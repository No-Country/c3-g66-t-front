import './filter.css';
import { AiOutlineDown } from 'react-icons/ai';
import { useState } from 'react';
import Categories from '../../molecules/Filter/Categories';
import Accomodation from '../../molecules/Filter/Accomodation';
import Amenity from '../../molecules/Filter/Amenity';
import Price from '../../molecules/Filter/Price';
import Stars from '../../molecules/Filter/Stars';
import Points from '../../molecules/Filter/Points';
import Button from '../../molecules/Filter/Button';

const FilterSection = () => {

    //Filter
    const [filterActive, setFilterActive] = useState(false);
    const [categoriesActive, setCategoriesActive] = useState(false);
    const [accomodationActive, setAccomodationActive] = useState(false);
    const [amenityActive, setAmenityActive] = useState(false);
    const [priceActive, setPriceActive] = useState(false);
    const [starsActive, setStarsActive] = useState(false);
    const [pointsActive, setPointsActive] = useState(false);
    //Categories
    const [categories, setCategories] = useState([{
        beach: false,
        historic: false,
        business: false,
        familyFriendly: false,
        romantic: false,
        spaHotel: false,
        adventure: false
    }]);
    //Accomodation
    const [accomodation, setAccomodation] = useState([{
        hotels: false,
        apartments: false,
        hostels: false,
        apartHotel:false,
        resorts: false
    }]);
    //Amenity
    const [amenities, setAmenities] = useState([{
        wifi: false,
        parking: false
    }]);
    //Prices
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [price, setPrice] = useState([{
        hasta50mil: false,
        de50milA100mil: false,
        masDe100mil: false
    }]);
    //Stars
    const [stars, setStars] = useState([{
        fiveStarsChecked: false,
        fourStarsChecked: false,
        threeStarsChecked: false,
        twoStarsChecked: false,
        oneStarChecked: false
    }]);
    //Points
    const [minPoint, setMinPoint] = useState('');
    const [maxPoint, setMaxPoint] = useState('');

    //Filter functions
    const onShowFilter = () => {
        if (!filterActive){
            setFilterActive(true);
        } else if (filterActive){
            setFilterActive(false);
        };
    };
    const onShowCategories = () => {
        if (!categoriesActive){
            setCategoriesActive(true);
        } else if (categoriesActive){
            setCategoriesActive(false);
        };
    };
    const onShowAccomodation = () => {
        if (!accomodationActive){
            setAccomodationActive(true);
        } else if (accomodationActive){
            setAccomodationActive(false);
        };
    };
    const onShowAmenity = () => {
        if (!amenityActive){
            setAmenityActive(true);
        } else if (amenityActive){
            setAmenityActive(false);
        };
    };
    const onShowPrice = () => {
        if (!priceActive){
            setPriceActive(true); 
        } else if (priceActive){
            setPriceActive(false); 
        };
    };
    const onShowStars = () => {
        if (!starsActive){
            setStarsActive(true);
        } else if (starsActive){
            setStarsActive(false);
        };
    };
    const onShowPoints = () => {
        if (!pointsActive){
            setPointsActive(true);
        } else if (pointsActive){
            setPointsActive(false);
        };
    };
    //Categories function
    const onClickCategory = (newValue) => {
        setCategories(newValue);
    };
    //Accomodation function
    const onClickAccomodation = (newValue) => {
        setAccomodation(newValue);
    };
    //Amenity function
    const onClickAmenity = (newValue) => {
        setAmenities(newValue);
    };
    //Prices functions
    const getMinPrice = (newMinPrice) => {
        setMinPrice(newMinPrice);
    };
    const getMaxPrice = (newMaxPrice) => {
        setMaxPrice(newMaxPrice);
    };
    const onClickPrice = (newValue) => {
        setPrice(newValue);
    };
    //Stars function
    const onChangeStarsChecked = (newValue) => {
        setStars(newValue);
        console.log(stars);
    };
    //Points functions
    const getMinPoint = (newMinPoint) => {
        setMinPoint(newMinPoint);
    };
    const getMaxPoint = (newMaxPoint) => {
        setMaxPoint(newMaxPoint);
    };
    //Clean Filter function
    const onClean = () => {
        setMinPrice('');
        setMaxPrice('');
        setPrice([{
            hasta50mil: false,
            de50milA100mil: false,
            masDe100mil: false}]);
        setStars([{
            fiveStarsChecked: false,
            fourStarsChecked: false,
            threeStarsChecked: false,
            twoStarsChecked: false,
            oneStarChecked: false}]);
        setMinPoint('');
        setMaxPoint('');
        setAccomodation([{
            hotels: false,
            apartments: false,
            hostels: false,
            apartHotel:false,
            resorts: false}]);
        setAmenities([{
            wifi: false,
            parking: false}]);
        setCategories([{
            beach: false,
            business: false,
            familyFriendly: false,
            romantic: false,
            spaHotel: false}]);
    };

    return (
        <div className='containter-filter'>
            <div className='filter' onMouseLeave={() => setFilterActive(true)}>
                <div className='container-main-title-icon' >
                    <h3 className='filter-title' onClick={onShowFilter} >Filtrar Búsqueda</h3>
                    {!filterActive ? <AiOutlineDown className='icons-closed' onClick={onShowFilter}/> : <AiOutlineDown className='icons-open' onClick={onShowFilter}/>}
                </div>
                {filterActive && <div className='w-64'>
                    <div className='container-filters-titles'>
                        <ul className='containter-icons-titles' onClick={onShowCategories}>
                            <li className='filter-titles'>Categorías</li>
                            {!categoriesActive ? <AiOutlineDown className='icons-closed'/> : <AiOutlineDown className='icons-open' onClick={onShowCategories}/>}
                        </ul>
                        {categoriesActive && <Categories categories={categories} onClickCategory={onClickCategory} />}
                    </div>
                    <div className='container-filters-titles'>
                        <ul className='containter-icons-titles' onClick={onShowAccomodation}>
                            <li className='filter-titles'>Alojamientos</li>
                            {!accomodationActive ? <AiOutlineDown className='icons-closed'/> : <AiOutlineDown className='icons-open' onClick={onShowAccomodation}/>}
                        </ul>
                        {accomodationActive && <Accomodation accomodation={accomodation} onClickAccomodation={onClickAccomodation} />}
                    </div>
                    <div className='container-filters-titles'>
                        <ul className='containter-icons-titles' onClick={onShowAmenity}>
                            <li className='filter-titles'>Comodidades</li>
                            {!amenityActive ? <AiOutlineDown className='icons-closed'/> : <AiOutlineDown className='icons-open' onClick={onShowAmenity}/>}
                        </ul>
                        {amenityActive && <Amenity amenities={amenities} onClickAmenity={onClickAmenity}/>}
                    </div> 
                    <div className='container-filters-titles'>
                        <ul className='containter-icons-titles' onClick={onShowPrice}>
                            <li className='filter-titles'>Precio</li>
                            {!priceActive ? <AiOutlineDown className='icons-closed'/> : <AiOutlineDown className='icons-open' onClick={onShowPrice}/>}
                        </ul>
                        {priceActive && <Price minPrice={minPrice} maxPrice={maxPrice} onChangeMinPrice={getMinPrice} onChangeMaxPrice={getMaxPrice} price={price} onClickPrice={onClickPrice}/>}
                    </div> 
                    <div className='container-filters-titles'>
                        <ul className='containter-icons-titles' onClick={onShowStars}>
                            <li className='filter-titles'>Calidad</li>
                            {!starsActive ? <AiOutlineDown className='icons-closed'/> : <AiOutlineDown className='icons-open' onClick={onShowStars}/>}
                        </ul>
                        {starsActive && <Stars stars={stars} onChangeStarsChecked={onChangeStarsChecked}/>}
                    </div>
                    <div className='container-filters-titles'>
                        <ul className='containter-icons-titles' onClick={onShowPoints}>
                            <li className='filter-titles'>Calificación</li>
                            {!pointsActive ? <AiOutlineDown className='icons-closed'/> : <AiOutlineDown className='icons-open' onClick={onShowPoints}/>}
                        </ul>
                        {pointsActive && <Points minPoint={minPoint} maxPoint={maxPoint} onChangeMinPoint={getMinPoint} onChangeMaxPoint={getMaxPoint}/>}
                    </div>
                    <div className='container-button-clean'>
                        <Button categories={categories} accomodation={accomodation} amenities={amenities} price={price} minPrice={minPrice} maxPrice={maxPrice} stars={stars} minPoint={minPoint} maxPoint={maxPoint}/>
                        <h4 className='clean-filter' onClick={onClean}>Limpiar Filtros</h4>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default FilterSection