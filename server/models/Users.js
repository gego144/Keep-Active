const mongoose = require("mongoose");
const ActivitySchema = require("./Activity")


const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    // prob have to change this to empty array since dont want to make it so user needs one at the start.
    activities: [] 
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;