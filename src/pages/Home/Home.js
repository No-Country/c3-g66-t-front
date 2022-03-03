import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import Section from "../../components/organisms/Section/Section";
import Footer from '../../components/organisms/Footer/Footer';

const Home = () => {
    const navigate= useNavigate()
    const {logged} = useSelector(state => state.user.user) 
    useEffect(()=>{
        if(logged){
            navigate('/')            
        }
        else{
            navigate('/login')
        }
    },[logged,navigate])
    return (
        <div>
            <div>
              <Section />
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
