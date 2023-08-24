const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send({ data: "here is user data" });
});
router.get("/users", (req, res) => {
    res.send({ data: "here is user data" });
});
module.exports = router;