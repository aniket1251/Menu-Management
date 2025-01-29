// Importing required modules
const express = require('express');// Express is a web framework for building APIs and web applications
const mongoose = require('mongoose');// Mongoose is an ODM (Object Data Modeling) library for MongoDB
const dotenv = require('dotenv');// dotenv is used to load environment variables from a .env file

// Importing route files for categories, subcategories, and items
const categoryRoutes = require('./routes/categoryRoutes');// Routes for handling category-related API endpoints
const subCategoryRoutes = require('./routes/subCategoryRoutes');// Routes for handling subcategory-related API endpoints
const itemRoutes = require('./routes/itemRoutes');// Routes for handling item-related API endpoints

// Initializing the Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());// Allows the server to handle JSON data in request bodies

// Loading environment variables from the .env file
dotenv.config();// Ensures process.env has access to variables defined in .env

// Setting up route handlers
app.use('/api/categories', categoryRoutes);// All requests to /api/categories are handled by categoryRoutes
app.use('/api/subcategories', subCategoryRoutes);// All requests to /api/subcategories are handled by subCategoryRoutes
app.use('/api/items', itemRoutes);// All requests to /api/items are handled by itemRoutes

// Connecting to the MongoDB database using Mongoose
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true, // Ensures the use of the new MongoDB connection string parser
    useUnifiedTopology: true, // Opts into using the new connection management engine
  })
  .then(() => console.log('MongoDB connected')) // Logs a success message when the database connection is established
  .catch((err) => console.error('MongoDB connection error:', err)); // Logs an error message if the connection fails

// Defining the server's listening port, defaulting to 5000 if PORT is not defined
const PORT = process.env.PORT || 5000;

// Starting the server and listening for incoming requests
app.listen(PORT, (err) => {
    if (err) {
      console.error('Error starting server:', err); // Logs an error message if the server fails to start
    } else {
      console.log(`Server running on port ${PORT}`); // Logs a success message with the port number if the server starts successfully
    }
  });
  
