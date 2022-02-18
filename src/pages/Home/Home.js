//import Search from "../../components/organisms/Search/Search";
import Navbar from "../../components/organisms/Navbar/Navbar";
import Section from "../../components/organisms/Section/Section";
import './home.css';

//agregué un fondo de ejemplo para que se vea el buscador. Después hay que sacarlo

const Home = () => {
    return (
        <div>
            <div className="">
              <Navbar />
              <Section /> 
            </div>
            <p>Home</p>
            
            
            <div className="fondoDeMuestra">
                
                
            </div>
            
        </div>
    )
}

export default Home;
