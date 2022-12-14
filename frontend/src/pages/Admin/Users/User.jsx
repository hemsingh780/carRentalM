import React from 'react'
import CardUser from './CardUser';
import "./Users.css"
const User = () => {
    let user  = {
        name:"rahul",
        mobileNo:"98129324",
        email:"rahul@gmail.com",
        orderedCars:[{
                ImgSrc:'https://hemsingh780.github.io/hosted-assest/RenualtKwid.png',
                carName:"Renault Kwid",
                carType : "Manual  . Petrol . 5 Seats",
                rating : "4.7",
                km : "58",
                price : "1429"
                
        }]
    }  
    let users = []
    for (let i = 0; i < 10; i++) {
        users[i] = user;
    }

    return (
        <div className='UserMain'>
            {users.map((x ,k) => <CardUser name={x.name}  email = {x.email} mobileNo={x.mobileNo} orderedCars = {x.orderedCars} key={k}/>)}
        </div>
   )


}

export default User