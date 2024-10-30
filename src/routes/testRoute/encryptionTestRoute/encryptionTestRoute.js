const express = require("express");
const bcryptTestRoute = require('./encryptedAloRoute/bcryptTestRoute')


const router = express.Router();

router.use('/encryptionTest',bcryptTestRoute);




module.exports = router;