const { mongoose } = require("mongoose");
const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true , "Enter your Hospital Name"  ]
    },
    address:{
        type:String,
        require:[true , "Enter address"]
    },
    type:{
        type:String,
        require:[true , "Enter hospital type"]
    },
    openTime:{
        type:String,
        require:[true , "Enter hospital openning time"]
    },
    clossingTime:{
        type:String,
        require:[true , "Enter hospital closing time"]
    }
})

const Hospital = mongoose.model("Hospital", hospitalSchema);
module.exports = Hospital;