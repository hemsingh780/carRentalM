const express = require("express");
const router = express.Router();
const passport = require("passport");

const userPresent = require("../../config/auth/userPresent");

const {
  createNewUser,
  userLogin,
  sendUserJwt,
  getUserDetails,
  updateUserProfile,
  destroySession,
  sendUsersSuggestions,
} = require("../../controllers/users_api");

router.get(
  "/users-suggestions",
  passport.authenticate("jwt", { session: false }),
  sendUsersSuggestions
);
router.get(
  "/destroy-session",
  passport.authenticate("jwt", { session: false }),
  destroySession
);
router.post(
  "/update-user-profile",
  passport.authenticate("jwt", { session: false }),
  updateUserProfile
);
router.get(
  "/isAuthorized",
  userPresent,
  passport.authenticate("jwt", { session: false }),
  sendUserJwt
);
router.get(
  "/get-user-data",
  passport.authenticate("jwt", { session: false }),
  getUserDetails
);

router.post("/create-new-user", createNewUser);
router.post("/login", userLogin);

module.exports = router;
