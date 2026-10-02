const express = require("express");

const router = express.Router();

const {
  register,
  login,
  verifyEmail,
} = require("../controllers/auth.controllers");

const validate = require("../middlewares/validate");

const {
  registerSchema,
  loginSchema,
} = require("../validators/user.validators");

router.post(
  "/register",
  validate(registerSchema),
  register
  );

router.post(
  "/login",
  validate(loginSchema),
  login
);
router.get(
  "/verify-email",
  verifyEmail
);

module.exports = router;
