const express = require("express");
const router = express.Router();

const loginRoute = require('./loginRoute/loginRoute');
const registerRoute = require('./registerRoute/registerRoute');
const currentRoute = require('./currentRoute/currentRoute');
const logoutRoute = require('./logoutRoute/logoutRoute');

router.use('/users',loginRoute);
router.use('/users',registerRoute);
router.use('/users',currentRoute);
router.use('/users',logoutRoute);



module.exports = router;