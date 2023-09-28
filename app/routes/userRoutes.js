const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes
router.get("/getall", userController.getAllUsers);
router.get("/search", userController.search);
router.delete("/delete", userController.deleteUser);



module.exports = router;