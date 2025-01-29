// Import the mongoose library to define and interact with MongoDB schemas
const mongoose = require('mongoose');

// Define the schema for the 'Category' collection in MongoDB
const categorySchema = new mongoose.Schema({
  // Field to store the category name, which is a required string
  name: { type: String, required: true },
  
  // Field to store an optional image URL for the category
  image: { type: String },
  
  // Field to store an optional description of the category
  description: { type: String },
  
  // Field to indicate if tax is applicable to the category, defaulting to 'false'
  taxApplicability: { type: Boolean, default: false },
  
  // Field to store the tax rate for the category, defaulting to '0'
  tax: { type: Number, default: 0 },
  
  // Field to specify the type of tax applicable (e.g., percentage or fixed), as an optional string
  taxType: { type: String },
});

// Export the model to use it in other parts of the application
// The model is based on the 'categorySchema' and will interact with the 'Category' collection in the database
module.exports = mongoose.model('Category', categorySchema);
