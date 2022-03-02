import Navbar from "../../components/organisms/Navbar/Navbar";
import Section from "../../components/organisms/Section/Section";
import Footer from '../../components/organisms/Footer/Footer';
import FilterSection from "../../components/organisms/Filter/FilterSection";
import HotelListContainer from "../../components/organisms/CardSection/HotelListContainer";
import './hotels.css';

const Hotels = () => {
    return (
        <div>
            <div>
              <Navbar />
              <Section />
            </div>
            <div className='mainSection'>
                <FilterSection /> 
                <HotelListContainer/>
            </div>
            <Footer/>
        </div>
    )
}

export default Hotels
