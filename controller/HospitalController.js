const CatchAsync = require("../utils/CatchAsync");
const Hospital = require("../modal/HospitalModal");
const sendResponse = require("../utils/SendResponse");


exports.postHospital = CatchAsync(async(req , res , next)=>{
    const hospital = await Hospital.create(req.body)
    sendResponse(hospital , 201 , res);
});
exports.getHospital = CatchAsync(async(req , res , next)=>{
    console.log(req.query.id , 'req.query.idreq.query.id');
    const hospital = await Hospital.find();
    sendResponse(hospital , 200 , res);
});
exports.getHospitalById = CatchAsync(async(req , res , next)=>{
    console.log(req.params.id,'req.paramsget.id');
    const hospital = await Hospital.findById(req.params.id);
    console.log(hospital , 'hosssttt');
    sendResponse(hospital , 200 , res);
});
exports.deleteHospital = CatchAsync(async(req , res , next)=>{
    console.log(req.params.id , 'req.params.id');
    const hospital = await Hospital.findByIdAndDelete(req.params.id);
    sendResponse('hospital deleted successfully' , 200 , res);
});
 