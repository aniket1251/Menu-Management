// Importing the Express framework to create a router and handle HTTP requests.
const express = require('express');

// Importing functions from the subCategoryController module that handle subcategory operations.
const { createSubCategory, getSubCategories, editSubCategory } = require('../controllers/subCategoryController');

// Creating a new router instance using the Express framework.
const router = express.Router();

// Defining a POST route that creates a new subcategory for a specific category.
// The ':categoryId' is a route parameter representing the ID of the category.
router.post('/:categoryId', createSubCategory);

// Defining a GET route that retrieves all subcategories for a specific category.
// The ':categoryId' is a route parameter used to filter subcategories by category ID.
router.get('/:categoryId', getSubCategories);

// Defining a PUT route that updates an existing subcategory by its unique ID.
// The ':id' is a route parameter representing the ID of the subcategory to be edited.
router.put('/:id', editSubCategory);

// Exporting the router to be used in other parts of the application.
module.exports = router;
