var express = require('express');
var router = express.Router();
var doctorController = require("../controller/DoctorController");
router.route('/:id').post(doctorController.postDoctor).get(doctorController.getDoctorByHospital).delete(doctorController.deleteDoctor);
router.route('/').get(doctorController.getDoctor);
module.exports = router;
  