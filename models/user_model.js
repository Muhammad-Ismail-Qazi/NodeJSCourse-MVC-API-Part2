const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    Age:Number,
    gender:String,
    email:String,
    jobTitle:String,
});

const userModel =  mongoose.model('user',userSchema);

module.exports = userModel
