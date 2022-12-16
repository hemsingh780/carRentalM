const express = require("express");
const router = express.Router()

const {
  createPost,
  updatePost,
  deletePost,
} = require("../../controllers/post_api");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../Images"));
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/create-post", upload.single("post"), createPost);
router.post("/update-post/:id", updatePost);
router.post("/delete-post/:id", deletePost);

module.exports = router;
