import Section from "../../components/organisms/Section/Section";
import Footer from '../../components/organisms/Footer/Footer';

const Home = () => {
    return (
        <div>
            <div>
              <Section classname="bg-hero-image w-full h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 gap-8" />
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
