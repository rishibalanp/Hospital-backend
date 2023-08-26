const sendResponse = (data , statusCode , res) =>{
    res.status(statusCode).json({
        sucess:true,
        data
    })
}
module.exports = sendResponse;