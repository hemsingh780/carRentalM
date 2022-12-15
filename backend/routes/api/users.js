const express = require("express");
const router = express.Router();

const userPresent = require("../../config/auth/userPresent");

const {
  createNewUser,
  userLogin,
  sendUserJwt,
  getUserDetails,
  updateUserProfile,
  destroySession,
  getuserinfo,
  sendUsersSuggestions,
} = require("../../controllers/users_api");

router.get(
  "/users-suggestions",
  sendUsersSuggestions
);
router.get("/userinfo" , getuserinfo);
router.get(
  "/destroy-session",
  
  destroySession
);
router.post(
  "/update-user-profile",
  
  updateUserProfile
);
router.get(
  "/isAuthorized",
  userPresent,
  
  sendUserJwt
);
router.get(
  "/get-user-data",
  
  getUserDetails
);

router.post("/create-new-user", createNewUser);
router.post("/login", userLogin);

module.exports = router;
