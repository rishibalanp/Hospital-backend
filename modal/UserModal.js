const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Enter your Name"],
      },
      password: {
        type: String,
        require: [true, "Enter your password"],
        minlength: 8,
      },
      blood:{
        type:String,
        require:[true , "Enter your Blood Group"],
      },
      email: {
        type: String,
        require: true,
        validator: [validator.email, "Enter your valid email"],
        unique: true,
        lowercase: true,
      },
      photo: String,
      confirmPassword: {
        type: String,
        require: [true, "please confirm your password"],
        validate: {
          validator: function (el) {
            return el === this.password;
          },
          message: "Password are not same",
        },
      }
})
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = undefined;
    next();
  });
  // active not equal to false
  UserSchema.pre(/^find/, function (next) {
    this.find({ active: { $ne: false } });
    next();
  });
UserSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
  ) {
    return await bcrypt.compare(candidatePassword, userPassword);
  };

const Users = mongoose.model("User", UserSchema);
module.exports = Users;