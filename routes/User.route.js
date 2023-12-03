// Import the Express library
const express = require("express");

// Import controller functions for user operations
const { getUser, registerUser, loginUser } = require("../controllers/userController");

// Create an Express Router instance
const userRoute = express.Router();

// Endpoint to handle user registration
userRoute.post("/register", registerUser); // to register user

// Endpoint to handle user login
userRoute.post("/login", loginUser); // to login user

// Export the userRoute so it can be used in other parts of the application
module.exports = { userRoute };
