const express = require("express");

const router = express.Router();

const protect = require("../middlewares/auth");
const { getProfile } = require("../controllers/user.controller");

router.get("/profile", protect, getProfile);

module.exports = router;