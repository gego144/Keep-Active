const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
    workout:{
        type: String,
        required: true
    },
    weight:{
        type: mongoose.Decimal128,
        required: true
    },
    sets:{
        type: mongoose.Decimal128,
        required: true
    },
    reps:{
        type: mongoose.Decimal128,
        required: true
    }
});

const GymSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    workouts: [WorkoutSchema]
});

module.exports = GymSchema;