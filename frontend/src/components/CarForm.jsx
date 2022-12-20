import React from 'react'
import "./Logins.css"
import { useNavigate } from "react-router-dom";
const CarForm = ({heading  , setFullName , setEmail , setPhoneNumber , setPassword , handleSubmit }) => {
  let navigate = useNavigate();

  return (
    <div className='Login-main'>
        <div className='login-main1'>
          <div className='login-h'>{heading}</div>
          <div>
              <form  onSubmit={handleSubmit} >
              {heading == "SIGN UP"  ? <div >
                      <label htmlFor='fullName'>Full Name (as per driving license) </label>
                      <input 
                      type="text" 
                      id="fullName"
                      name='fullName' 
                      onChange={(e) => setFullName(e.target.value)}
                      />
                  </div>
                  : null }
                 <div>
                    <label htmlFor='Email'>Email</label>
                    <input 
                    type="email" 
                    id="Email" 
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                    />
                 </div> 
                  {heading == "SIGN UP" ?<div>
                      <label htmlFor='phoneNumber'>Phone Number</label>
                      <input type="text" 
                      id="phoneNumber"  
                      maxLength="10"
                      name='phoneNumber'
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                  </div> : null }
                  <div>
                      <label htmlFor='password'>password</label>
                      <input 
                      type="password" 
                      id="password"
                      name='password' 
                      onChange={(e) => setPassword(e.target.value)}
                      />
                  </div>
                  <div>
                
                  <input type="submit" className='login-Submit'
                      />
                  </div>
              </form>
            </div>
            <div className='login-last'>
              <div onClick={() => heading=="LOGIN" ? navigate("/register") : navigate("/login")}>
                  {heading=="SIGN UP" ? "Sign In" : "Register"}
              </div>
            {heading=="LOGIN"?<div>
                  Forget password
              </div> : null}
            </div>
        </div>
      </div>
    )
}

export default CarForm