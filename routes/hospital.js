var express = require('express');
var router = express.Router();
var hospitalController = require("../controller/HospitalController");
router.route('/').post(hospitalController.postHospital).get(hospitalController.getHospital);
router.route('/:id').get(hospitalController.getHospitalById).delete(hospitalController.deleteHospital);
module.exports = router;
