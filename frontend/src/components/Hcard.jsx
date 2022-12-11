import React from 'react'
import "./Hcards.css"
const Hcard = ({ImgSrc ,hname , data}) => {
  return (
    <div className='HcardM'>
        <div>
            <img src={ImgSrc} alt={hname}/>
        </div>
        <div>
               <h2 className='Hcard-h'>
                {hname}
               </h2>
               <p className='Hcard-data'>
                {data}
               </p>
        </div>
    </div>
  )
}

export default Hcard