const express = require('express');
const router = express.Router(); 
const controller = require('../controllers/user.controller');
const User_middleware = require("../middleware/User.middleware")

router.post('/signup', controller.register);
router.put('/login' , controller.login)
router.put("/isUserCheck", User_middleware, controller.isUserCheck);

module.exports = router;


