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

const updateUserProfile = async (request, response) => {
  try {
    const user = await User.findById(request.user.id);
    User.uploadAvatar(request, response, async (error) => {
      if (error) {
        return response.status(400).json({
          message: "error in upload image",
        });
      }

      if (request.file) {
        user.avatar = User.avatarPath + "/" + request.file.filename;

        await user.save();

        return response.status(200).json({
          message: "Image Upload",
          path: user.avatar,
        });
      } else {
        const userData = {};

        if (request.body.username) {
          user.userName = request.body["username"];
          userData["userName"] = user.userName;
        }
        if (request.body.name) {
          user.fullName = request.body["name"];
          userData["fullName"] = user.fullName;
        }
        if (request.body.emailOrMobile) {
          user.emailOrMobile = request.body["emailOrMobile"];
          userData["emailOrMobile"] = user.emailOrMobile;
        }
        if (request.body.gender) {
          user.gender = request.body["gender"];
          userData["gender"] = user.gender;
        }
        await user.save();

        return response.status(200).json({
          message: "user Update",
          data: { userData },
        });
      }
    });

    // return response.status(400).json({
    //   message: "Failed user Update",
    // });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      message: "Internal Server error",
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

const getUserDetails = async (request, response) => {
  try {
    const id = request.user.id;
    const user = await User.findById(id);

    if (user) {
      return response.status(200).json({
        message: "user datails found",
        data: {
          data: user,
        },
      });
    }
    return response.status(422).json({
      message: "user datails not found",
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      message: "Internal Server error",
    });
  }
};

const sendUserJwt = async (request, response) => {
  return response.status(200).json({
    message: "user token",
    userToken: request.cookies.userToken,
  });
};

const userLogin = async (request, response) => {
  try {
    const user = await User.findOne({
      $or: [
        { userName: request.body.userName },
        { emailOrMobile: request.body.userName },
      ],
    }).select("password");

    if (user.password === request.body.password) {
      user["password"] = null;
      const token = User.generateToken(user, "H@rsh", "30d");
      response.cookie("userToken", token, {
        secure: true,
        httpOnly: true,
        expires: new Date("01 12 2024"),
        sameSite: "lax",
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
        data: { data: user },
      });
    } else {
      try {
        const newUser = new User({ ...request.body });
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
  getUserDetails,
  updateUserProfile,
  destroySession,
  sendUsersSuggestions,
};
