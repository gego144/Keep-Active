const mongoose = require("mongoose");
const RunModel = require("./Run")
const GymModel = require("./Gym")
const OtherModel= require("./Other")


const ActivitySchema = new mongoose.Schema({
    Title:{
        type: String,
        required: true
    },
    Date:{
        type: Date
    },
    Date_Added:{
        type: Date,
        default: Date.now
    },
    Activity_Type:{
        type: String,
        required: true
    },
    Activities: {
        type: [{}]
    }
});

module.exports = ActivitySchema;