// Import the mongoose library for MongoDB interactions
const mongoose = require("mongoose");

// Define a mongoose schema for the 'user' collection
const userSchema = mongoose.Schema({
    // Name of the user, should be a string and is required
    name: { type: String, required: true },
    
    // Email of the user, should be a string and is required
    email: { type: String, required: true },
    
    // Password of the user, should be a string and is required
    password: { type: String, required: true }
});

// Create a mongoose model using the schema for the 'user' collection
const UserModel = mongoose.model("user", userSchema);

// Export the UserModel so it can be used in other parts of the application
module.exports = { UserModel };
