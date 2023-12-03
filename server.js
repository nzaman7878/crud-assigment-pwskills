// Import the Express library
const express = require("express");

// Import the CORS middleware for handling Cross-Origin Resource Sharing
const cors = require("cors");

// Import the database connection function
const { connectToDatabase } = require("./config/dbConnection");

// Import the user route
const { userRoute } = require("./routes/User.route");

// Load environment variables from the .env file
require("dotenv").config();

// Create an Express application instance
const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(express.json()); // middleware to work with JSON data

// Use the userRoute for routes starting with "/"
app.use("/", userRoute); // user route

// Start the Express application and listen on the specified port
app.listen(process.env.PORT, async () => {
    // Connect to the database before starting the server
    await connectToDatabase();
    
    // Log a message indicating that the server has started
    console.log("Server Started on PORT NO:", process.env.PORT);
});
