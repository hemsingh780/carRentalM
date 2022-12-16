const express = require("express");
const router = express.Router();

const userPresent = require("../../config/auth/userPresent");

const {
  createNewUser,
  userLogin,
  sendUserJwt,
  destroySession,
  sendUsersSuggestions,
} = require("../../controllers/users_api");

router.get(
  "/users-suggestions",
  sendUsersSuggestions
);
router.get(
  "/destroy-session",
  
  destroySession
);

router.get(
  "/isAuthorized",
  userPresent,
  
  sendUserJwt
);

router.post("/create-new-user", createNewUser);
router.post("/login", userLogin);

module.exports = router;
