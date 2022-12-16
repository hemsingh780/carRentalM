import React from 'react'
import CarForm from '../../components/CarForm'

const Login = () => {
  return (
    <>
      <CarForm 
        heading="LOGIN"
        actionPath = "/api/user/login"
      />
    </>
  )
}

export default Login