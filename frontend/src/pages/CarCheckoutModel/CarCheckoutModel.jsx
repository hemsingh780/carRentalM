import React from 'react'
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import MinorCrashIcon from '@mui/icons-material/MinorCrash';
import PolicyIcon from '@mui/icons-material/Policy';
import './CarCheckoutModels.css'
import CircleIcon from '@mui/icons-material/Circle';

const CarCheckoutModel = () => {
  return (
    <div className='checkoutModel-Main'>
      <div className='checkoutModel-Main1'>
          <div className='checkoutModel-Main11'>
              <div>
                <div className='checkoutModel-Main11-CarName'>
                   Toyota Glanza MT Petrol
                </div>
                <div style={{
                  display:"flex",
                }}>
                   <div style={{
                    marginRight:"8%"
                   }}>
                      Manual
                   </div>
                   <div>
                      Petrol                   
                   </div>
                </div>
              </div>
              {/* <div>
                <img src='https://hemsingh780.github.io/hosted-assest/RenualtKwid.png' alt='carname'/>
              </div> */}
          </div>
          <div>
            <div className="timeCarCheck">
                <div>
                  <CircleIcon  style={{
                    color:"green",
                    fontSize:"16px"
                  }}/>
                </div>
                <div>
                starting time day 
                </div>
            </div>
            <div  className="timeCarCheck">
                <div>
                   <CircleIcon   
                   style={{
                    color:"red",
                    fontSize:"16px"
                  }}
                   />
                </div>
                <div>
                ending day and time 
                </div>
            </div>

          </div>

      </div>
      <div className='checkoutModel-Main2'>
              <div className='checkoutModel-Main2-h'>
              Keep In Mind
              </div>
              <div className='keepInMindInnerDiv1'>
                <div>
                  <MinorCrashIcon />
                </div>
                <div className='keepInMindInnerDiv1Detail'>
                  Driving License Mandatory
                </div>
              </div>
              <div className='keepInMindInnerDiv1'>
                <div>
                  <LocalGasStationIcon />
                 </div>
                <div  className='keepInMindInnerDiv1Detail'>
                  <div>Fare & Fuel Policy</div>
                  <div>Fare is inclusive of all taxe . kindly return the car at the same fuel level as the trip start time</div>
                  <a href='#'>See Details</a>
                </div>
              </div>
              <div className='keepInMindInnerDiv1'>
                  <div>
                    <MinorCrashIcon />
                  </div>
                    <div className='keepInMindInnerDiv1Detail'>
                        <div>Cancellation Policy</div>
                        <div>Hassle free cancellation  and refunds at nominal charges</div>
                        <a href='#'>See Details</a>
                    </div>
              </div>
              <div className='keepInMindInnerDiv1'>
                <div>
                  <PolicyIcon />
                </div>
                  <div className='keepInMindInnerDiv1Detail'>
                        <div>Agreement Policy</div>
                        <div>I hereby agree to the terms and conditions of the Lease Agreement with Host</div>
                        <a href='#'>See Details</a>
                  </div>
              </div>
          </div>

          <div className='checkoutModel-Main3'>
              <div><span>₹</span>1234</div>
              <div>Proceed to pay "price" </div>
          </div>
    </div>
  )
}

export default CarCheckoutModel