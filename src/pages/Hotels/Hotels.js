import Section from "../../components/organisms/Section/Section";
import Footer from '../../components/organisms/Footer/Footer';
import FilterSection from "../../components/organisms/Filter/FilterSection";
import HotelListContainer from "../../components/organisms/CardSection/HotelListContainer";
import './hotels.css';
import HotelsPages from "../../components/atoms/Buttons/Search/HotelsPages";

const Hotels = () => {
    return (
        <div>
            <div>
              <Section />
              <div className="p-5">
                 <HotelListContainer/>
              </div>
            </div>
            <div className='mainSection'>
                <FilterSection /> 
                
            </div>
            <HotelsPages/>
            <Footer/>
        </div>
    )
}

export default Hotels
