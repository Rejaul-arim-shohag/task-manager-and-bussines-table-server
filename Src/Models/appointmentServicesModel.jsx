const mongoose = require("mongoose");
const appointmentServicesSchema = mongoose.Schema({
    serviceName: { type: String},
    serviceFee: { type: String },
    createDate: { type: Date, default: Date.now() },
}, { versionKey: false });

const appointmentServicesModel = mongoose.model("appointmentServices", appointmentServicesSchema);
module.exports = appointmentServicesModel;