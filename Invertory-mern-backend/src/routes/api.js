const express =require("express");
const router= express.Router();
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const {Registration, Login, ProfileUpdate, ProfileDetails, RecoverVerifyEmail,RecoverVerifyOTP,RecoverResetPass} = require("../controllers/Users/UserController");
const {UpdateBrands, BrandList, BrandDropDown, CreateBrand} = require("../controllers/Brands/BrandsController");
const {CreateCategory, UpdateCategory, CategorysList, CategoryDropDown} = require("../controllers/Category/CateforysController");
const {CreateCustomers, UpdateCustomers, CustomerDropDown, CustomersList} = require("../controllers/Customers/CustomersController");
const {UpdateSuppliers, CreateSuppliers, SuppliersList, SuppliersDropDown} = require("../controllers/Suppliers/SupplirsController");
const {CreateExpenses, UpdateExpensesType, ExpensesTypeList, ExpensesTypeDropDown} = require("../controllers/Expenses/ExpensesTypeController");
const {UpdateExpenses} = require("../controllers/Expenses/ExpensesController");

//User Profile Route
router.post("/Registration",Registration);
router.post("/Login", Login);
router.post("/ProfileUpdate", AuthVerifyMiddleware , ProfileUpdate);
router.get("/ProfileDetails",AuthVerifyMiddleware, ProfileDetails);
router.get("/RecoverVerifyEmail/:email", RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp", RecoverVerifyOTP);
router.post("/RecoverResetPass", RecoverResetPass);

// Brands API Create--
router.post('/CreateBrand', AuthVerifyMiddleware ,CreateBrand);
router.post('/UpdateBrand/:id',AuthVerifyMiddleware, UpdateBrands);
router.get("/BrandList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,BrandList);
router.get('/brandDropdown',AuthVerifyMiddleware,BrandDropDown);


// API for Category
router.post('/CreateCategory',AuthVerifyMiddleware, CreateCategory);
router.post('/UpdateCategory/:id',AuthVerifyMiddleware,UpdateCategory);
router.get('/CategoryList/:pageNo/:perPage/:searchKeyword',AuthVerifyMiddleware , CategorysList);
router.get("/dropDownCategory",AuthVerifyMiddleware,CategoryDropDown);


// APi for Customers
router.post("/CreateCustomer",AuthVerifyMiddleware,CreateCustomers);
router.post("/UpdateCustomer/:id",AuthVerifyMiddleware,UpdateCustomers);
router.get("/CustomerList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,CustomersList);
router.get("/CustomerDropDown",AuthVerifyMiddleware,CustomerDropDown)

// API for supliers
router.post("/CreateSupplier",AuthVerifyMiddleware,CreateSuppliers);
router.post("/UpdateSupplier/:id",AuthVerifyMiddleware,UpdateSuppliers);
router.get("/SupplierList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware, SuppliersList);
router.get("/SupplierDropDown",AuthVerifyMiddleware,SuppliersDropDown);

// API for ExpensesTypeModel
router.post("/CreateExpensesType", AuthVerifyMiddleware, CreateExpenses);
router.post('/UpdateExpensesType/:id',AuthVerifyMiddleware,UpdateExpensesType);
router.get("/ExpensesTypeList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware , ExpensesTypeList);
router.get("/ExpensesTypeDropDown",AuthVerifyMiddleware,ExpensesTypeDropDown);

// API for Expenses
// router.post("/CreateExpenses", AuthVerifyMiddleware,CreateExpenses);
// router.post("/UpdateExpenses/:id",AuthVerifyMiddleware,UpdateExpenses);
router.post("/CreateExpenses",AuthVerifyMiddleware,CreateExpenses);
router.post("/UpdateExpenses/:id",AuthVerifyMiddleware,UpdateExpenses);


// Router exports for app.js
module.exports = router