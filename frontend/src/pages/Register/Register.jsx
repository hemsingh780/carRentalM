import React from 'react'
import CarForm from "../../components/CarForm"
const Register = () => {

  const [fullName , setFullName ] = React.useState(" ");
  const [email , setEmail] = React.useState(" ");
  const [phoneNumber, setPhoneNumber ] = React.useState(" ");
  const [password , setPassword] = React.useState(" ");


  
  const handleSubmit = async (e) => {
    e.preventDefault();
        let data  = {
          fullName: fullName ,
          email: email,
          phoneNumber: phoneNumber ,
          password:password
        }    
        // console.log(data)
        let res = await fetch("/api/user/create-new-user", {
          method: "POST",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
          body: JSON.stringify(data),
        });
        let resJson = await res.json();
        console.log("resJson",resJson)
}


  return (
    <>
        <CarForm 
          heading = "SIGN UP"
          setFullName = {setFullName}
          setEmail= {setEmail}
          setPhoneNumber = {setPhoneNumber}
          setPassword = {setPassword}
          handleSubmit = {handleSubmit} 

        />
    </>
  )
}

export default Register