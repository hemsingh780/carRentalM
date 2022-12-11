// import React from 'react'
import "./Headers.css"
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import {
  Link
} from 'react-router-dom';

const Header = () => {
  

//   style= {{
//     backgroundColor: "#cccc",
//     height: "100px",
//     color: 'yellow'
// }}

  return ( 


    <div className='header-main'>
        <div className='logo'>
           <span className='logo-span-main'>
            {/* <span className='logo-c'>C</span>AR<span className='logo-sha'>SHA</span>RE */}
           <DirectionsCarFilledIcon 
             style={{
              
              cursor: "pointer"
             }}
           />           
          </span>  
        </div>
        <div className='header-parent'>
          <div>
             <Link to="/">Home</Link> 
          </div>
          <div>
              <Link to="/aboutUs">about us</Link> 
          </div>
          <div>
              <Link to="/carsCollections">carsCollection</Link> 
          </div>
          <div>
              <Link to="/contactus">Contact us</Link> 
          </div>
          <div>
              <Link to="/Login">Login</Link> 
          </div>
        </div>
      </div>


  )
}

export default Header