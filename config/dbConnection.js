const mongoose = require("mongoose");

// Function to connect to the MongoDB database
const connectToDatabase = async () => {
  try {
    // Establish a connection to MongoDB using the provided connection string
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Log a message if the connection is successful
    console.log("Database Connected Successfully");
  } catch (err) {
    // Log an error message if there's an issue connecting to the database
    console.log("Error While Connecting to DB", err.message);
  }
};

// Export the connectToDatabase function to be used in other parts of the application
module.exports = { connectToDatabase };
