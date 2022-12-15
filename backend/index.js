const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const path = require("path");
// mongoose Db configuration
app.use(express.json());
require("./config/mongoose/config");
app.use(cookieParser());


const routerPath = path.join(__dirname, "/routes");
const imagePath = express.static(__dirname + "/Images");
app.use("/images", imagePath);
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(require(routerPath));

console.log(routerPath);

app.listen(8000, () => {
  console.log("Server start");
});
