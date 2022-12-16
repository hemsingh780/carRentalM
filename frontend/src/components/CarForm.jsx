
import React from 'react'
import "./Logins.css"
import { useNavigate } from "react-router-dom";
const CarForm = ({heading  , actionPath}) => {
  let navigate = useNavigate();

  const [fullName , setFullName ] = React.useState(" ");
  const [email , setEmail] = React.useState(" ");
  const [phoneNumber, setPhoneNumber ] = React.useState(" ");
  const [password , setPassword] = React.useState(" ");



  const handleSubmit = async (e) => {
    console.log(fullName);
    console.log(email);
    console.log(phoneNumber);
    console.log(password);

    // prevent the form from refreshing the whole page
    e.preventDefault();
    // make a popup alert showing the "submitted" text
        let res = await fetch(actionPath, {
          method: "POST",
          body: JSON.stringify({
          fullName:heading == "SIGN UP" ? fullName : null,
          email: email,
          phoneNumber:  heading == "SIGN UP" ? phoneNumber : null,
          password:password
        }),
        });
        let resJson = await res.json();
        console.log(resJson)

  }

  return (
    <div className='Login-main'>
        <div className='login-main1'>
          <div className='login-h'>{heading}</div>
          <div>
              <form  onSubmit={handleSubmit} method="post">
              {heading == "SIGN UP"  ? <div >
                      <label id='fullName'>Full Name (as per driving license) </label>
                      <input 
                      type="text" 
                      for="fullName"
                      name='fullName' 
                      onChange={(e) => setFullName(e.target.value)}
                      />
                  </div>
                  : null }
                 <div>
                    <label id='Email'>Email</label>
                    <input 
                    type="email" 
                    for="Email" 
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                    />
                 </div> 
                  {heading == "SIGN UP" ?<div>
                      <label id='phoneNumber'>Phone Number</label>
                      <input type="text" 
                      for="phoneNumber"  
                      maxLength="10"
                      name='phoneNumber'
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                  </div> : null }
                  <div>
                      <label id='password'>password</label>
                      <input 
                      type="password" 
                      for="password"
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