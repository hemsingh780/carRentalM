import React from 'react'
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import MinorCrashIcon from '@mui/icons-material/MinorCrash';
import PolicyIcon from '@mui/icons-material/Policy';



const CarCheckoutModel = () => {
  return (
    <div>
      <div>
          <div>
              <div>
                <div>
                    name of car
                </div>
                <div>details of car</div>
              </div>
              <div>Image</div>
          </div>
          <div>
              <div>
                starting time day 
              </div>
              <div>
                ending day and time 
              </div>
          </div>

      </div>
      <div>
              <div>
              Keep In Mind
              </div>
              <div>
                <div>
                  <MinorCrashIcon />
                </div>
                <div>
                  Driving License Mandatory
                </div>
              </div>
              <div>
                <div>
                  <LocalGasStationIcon />
                 </div>
                <div>
                 <div>Fare & Fuel Policy</div>
                  <div>Fare is inclusive of all taxe . kindly return the car at the same fuel level as the trip start time</div>
                </div>
              </div>
              <div>
                  <div>
                    <MinorCrashIcon />
                  </div>
                    <div>
                        <div>Cancellation Policy</div>
                        <div>Hassle free cancellation  and refunds at nominal charges</div>
                    </div>
              </div>
              <div>
                <div>
                  <PolicyIcon />
                </div>
                  <div>
                        <div>Agreement Policy</div>
                        <div>I hereby agree to the terms and conditions of the Lease Agreement with Host</div>
                  </div>
              </div>
          </div>

          <div>
              <div>Price</div>
              <div>Proceed to pay "price" </div>
          </div>
    </div>
  )
}

export default CarCheckoutModel