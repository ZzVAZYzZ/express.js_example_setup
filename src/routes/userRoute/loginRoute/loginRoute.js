const express = require("express");
const { login } = require("../../../controllers/userController");

const router = express.Router();

router.route('/login').post(login);




module.exports = router;