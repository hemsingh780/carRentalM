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

const userLogin = async (request, response) => {
  try {
    const user = await User.findOne({
        email:req.body.email
    });

    var passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      // user["password"] = null;
      const token = User.generateToken(user, "H@rsh", "30d");
      response.cookie("userToken", token, {
        secure: true,
        httpOnly: true,
        expires: new Date("01 12 2024"),
        // sameSite: "lax",
      });
      return response
        .status(200)
        .json({ message: "User login details match", userToken: token });
    } else {
      return response
        .status(422)
        .json({ message: "User login details did'nt match" });
    }
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Internal server error" });
  }
};



const createNewUser = async (request, response) => {
  try {
    const user = await User.findOne({
      emailOrMobile: request.body.emailOrMobile,
    });
    if (user) {
      return response.status(422).json({
        message: "User already exist",
      });
    } else {
      try {
        const newUser = new User({
           fullName:req.body.fullName,
           email:req.body.email,
           phoneNumber:req.body.phoneNumber,
           password:bcrypt.hashSync(req.body.password , 8)
         });

        await newUser.save();
        return response.status(200).json({
          message: "User registerd succesfully",
        });
      } catch (error) {
        console.log(error);
        return response.status(422).json({
          message: "Error while creating user",
        });
      }
    }
  } catch (error) {
    return response.status(500).json({
      message: "Internal server Error",
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
