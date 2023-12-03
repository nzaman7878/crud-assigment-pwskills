// Middleware function for validating registration data
exports.registerDataValidate = (req, res, next) => {
    // Destructure name, email, and password from the request body
    const { name, email, password } = req.body;

    // Check if request body exists and name, email, and password are provided
    if (req.body && name && email && password) {
        // If all required data is present, move on to the next middleware or route handler
        next();
    } else {
        // If any of the required data is missing, send a 404 status with an error message
        res.status(404).send({ msg: "All input fields are required" });
    }
}
