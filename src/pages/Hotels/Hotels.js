import Section from "../../components/organisms/Section/Section";
import Footer from '../../components/organisms/Footer/Footer';
import FilterSection from "../../components/organisms/Filter/FilterSection";
import HotelListContainer from "../../components/organisms/CardSection/HotelListContainer";
import HotelsPages from "../../components/atoms/Buttons/Search/HotelsPages";
import Searched from "../../components/atoms/Buttons/Search/Searched";
import './hotels.css';

const Hotels = () => {
    return (
        <div>
            <Section classname="bg-destiny-image w-full h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 gap-12"/>
            <div className="h-20 w-full flex flex-col-reverse bg-white sm:h-10 sm:flex-row sm:border-b sm:border-gray-200">
                <FilterSection/>
                <Searched/>
            </div>
            <div className="p-5 bg-gray-100">
                <HotelListContainer/>
            </div>
            <HotelsPages/>
            <Footer/>
        </div>
    )
}

export default Hotels
