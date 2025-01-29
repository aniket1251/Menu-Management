// Importing the Express library, which is used to create and manage HTTP routes for the application.
const express = require('express');

// Importing specific controller functions (createItem, getItems, editItem, searchItemByName) from the itemController file.
// These functions handle the logic for creating, retrieving, editing, and searching for items, respectively.
const { createItem, getItems, editItem, searchItemByName } = require('../controllers/itemController');

// Initializing an Express router instance to define route handlers.
const router = express.Router();

// Defining a POST route with a dynamic parameter ':parentId' (e.g., '/123'). 
// This route is used to create a new item associated with a parent category or subcategory.
// The logic for creating the item is implemented in the 'createItem' function from the controller.
router.post('/:parentId', createItem);

// Defining a GET route at the root URL ('/'). 
// This route retrieves all items by calling the 'getItems' function from the controller.
router.get('/', getItems);

// Defining a PUT route with a dynamic parameter ':id' (e.g., '/123'). 
// This route edits an existing item identified by its ID, using the 'editItem' function from the controller.
router.put('/:id', editItem);

// Defining a GET route for the '/search' endpoint.
// This route allows searching for items by name, handled by the 'searchItemByName' function in the controller.
router.get('/search', searchItemByName);

// Exporting the router object so it can be used in other parts of the application.
// This allows the defined routes to be integrated into the main application file.
module.exports = router;
