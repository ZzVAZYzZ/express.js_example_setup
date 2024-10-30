const express = require("express");
const router = express.Router();
const firstTestRoute = require('./firstTestRoute/firstTestRoute');
const errorTestRoute = require('./errorTestRoute/errorTestRoute');
const mongodbTestRoute = require('./mongodbTestRoute/mongodbTestRoute')
const encryptionTestRoute = require('./encryptionTestRoute/encryptionTestRoute')

router.use('/test',firstTestRoute);
router.use('/test',errorTestRoute);
router.use('/test',mongodbTestRoute);
router.use('/test',encryptionTestRoute);


module.exports = router;