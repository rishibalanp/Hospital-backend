const mongoose = require("mongoose");
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
    },
    createdAt:{
        type:Date,
        default: Date.now
      }
    // doctor:[{    
    //       type: mongoose.Schema.ObjectId,
    //       ref: "Doctor",
    //     }]
})
// hospitalSchema.pre(/^find/, function (next) {
//     this.populate({
//       path: "Doctor",
//       select: "-__v",
//     });
//     next();
//   });
  hospitalSchema.set('toObject', { virtuals: true });
hospitalSchema.set('toJSON', { virtuals: true });
const Hospital = mongoose.model("Hospital", hospitalSchema);
module.exports = Hospital;

