import React from 'react'
import "./CarsCollections.css"
import StarIcon from '@mui/icons-material/Star';
const CardCar = ({ImgSrc , carName , carType , rating , km , price}) => {
  return (
    <div className='carCard'>
        <div>
            <img src={ImgSrc} alt={carName}/>
        </div>
    <div 
      style={{
        padding:" 0 8px 8px 8px"
      }}
    
    >
            <div>
                <div>
                    <h2>{carName}</h2>
                    <p 
                      style={{
                        color:"#a8a8a8"
                      }}
                    >{carType}</p>
                </div>
                <div 
                  style={{
                    // display:"flex"
              
                  }}
                >
                    <p style={{
                        display:"flex"
                    }}>
                    <StarIcon  style={{
                        color:"yellow",
                        display:"flex",
                        justifyContent:"center",
                        alignSelf:"center",
                        marginRight:"5px"

                    }}/>
                        {rating}<span
                          style={{
                            margin:"0 5px"
                          }}
                        >-{km}k</span><span
                          style={{
                            marginRight:"5px"
                          }}
                        >kms</span><span>driven</span></p>
                </div>
            </div>
            <div style={{
                display:"flex",
                justifyContent:"space-around"
            }}>
                <div 
                style={{
                display: "flex",
                justifyContent: "center",
                alignSelf: "center",
                fontSize: "xx-large",
                color: "grey",
               }}
                
                >
                    <span>₹</span>{price}
                </div>
                <div 
                 style={{
                    border:"1px solid black",
                    padding:"8px",
                    cursor:"pointer"
                 }}
                 className="carCardBookNow"
                >
                    Book Now
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardCar