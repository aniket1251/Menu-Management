// Import the SubCategory model to interact with the 'SubCategory' collection in the database
const SubCategory = require('../models/SubCategory');

// Import the Category model to interact with the 'Category' collection in the database
const Category = require('../models/Category');

// Controller function to create a new sub-category
exports.createSubCategory = async (req, res) => {
  try {
    // Extract the 'categoryId' from the request parameters
    const { categoryId } = req.params;

    // Create a new SubCategory instance using the request body and the provided 'categoryId'
    const subCategory = new SubCategory({ ...req.body, categoryId });

    // Save the sub-category to the database
    await subCategory.save();

    // Respond with a 201 (Created) status and the created sub-category object
    res.status(201).json(subCategory);
  } catch (error) {
    // Handle any errors by responding with a 500 (Internal Server Error) status and the error message
    res.status(500).json({ error: error.message });
  }
};

// Controller function to fetch all sub-categories for a given category
exports.getSubCategories = async (req, res) => {
  try {
    // Extract the 'categoryId' from the request parameters
    const { categoryId } = req.params;

    // Find all sub-categories in the database that match the given 'categoryId'
    const subCategories = await SubCategory.find({ categoryId });

    // Respond with a 200 (OK) status and the list of sub-categories
    res.status(200).json(subCategories);
  } catch (error) {
    // Handle any errors by responding with a 500 (Internal Server Error) status and the error message
    res.status(500).json({ error: error.message });
  }
};

// Controller function to edit an existing sub-category
exports.editSubCategory = async (req, res) => {
  try {
    // Find a sub-category by its ID and update it with the data from the request body
    // The 'new: true' option ensures the updated document is returned
    const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });

    // Respond with a 200 (OK) status and the updated sub-category object
    res.status(200).json(subCategory);
  } catch (error) {
    // Handle any errors by responding with a 500 (Internal Server Error) status and the error message
    res.status(500).json({ error: error.message });
  }
};
