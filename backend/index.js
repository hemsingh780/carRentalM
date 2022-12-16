const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv")
var bodyParser = require('body-parser')

dotenv.config();

const path = require("path");
// mongoose Db configuration

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


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
