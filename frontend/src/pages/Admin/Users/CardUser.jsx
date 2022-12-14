import React from 'react'
import "./Users.css"
const CardUser = ({name ,  email , mobileNo , orderedCars}) => {
    
  console.log(orderedCars);
  return (

    
      <div className="card">
          <div className="container">
          <h4>name: <b>{name}</b></h4>
          <h4>Email: <b>{email}</b></h4>
          <h4>MobileNo: <b>{mobileNo}</b></h4>
          {/* <h4>MobileNo: <b>{mobileNo}</b></h4> */}
          </div>
      </div>
  )

}

export default CardUser