const mongoose = require("mongoose");
const contactSchema = mongoose.Schema({
    name:{type: String},
    email:{type: String},
    mobile:{type: String},
    subject:{type: String},
    message:{type: String},
    createDate:{type:Date, default:Date.now()},
}, {versionKey:false});

const  contactModel = mongoose.model(" contact", contactSchema);
module.exports = contactModel;