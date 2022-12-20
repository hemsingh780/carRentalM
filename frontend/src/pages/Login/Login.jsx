import React from 'react'
import CarForm from '../../components/CarForm'

const Login = () => {
  // window.localStorage.setItem('name', 'Obaseki Nosa');

  const [email , setEmail] = React.useState(" ");
  const [password , setPassword] = React.useState(" ");


  const handleSubmit = async (e) => {
    e.preventDefault();
        let data  = {
          email: email,
          password:password
        }    
        // console.log(data)
        let res = await fetch("/api/user/login", {
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
        heading="LOGIN"
        setEmail= {setEmail}
        setPassword= {setPassword}
        handleSubmit = {handleSubmit} 
      />
    </>
  )
}

export default Login