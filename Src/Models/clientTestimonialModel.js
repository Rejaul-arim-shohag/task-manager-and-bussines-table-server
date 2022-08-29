const mongoose = require("mongoose");
const clientTestimonialSchema = mongoose.Schema({
    userID:{type: String},
    comment:{type: String},
    createDate:{type:Date, default:Date.now()},
}, {versionKey:false});

constclientTestimonialModel = mongoose.model("clientTestimonial", clientTestimonialSchema);
module.exports = constclientTestimonialModel;