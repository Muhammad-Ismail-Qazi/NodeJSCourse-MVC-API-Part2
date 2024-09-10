const express = require('express');
const router = express.Router();
const userModel = require("../models/user_model.js");
const {getData,getById,createUser,updateUserById,deleteUserById} = require("../controllers/user_controller.js");


// Get all users
router.get('/', getData);

// Get by id 
router.get('/:id',getById );

router.post('/', createUser );



router.patch('/:id', updateUserById);

router.delete('/:id', deleteUserById);

module.exports = router
