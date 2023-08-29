const CatchAsync = require("../utils/CatchAsync");
const Blood = require("../modal/BloodModal");
const sendResponse = require("../utils/SendResponse");

exports.postBlood =  CatchAsync(async(req , res , next) => {
    const blood = await Blood.create(req.body);
    sendResponse(blood , 201 , res);
});
exports.getBlood =  CatchAsync(async(req , res , next) => {
    const blood = await Blood.find().sort({createdAt: -1});
    sendResponse(blood , 200 , res);
});
exports.getBloodByGroup =  CatchAsync(async(req , res , next) => {
    console.log(req.query ,"req.params.group");
    const blood = await Blood.find({bloodGroup:req.query.group});
    sendResponse(blood , 200 , res);
});
exports.deleteBlood =  CatchAsync(async(req , res , next) => {
    const blood = await Blood.findByIdAndDelete(req.params.id);
    sendResponse("blood deleted successfully" , 200 , res);
});