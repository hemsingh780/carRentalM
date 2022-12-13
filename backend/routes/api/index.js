const express = require("express");
const router = express.Router();

const users = require("./users");
const post = require("./post");

router.use("/user", users);
router.use("/post", users);

module.exports = router;
