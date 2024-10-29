const express = require("express");
const { firstTest } = require("../../../controllers/testController");


const router = express.Router();

router.route('/firstTest').get(firstTest);




module.exports = router;