  // "proxy": {
  //   "/api": {
  //     "target": "https://localhost:8000",
  //     "secure": false
  //   }
  // }
import './App.css';
// import Hcard from './components/Hcard';
import Header from './components/Header';
import CarsCollection from './pages/CarsCollection/CarsCollection';
import Landing from './pages/Landing';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Contactus from './pages/ContactUs/Contactus';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Aboutus from './pages/Aboutus/Aboutus';
import Footer from './components/Footer';
import CarCheckoutModel from './pages/CarCheckoutModel/CarCheckoutModel';
import Admin from './pages/Admin/Admin';
import User from './pages/Admin/Users/User';

// import HomeFrontFrom from './components/HomeFrontFrom';

function App() {


  return (
    <>
  <Header />
    {/* <Login /> */}

<div style={{
  height:"46px"
}}></div>

   <Routes> 
    <Route  path='/' element={<Landing />} />
    <Route  path='/carsCollections' element={<CarsCollection />} />
    <Route  path="/contactus" element={<Contactus />} />
    <Route  path="/login" element={<Login />} />
    <Route  path="/register" element={<Register />} />
    <Route  path="/aboutus" element={<Aboutus />} />
    <Route  path="/admin/adminCars" element={<CarsCollection marginFromAdmin="11%" isFromAdmin={true} />} />
    <Route  path='/admin/Users' element={<User />} />
  </Routes> 
<Footer />
{/* <CarCheckoutModel /> */}

{/* <CarsCollection /> */}
{/* <Admin /> */}
</>


  );
}

export default App;
