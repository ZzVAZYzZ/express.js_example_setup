const express = require("express");
const { auth } = require("../../../../middlewares/auth");
const { vip } = require("../../../../controllers/vipController");

const router = express.Router();

router.route("/").post(auth(["vip0", "vip1", "vip2", "vip3", "vip4"]),vip);

module.exports = router;
