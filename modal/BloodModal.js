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
    createdAt:{
        type:Date,
        default: Date.now
      }
})

const Blood = mongoose.model("blood", bloodSchema);
module.exports = Blood;