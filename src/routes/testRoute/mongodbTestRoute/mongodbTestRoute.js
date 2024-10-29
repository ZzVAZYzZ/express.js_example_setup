const express = require("express");
const { postTestMongodb } = require("../../../controllers/testController");
const router = express.Router();


router.route('/mongodbTest').post(postTestMongodb);




module.exports = router;