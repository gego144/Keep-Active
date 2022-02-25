const mongoose = require("mongoose");

const RunSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    distance:{
        type: mongoose.Decimal128,
        required: false
    },
    steps:{
        type: mongoose.Decimal128,
        required: false
    }
});

module.exports = RunSchema;