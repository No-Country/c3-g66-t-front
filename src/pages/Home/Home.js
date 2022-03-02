import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import Navbar from "../../components/organisms/Navbar/Navbar";
import Section from "../../components/organisms/Section/Section";
import './home.css';

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
              <Navbar />
              <Section /> 
            </div>
        </div>
    );
};

export default Home;
