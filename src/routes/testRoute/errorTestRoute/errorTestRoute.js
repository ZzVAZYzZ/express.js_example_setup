const express = require("express");
const { errorTest } = require("../../../controllers/testController");


const router = express.Router();

router.route('/errorTest').get(errorTest);




module.exports = router;