// Importing the Category model
const Category = require('../models/Category'); // Represents the schema for Category data in the database

// Controller function to create a new category
exports.createCategory = async (req, res) => {
  try {
      // Creating a new category instance using data from the request body
      const category = new Category(req.body);

      // Saving the new category to the database
      await category.save();

      // Sending a success response with the created category data
      res.status(201).json(category);
  } catch (error) {
      // Handling errors and sending a server error response with the error message
      res.status(500).json({ error: error.message });
  }
};

// Controller function to fetch all categories
exports.getCategories = async (req, res) => {
    try {
        // Retrieving all categories from the database
        const categories = await Category.find();

        // Sending a success response with the retrieved categories
        res.status(200).json(categories);
    } catch (error) {
        // Handling errors and sending a server error response with the error message
        res.status(500).json({ error: error.message });
    }
};

// Controller function to edit an existing category
exports.editCategory = async (req, res) => {
    try {
        // Finding a category by its ID and updating it with data from the request body
        const category = await Category.findByIdAndUpdate(
            req.params.id, // The ID of the category to update, provided in the request parameters
            req.body, // The updated data for the category
            { new: true } // Ensures the updated document is returned after modification
        );

        // Sending a success response with the updated category data
        res.status(200).json(category);
    } catch (error) {
        // Handling errors and sending a server error response with the error message
        res.status(500).json({ error: error.message });
    }
};
