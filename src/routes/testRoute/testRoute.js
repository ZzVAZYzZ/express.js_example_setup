const express = require("express");
const router = express.Router();
const firstTestRoute = require('./firstTestRoute/firstTestRoute');
const errorTestRoute = require('./errorTestRoute/errorTestRoute');
const mongodbTestRoute = require('./mongodbTestRoute/mongodbTestRoute')

router.use('/test',firstTestRoute);
router.use('/test',errorTestRoute);
router.use('/test',mongodbTestRoute);



module.exports = router;