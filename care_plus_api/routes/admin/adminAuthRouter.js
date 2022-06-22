const express = require("express");
const router = express.Router();
const adminAuthController = require("../../controllers/admin/adminAuthController");

// const controller = require("../../controllers/Admin/controller");

router
  .route("/")
  .get(adminAuthController.logout)
  .post(adminAuthController.adminLogin);

router.route("/otpLogin").post(adminAuthController.otpLogin);
router
  .route("/getUserData")
  .get(adminAuthController.protect, adminAuthController.getUserData);

router.route("/logout").get(adminAuthController.logout);

module.exports = router;
