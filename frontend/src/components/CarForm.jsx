
import React from 'react'
import "./Logins.css"
import { useNavigate } from "react-router-dom";
const CarForm = ({heading }) => {
  let navigate = useNavigate();

  return (
    <div className='Login-main'>
        <div className='login-main1'>
          <div className='login-h'>{heading}</div>
          <div>
              <form >
                  <div >
                      <label id='username'>username</label>
                      <input type="text" for="username" />
                  </div>
                  <div>
                      <label id='password'>password</label>
                      <input type="text" for="password" />
                  </div>

{           heading == "SIGN UP"  ?     <div>
                      <label id='Email'>Email</label>
                      <input type="email" for="Email" />
                  </div> : null }

                  
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
{       heading == "LOGIN" ?      <div>
                  Forget password
              </div> : null}
            </div>
        </div>
      </div>
    )
}

export default CarForm