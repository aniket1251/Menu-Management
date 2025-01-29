// Importing the Item model
const Item = require('../models/Item'); // Represents the schema for Item data in the database

// Controller function to create a new item
exports.createItem = async (req, res) => {
  try {
    const { parentId } = req.params; // Extracting the parentId (category or subcategory) from request parameters

    // Creating a new item instance using data from the request body and associating it with the parentId
    const item = new Item({ ...req.body, parentId });

    // Saving the new item to the database
    await item.save();

    // Sending a success response with the created item data
    res.status(201).json(item);
  } catch (error) {
    // Handling errors and sending a server error response with the error message
    res.status(500).json({ error: error.message });
  }
};

// Controller function to fetch all items
exports.getItems = async (req, res) => {
  try {
    // Retrieving all items from the database
    const items = await Item.find();

    // Sending a success response with the retrieved items
    res.status(200).json(items);
  } catch (error) {
    // Handling errors and sending a server error response with the error message
    res.status(500).json({ error: error.message });
  }
};

// Controller function to edit an existing item
exports.editItem = async (req, res) => {
  try {
    // Finding an item by its ID and updating it with data from the request body
    const item = await Item.findByIdAndUpdate(
      req.params.id, // The ID of the item to update, provided in the request parameters
      req.body, // The updated data for the item
      { new: true } // Ensures the updated document is returned after modification
    );

    // Sending a success response with the updated item data
    res.status(200).json(item);
  } catch (error) {
    // Handling errors and sending a server error response with the error message
    res.status(500).json({ error: error.message });
  }
};

// Controller function to search for items by their name
exports.searchItemByName = async (req, res) => {
  try {
    const { name } = req.query; // Extracting the search term (name) from the query parameters

    // Searching for items where the name matches the provided term, case-insensitively
    const items = await Item.find({ name: { $regex: name, $options: 'i' } });

    // Sending a success response with the search results
    res.status(200).json(items);
  } catch (error) {
    // Handling errors and sending a server error response with the error message
    res.status(500).json({ error: error.message });
  }
};
