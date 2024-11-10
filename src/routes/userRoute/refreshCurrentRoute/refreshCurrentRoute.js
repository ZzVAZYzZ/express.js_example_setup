const express = require("express");
const { validateRefreshToken } = require("../../../middlewares/validateRefreshToken");
const { refresh } = require("../../../controllers/userController");

const router = express.Router();
// private
router.route('/refresh').get(validateRefreshToken,refresh);




module.exports = router;