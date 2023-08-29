const CatchAsync = require("../utils/CatchAsync");
const Hospital = require("../modal/HospitalModal");
const sendResponse = require("../utils/SendResponse");
const { default: axios } = require("axios");

exports.postHospital = CatchAsync(async (req, res, next) => {
      const hospital = await Hospital.create(req.body);
      sendResponse(hospital, 201, res);
});
exports.getHospital = CatchAsync(async (req, res, next) => {
  const hospital = await Hospital.find().sort({createdAt: -1})
  sendResponse(hospital, 200, res);
});
exports.getHospitalById = CatchAsync(async (req, res, next) => {
  const hospital = await Hospital.findById(req.params.id).populate({
    path: "doctor",
  });
  sendResponse(hospital, 200, res);
});
exports.deleteHospital = CatchAsync(async (req, res, next) => {
   await Hospital.findByIdAndDelete(req.params.id);
  sendResponse("hospital deleted successfully", 200, res);
});
