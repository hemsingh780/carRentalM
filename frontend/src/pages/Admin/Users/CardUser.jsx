import React from 'react'
import "./Users.css"
const CardUser = ({userName}) => {
    return (

    
        <div className="card">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:"100%"}} />
        <div className="container">
        <h4><b>{userName}</b></h4> 
        </div>
        </div>
  )

}

export default CardUser