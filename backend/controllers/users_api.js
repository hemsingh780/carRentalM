
const { request } = require("express");
var bcrypt = require("bcrypt");
const User = require("../models/User");

const sendUsersSuggestions = async (request, response) => {
  try {
    const users = await User.find({});
    return response.status(200).json({
      data: users,
    });
  } catch (error) {
    return response.status(500).json({
      message: "internal server error",
    });
  }
};




const destroySession = async (request, response) => {
  response.clearCookie("userToken");

  return response.status(200).json({
    messgae: "user logout",
    token: null,
  });
};

// const getUserDetails = async (request, response) => {
//   try {
//     const id = request.user.id;
//     const user = await User.findById(id);

//     if (user) {
//       return response.status(200).json({
//         message: "user datails found",
//         data: {
//           data: user,
//         },
//       });
//     }
//     return response.status(422).json({
//       message: "user datails not found",
//     });
//   } catch (error) {
//     console.log(error);
//     return response.status(500).json({
//       message: "Internal Server error",
//     });
//   }
// };

const sendUserJwt = async (request, response) => {
  return response.status(200).json({
    message: "user token",
    userToken: request.cookies.userToken,
  });
};
  // bcrypt.hash(plaintextPassword, 10)
  
  //  bcyrpt.compare(plaintextPassword, hash)
  

const userLogin = async (request, response) => {
 
  try {
    const user = await User.findOne({
      email:request.body.email
    });

    console.log(user);

    // let passwordIsValid =   await  bcyrpt.compare(request.body.password, user.password)
    // let passwordIsValid = await bcrypt.compare(request.body.password , user.password)
    // let password2 = bcrypt.compareSync(request.body.password, user.password);
  //   console.log("password2" , password2)
  //  console.log("passwordisvalid " , passwordIsValid)
    if(request.body.password ===  user.password){
          return response
          .status(200)
          .json({ message: "User login details match", user: user });              
    }else {
          return response
          .status(422)
          .json({ message: "User login details did'nt match" });
    }

    // return response
    // .status(200)
    // .json({ message: "User login details match", user: user });
    // if (!passwordIsValid) {
      // user["password"] = null;
      // const token = User.generateToken(user, "H@rsh", "30d");
      // response.cookie("userToken", token, {
      //   secure: true,
      //   httpOnly: true,
      //   expires: new Date("01 12 2024"),
      //   // sameSite: "lax",
      // });

    // } else {

    // }


    // }
      } catch (error) {
        console.log(error);
        return response.status(500).json({ message: "Internal server error" });
      }

};



const createNewUser = async (request, response) => {
      try {
               
      // let generatePassword =  await  bcrypt.hash(request.body.password, 10)
       
      // if(generatePassword){
        const newUser = new User({
           fullName:request.body.fullName,
           email:request.body.email,
           phoneNumber:request.body.phoneNumber,
           password:request.body.password 
         });

        await newUser.save();
        return response.status(200).json({
          data:request.body,
          message: "User registerd succesfully",
        });
    // }else{
    //   console.log("something wrong in generatepassword !");
    // }
      } 
      catch (error) {
        console.log("error",error);
    return response.status(500).json({
      message: "Internal server Error in register" , error,
    });
  }
};

module.exports = {
  createNewUser,
  userLogin,
  sendUserJwt,
  destroySession,
  sendUsersSuggestions,
};
