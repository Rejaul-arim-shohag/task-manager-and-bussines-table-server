const express = require('express');
const router = express.Router();
const authVerifyMiddleware = require('../middleware/AuthVerifyMiddleware')
const UserController = require('../Controllers/UserController')
const TaksController = require('../Controllers/TaskController')
const ProductsController = require("../Controllers/ProductsController")

//product table manage
router.get("/ProductList/:pageNo/:perPage/:searchKeyword?",ProductsController.productList);
//user 
router.get("/test", UserController.test)
router.post("/registration", UserController.userRegistration);
router.post("/login", UserController.login);
router.post("/profileUpdate",authVerifyMiddleware, UserController.profileUpdate);
router.get("/profileDetails",authVerifyMiddleware, UserController.profileDetails);
router.get("/RecoverVerifyEmail/:email",UserController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",UserController.RecoverVerifyOTP);
router.post("/RecoverResetPass",UserController.RecoverResetPass);



//task
router.post("/createTask",authVerifyMiddleware, TaksController.createTask);
router.get("/deleteTask/:id",authVerifyMiddleware, TaksController.deleteTask);
router.get("/updateTaskStatus/:id/:status",authVerifyMiddleware, TaksController.updateTaskStatus);
router.get("/listsTaskByStatus/:status",authVerifyMiddleware, TaksController.listsTaskByStatus);
router.get("/taskStatusCount",authVerifyMiddleware, TaksController.taskStatusCount);



module.exports = router;