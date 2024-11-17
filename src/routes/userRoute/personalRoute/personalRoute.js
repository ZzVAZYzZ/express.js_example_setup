const express = require("express");
const vipRoute = require('./VIP/vipRoute');

const router = express.Router();

router.use('/personal',vipRoute);




module.exports = router;