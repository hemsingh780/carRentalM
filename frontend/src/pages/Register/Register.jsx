import React from 'react'
import CarForm from "../../components/CarForm"
const Register = () => {

  
  return (
    <>
        <CarForm 
          heading = "SIGN UP"
          actionPath = "/api/user/create-new-user"
        />
    </>
  )
}

export default Register