const mongoose = require("mongoose");
const bloodSchema = new mongoose.Schema({
    bloodGroup:{
        type:String,
        require:[true , "Enter your blood group"]
    },
    candidateWeight:{
        type:String,
        require:[true , "Enter weight"]
    },
})

const Blood = mongoose.model("blood", bloodSchema);
module.exports = Blood;