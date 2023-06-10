const express =require("express");
const router= express.Router();
const UserController = require("../controllers/Users/UserController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const {Registration, Login, ProfileUpdate, ProfileDetails, RecoverVerifyEmail, RecoverVerifyOTP, RecoverResetPass} = require("../controllers/Users/UserController");

//User Profile Route
router.post("/Registration",Registration)
router.post("/Login", Login);
router.post("/ProfileUpdate", AuthVerifyMiddleware , ProfileUpdate);
router.get("/ProfileDetails",AuthVerifyMiddleware, ProfileDetails)
router.get("/RecoverVerifyEmail/:email", RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp", RecoverVerifyOTP);
router.post("/RecoverResetPass", RecoverResetPass)



// Router exports for app.js
module.exports = router