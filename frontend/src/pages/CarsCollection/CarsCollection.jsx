import React from 'react'
import Hcard from '../../components/Hcard'
import CardCar from './CardCar'

const CarsCollection = ({marginFromAdmin}) => {

  console.log(marginFromAdmin)
    const data = [
        {
          ImgSrc:'https://hemsingh780.github.io/hosted-assest/RenualtKwid.png',
          carName:"Renault Kwid",
          carType : "Manual  . Petrol . 5 Seats",
          rating : "4.7",
          km : "58",
          price : "1429"
        }
    ]
 let repeatData = []
    for(let i  =  0 ; i < 8 ; i++){
      repeatData[i] = data[0];
    }

  return (
    <div
     style={{
      display:'flex',
      justifyContent:"space-around",
      flexWrap:"wrap",
      marginLeft:marginFromAdmin
     }}
    >
    

      {
        repeatData.map((x,i) => {
          return (
            <CardCar 
              key={i}
              ImgSrc={x.ImgSrc}
              carName={x.carName}
              carType = {x.carType}
              rating = {x.rating}
              km = {x.km}
              price = {x.price}
          />
          )
        })
      }
    </div>
  )
}

export default CarsCollection