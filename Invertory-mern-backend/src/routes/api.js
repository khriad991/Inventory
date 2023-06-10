const express =require("express");
const router= express.Router();
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const {
    Registration,
    Login,
    ProfileUpdate,
    ProfileDetails,
    RecoverVerifyEmail,
    RecoverVerifyOTP,
    RecoverResetPass} = require("../controllers/Users/UserController");
const {
    UpdateBrands,
    BrandList,
    BrandDropDown,
    CreateBrand} = require("../controllers/Brands/BrandsController");

//User Profile Route
router.post("/Registration",Registration)
router.post("/Login", Login);
router.post("/ProfileUpdate", AuthVerifyMiddleware , ProfileUpdate);
router.get("/ProfileDetails",AuthVerifyMiddleware, ProfileDetails)
router.get("/RecoverVerifyEmail/:email", RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp", RecoverVerifyOTP);
router.post("/RecoverResetPass", RecoverResetPass)

// Brands API Create--
router.post('/CreateBrand', AuthVerifyMiddleware , CreateBrand);
router.post('/UpdateBrand/:id',AuthVerifyMiddleware, UpdateBrands);
router.get("/BrandList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,BrandList);
router.get('/brandDropdown',AuthVerifyMiddleware,BrandDropDown);


// Router exports for app.js
module.exports = router