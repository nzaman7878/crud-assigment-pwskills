// Middleware function for validating login data
exports.loginDataValidate = (req, res, next) => {
    // Destructure email and password from the request body
    const { email, password } = req.body;

    // Check if request body exists and both email and password are provided
    if (req.body && email && password) {
        // If all required data is present, move on to the next middleware or route handler
        next();
    } else {
        // If any of the required data is missing, send a 404 status with an error message
        res.status(404).send({ msg: "All input fields are required" });
    }
}
