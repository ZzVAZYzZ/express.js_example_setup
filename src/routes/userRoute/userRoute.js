const express = require("express");
const router = express.Router();

const loginRoute = require('./loginRoute/loginRoute')

router.use('/users',loginRoute);



module.exports = router;