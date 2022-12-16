const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
    carName:{
        type:String,
        required:true,
    },
    image:{
        type:String
    },
    gearType:{
        type:String,
         required:true
    },
    fuelType:{
        type:String,
        max:500,
    },
    isAvailable:{
        type:Boolean,
        default:true,
        required:true,
    },
    kmDriven:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("Car",CarSchema)