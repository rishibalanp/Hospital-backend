const CatchAsync = require("../utils/CatchAsync");
const Doctor = require("../modal/DoctorModal");
const sendResponse = require("../utils/SendResponse");

exports.postDoctor = CatchAsync(async(req , res , next) => {
    if(!req.body.Hospital) req.body.Hospital = req.params.id;
    const doctor = await Doctor.create(req.body);
    sendResponse(doctor , 201 , res);
});
exports.getDoctor = CatchAsync(async(req , res , next) => {
    const doctor = await Doctor.find().sort({createdAt: -1}).populate({path:"Hospital" ,select:"_id"});
    sendResponse(doctor , 200 , res);
});
exports.getDoctorByHospital = CatchAsync(async(req , res , next) => {
    const doctor = await Doctor.find({Hospital:req.params.id});
    sendResponse(doctor , 200 , res);
});
exports.deleteDoctor = CatchAsync(async(req , res , next) => {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    sendResponse("doctor deleted successfully" , 200 , res);
});