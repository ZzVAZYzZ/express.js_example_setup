const express = require("express");
const router = express.Router();
const { bcryptTest } = require("../../../../controllers/testController");

router.route('/bcryptTest').post(bcryptTest);




module.exports = router;