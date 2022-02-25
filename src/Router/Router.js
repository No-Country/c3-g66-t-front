import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import Navbar from '../components/organisms/Navbar/Navbar';
import HotelListContainer from '../components/organisms/CardSection/HotelListContainer';


const Router = () => {
    return (
        <BrowserRouter>
          <Navbar />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='*' element={<Navigate to='/'/>}/>
                <Route path='/hotels' element={<HotelListContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
