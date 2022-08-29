const mongoose = require("mongoose");
const attorneySchema = mongoose.Schema({
    email:{type: String},
    Name:{type: String},
    mobile:{type: String},
    title:{type: String},
    photo:{type: String},
    description:{type: String},
    createDate:{type:Date, default:Date.now()},
}, {versionKey:false});

const attorneyModel = mongoose.model("attorney", attorneySchema);
module.exports = attorneyModel;