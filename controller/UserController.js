const CatchAsync = require("../utils/CatchAsync");
// const AppError = require("../utils/AppErrors");
const Users = require("../modal/UserModal");
const jwt = require("jsonwebtoken");

const signInJwt = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET_KEY ,{
        expiresIn:process.env.JWT_EXPIRES_IN
    })
}

const createSendToken = (user , statusCode , res) =>{
    const token = signInJwt(user._id)
    // stored in cookie
    let cookieOptions = {
      expires: new Date( Date.now() + process.env.EXPIRES_COOKIE * 24 * 60 * 60 * 1000),
      httpOnly:true,
      secure:false
    }
    console.log(cookieOptions , "cookieee");
    // ----when we are productions use this condition -- this condtion
    // if("only for productions -- condtions") return cookieOptions.secure = true
    user.password = undefined;
    res.cookie('jwt' , token , cookieOptions);
      res.status(statusCode).json({
        message: "Success",
        token,
        data: {
          user,
        },
      });
  }


exports.signUp = CatchAsync(async (req, res, next) => {
    console.log(res , 'resssssssssssss ;postttt');
    const UsersAuth = await Users.create(req.body);
    createSendToken(UsersAuth , 201 , res);
});

exports.signIn = CatchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    if(!email || !password){
      return next({message:"please enter email and password", Error:400})
    }
    const user = await Users.findOne({email}).select('+password');
    if(!user || !(await user.correctPassword(password ,user.password))){
      return next({message:"Incorrect email and password", Error:401})
    }
    createSendToken(user , 200 , res);     
});

exports.getUsers = CatchAsync(async (req, res, next) => {
    const user = await Users.find();
    console.log(user , 'users');
    res.status(200).json({
        success:true,
        data:{
            user
        }
    })

})