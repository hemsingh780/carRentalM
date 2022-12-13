
const mongoose = require("mongoose");

const url = `mongodb+srv://hem1234dhoni:hem1234dhoni@cluster0.xn4ky.mongodb.net/carRental?retryWrites=true&w=majority`;

mongoose
  .connect(url)
  .then(() => console.log("Server configuration setup Succesfully....."))
  .catch(() => {
    console.log("Oops.. There is an error in db Config");
  });
