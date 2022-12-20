
const mongoose = require("mongoose");

const url = process.env.MONGODB_URL

mongoose
  .connect(url)
  .then(() => console.log("Server configuration setup Succesfully....."))
  .catch(() => {
    console.log("Oops.. There is an error in db Config");
  });
