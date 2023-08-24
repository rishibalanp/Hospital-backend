var express = require('express');
var router = express.Router();
var UserController = require("../controller/UserController");
/* users Login and Signup */
router.post("/signup", UserController.signUp);
router.post("/signin", UserController.signIn);
// users
router.get("/", UserController.getUsers);
module.exports = router;