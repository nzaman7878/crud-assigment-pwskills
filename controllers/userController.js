const { UserModel } = require("../models/User.model");

// Function to register a new user
exports.registerUser = async (req, res) => {
    // Destructuring user information from the request body
    const { name, email, password } = req.body;
    try {
        // Creating a new document in the database using UserModel
        await UserModel.create({ ...req.body });
        // Sending a success response to the client
        res.status(200).send({ msg: "User Registered Successfully" });
    } catch (error) {
        // Handling errors and sending an error response to the client
        res.status(501).send({ msg: error.message });
    }
};

// Function to log in an existing user
exports.loginUser = async (req, res) => {
    // Destructuring user credentials from the request body
    const { email, password } = req.body;
    try {
        // Finding a user with the provided email in the database
        const userData = await UserModel.findOne({ email });
        if (userData) {
            // Checking if the provided password matches the stored password
            if (userData.password == password) {
                // Sending a success response to the client upon successful login
                res.status(200).send({ msg: "User Login Successfully, Enjoy!" });
            } else {
                // Sending an unauthorized response if the password is incorrect
                res.status(401).send({ msg: "You have Entered Wrong Password" });
            }
        } else {
            // Sending a not found response if no user is associated with the provided email
            res.status(404).send({ msg: "No Account Found associated with this email" });
        }
    } catch (error) {
        // Handling errors and sending an error response to the client
        res.status(501).send({ msg: error.message });
    }
};
