const express = require("express")
const app = express()
const mongoose = require("mongoose")
const ActivityModel = require("./models/Activity")
const cors = require('cors')
const UserModel = require("./models/Users")

app.use(express.json());
app.use(cors());
mongoose.connect("Mongodb");

app.get("/getUser", async (req,res) => {
    const user = req.body;

    UserModel.findOne({'username': user.username}, (err, result) => {
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });

});

app.post("/createUser", async (req,res) => {
    const user = req.body;
    const newUser = new UserModel(user);

    const userExists = await UserModel.findOne({'username' : user.username});
    if(userExists){
        console.log("Exists");
    }
    else{
        await newUser.save();
    }
    res.json(user);
});

app.put("/editActivity", (req, res) => {
    const user = req.body;
    var activityLocation = `activities.${user.index}`;

    UserModel.updateOne({'username': user.username}, {$set: {[activityLocation] : user.values}}, (err, result) => {
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

app.put("/createOneActivity", (req, res) => {
    const user = req.body;

    UserModel.updateOne({'username': user.username}, {$push: {activities : user.values}}, (err, result) => {
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

app.delete("/deleteOneActivity", (req, res) => {
    const user = req.body;
    var activityLocation = `activities.${user.index}`;

    UserModel.updateOne({'username': user.username}, {$unset: {[activityLocation] : 0}},  { safe: true }, (err, result) => {
        if(err){
            res.json(err);
        }
        else{
            UserModel.updateOne({'username': user.username}, {$pull : {"activities" : null }}, { safe: true }, (err, result) => {
                if(err){
                    res.json(err);
                }
                else{
                    res.json(result);
                }
             });
        }
    });
});


app.listen(3001, () => {
    console.log("Working");
});