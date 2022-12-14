import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import "./Admins.css"
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
const Admin = () => {
  return (
    <>
    <div className='AdminM'>
        <div className='AdminM1'>
            <div className='AdminInnerDiv'>
                <div className='IconsAdmin'>
                    <PersonIcon />
                </div>
                <div>
                    Admin
                </div>
             </div>
        </div>
        <div className='AdminM2'>
             <div className='AdminInnerDiv'>
                <div className='IconsAdmin'>
                   <PersonIcon />
                </div>
                <div>
                  <Link to="/Users">Users</Link>
                 </div>
             </div>
             <div className='AdminInnerDiv'>
                <div className='IconsAdmin'>
                    <DirectionsCarFilledIcon />
                </div>
                <div>
                    <Link to="adminCars">CarsCollections</Link>                 
                </div>
             </div>
             <div className='AdminInnerDiv'>
                <div className='IconsAdmin'>
                <LogoutIcon />
                </div>
                <div>LogOut</div>
             </div>
        </div>
    </div>
    </>
  )
}

export default Admin