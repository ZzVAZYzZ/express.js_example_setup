const express = require("express");
const { logout } = require("../../../controllers/userController");

const router = express.Router();

router.route('/logout').post(logout);




module.exports = router;