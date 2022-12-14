import React from 'react'
import CardUser from './CardUser';
import "./Users.css"
const User = () => {
    let name  = "rahul"  
    let users = []
    for (let i = 0; i < 10; i++) {
        users[i] = name;
    }

    return (
        <div className='UserMain'>
            {users.map((x ,k) => <CardUser userName={x} key={k}/>)}
        </div>
   )


}

export default User