import Search from "../../components/organisms/Search/Search";
import './home.css';

//agregué un fondo de ejemplo para que se vea el buscador. Después hay que sacarlo

const Home = () => {
    return (
        <div>
            <p>Home</p>
            <div className="fondoDeMuestra">
                <Search/>
            </div>
            
        </div>
    )
}

export default Home;
