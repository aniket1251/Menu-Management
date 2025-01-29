// Importing the Express library, which is used to create and manage routes for the application.
const express = require('express');

// Importing specific controller functions (createCategory, getCategories, editCategory) from the categoryController file.
// These functions handle the logic for creating, retrieving, and editing categories, respectively.
const { createCategory, getCategories, editCategory } = require('../controllers/categoryController');

// Initializing the Express router to define route handlers.
const router = express.Router();

// Defining a POST route at the root URL ('/'). 
// This route is used to create a new category by calling the 'createCategory' function from the controller.
router.post('/', createCategory);

// Defining a GET route at the root URL ('/'). 
// This route retrieves all categories by calling the 'getCategories' function from the controller.
router.get('/', getCategories);

// Defining a PUT route with a dynamic parameter ':id' (e.g., '/123'). 
// This route edits an existing category identified by its ID, using the 'editCategory' function from the controller.
router.put('/:id', editCategory);

// Exporting the router object so it can be used in other parts of the application.
// This allows the defined routes to be integrated into the main application file.
module.exports = router;
