const mongoose = require("mongoose");

const OtherSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
});

module.exports = OtherSchema;