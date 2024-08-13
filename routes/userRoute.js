const express = require("express");

const userController = require("../controller/userController");
const authController = require("../controller/authController");
const { protectedRoute } = require("../middlewares/protectedRoute");
const { uploadToServer } = require("../middlewares/multer");

const router = express.Router();
//  router.post('/',userController.createUser);
router.post("/signup", authController.signupUser);
router.post("/login", authController.loginUser);

// router.get("/verify", protectedRoute);

router.patch("/upload-image", protectedRoute, uploadToServer, userController.uploadImage);

module.exports = router;
