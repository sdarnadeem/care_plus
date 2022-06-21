const express = require("express");
const router = express.Router();
const adminAuthController = require("../../controllers/admin/adminAuthController");

// const controller = require("../../controllers/Admin/controller");

router
  .route("/")
  .get(adminAuthController.logout)
  .post(adminAuthController.adminLogin);

router.route("/otpLogin").post(adminAuthController.otpLogin);

module.exports = router;
