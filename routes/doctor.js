const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send({ data: "here is doctor data" });
});

module.exports = router;