const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true , "Enter your Hospital Name"  ]
    },
    type:{
        type:String,
        require:[true , "Enter hospital type"]
    },
    doctorTime:{
        type:String,
        require:[true , "Enter doctor time"]
    },
    Hospital:{
        type:String,
        ref: "Hospital"
    }
})

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;