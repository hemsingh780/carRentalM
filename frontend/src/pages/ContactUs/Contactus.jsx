import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './contactus.css'
const Contactus = () => {
  return (
    <div className='contactus-m'>
      <div className='contactus-m1'>
        <div className='contactus-address'>
           <h1>pal road arthala mohan nagar</h1>
           <h1> ghaziabad </h1> 
        </div>
        <div className='contactus-phone'>
          <PhoneIcon /> <span>1234567890</span> 
        </div>
        <div className='contactus-email'>
          <MailOutlineIcon /> <span>hhbb@gmail.com</span> 
        </div>
      </div>
      <div className='con-form-main' 
      
      >
      <div className='con-form-main1'>
        <div
         style={{
          textAlign:'center',
          fontWeight:"bolder"
         }}
        >Connect With Us</div>
        <form>
              <div>
                  <label id="fullName">Full Name</label>
                  <input type="text" for="fullName"/>
              </div>
              <div>
                  <label id="email">Email</label>
                  <input type="email" for="email"/>
              </div>
              <div>
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="4" cols="50" />
              </div>
              <input type="submit" value="let's talk " className='con-submit'/>
          </form>
          <div 
           style={{
            marginTop:"8px"
           }}
          >By completing this form, I have read and acknowledged the Privacy Policy and agree that SCar may contact me at the email address above.</div>
</div>
      </div>
        
    </div>
  )
}

export default Contactus