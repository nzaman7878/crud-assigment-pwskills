# crud-assigment-pwskills

# Project Structure
/user-management-backend

  /config
         dbConnection.js
         
  /controllers
    features.js
    userController.js

  /midllewares
     loginDataValidate.js
     registerDataValidate.js

  /models
    User.model.js

  /routes
    userRoutes.js

  server.js

  .env

  package.json

# Setting Up MongoDB
Make sure you have MongoDB installed and running. You can create a database and a user for your application.

# .env File
Create a .env file at the root of your project with the following content:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/your-database-name
JWT_SECRET=your-secret-key

# Install Dependencies
Run npm install to install the necessary packages.

Endpoints

# login

login user with payload {email: <your email id>, password: <your password> }
required field email and password

# register

register user with payload {name: <your name>, email: <your email>, password: <your password}
unique field email
required field email, password
encrypt password automatically

# Packages used

express (api server)
mongoose (mongodb framework)
bcrypt (password encryption)
jsonwebtoken (send access token for authorization and access control)
dotenv (setup environment variables)


# Dev dependency

mocha (manage test cases)

chai (test api logic)

chai-http (test api request)

nodemon (tracking file changes)
