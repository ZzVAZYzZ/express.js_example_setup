const express = require("express");
const router = express.Router();
const testRoute = require('./testRoute/testRoute')
const userRoute = require('./userRoute/userRoute')

router.use('/api',userRoute);
router.use('/api',testRoute);


module.exports = router;