import React from 'react'
import "./Headers.css"
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import {
  Link
} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';





const Userlogin   = ({nameofuser}) => {
     return(
      <div style={{
        display:"flex",
        
      }}>

          <div
            style={{
              display:"flex",
              justifyContent:"center",
              alignSelf:"center",
              marginRight:'4px'
            }}
          >
             <AccountCircleIcon />
          </div>
          <div>
              {nameofuser}
          </div>
      </div>
     )
  } 

const Header = () => {
  

//   style= {{
//     backgroundColor: "#cccc",
//     height: "100px",
//     color: 'yellow'
// }}
let [currentUser , setCurrentUser] = React.useState(false)
let isuser  = false;

React.useEffect(() => {
  let name = window.localStorage.getItem('username');
  setCurrentUser(name)
} ,[currentUser])

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
            {
            currentUser ? <Userlogin nameofuser = {currentUser} /> :<Link to="/Login">Login</Link> 
            }   
          </div>
        </div>
      </div>


  )
}

export default Header