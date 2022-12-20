import React from 'react'
import CarForm from '../../components/CarForm'

const Login = () => {


  const [email , setEmail] = React.useState(" ");
  const [password , setPassword] = React.useState(" ");
  const [currentUser, setCurrentUser] = React.useState(false);

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
        if(resJson.user){
          setCurrentUser(resJson.user)
        }
        console.log("resJson",resJson)
}

React.useEffect(() => {
      if(currentUser){
        console.log(currentUser)
         window.localStorage.setItem('username', currentUser.fullName);
      }

} , [currentUser])

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