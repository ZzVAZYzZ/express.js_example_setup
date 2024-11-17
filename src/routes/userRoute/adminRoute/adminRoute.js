const express = require("express");
const { firstTest } = require("../../../controllers/testController");
const { auth } = require("../../../middlewares/auth");

const router = express.Router();
// private
router.route('/admin').get(auth(['admin']),firstTest);




module.exports = router;