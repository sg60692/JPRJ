const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const inquirySchema = new Schema({
    Name:String,
    Phone:String,
    message:String,
    email:String
});

// Model
const inquiry = mongoose.model('inquiry', inquirySchema);

module.exports =  inquiry;