var express = require('express');
var router = express.Router();
var bloodController = require("../controller/BloodController");
router.route('/').post(bloodController.postBlood).get(bloodController.getBlood);
router.route('/:id').delete(bloodController.deleteBlood);
router.route('/search').get(bloodController.getBloodByGroup);
module.exports = router;