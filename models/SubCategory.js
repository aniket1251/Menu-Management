// Importing the mongoose library, which is used to interact with MongoDB.
const mongoose = require('mongoose');

// Defining a schema for the SubCategory collection in MongoDB.
const subCategorySchema = new mongoose.Schema({
  // 'name' field: a required string that stores the name of the subcategory.
  name: { type: String, required: true },

  // 'image' field: an optional string that stores the URL or path of an image associated with the subcategory.
  image: { type: String },

  // 'description' field: an optional string that provides additional details about the subcategory.
  description: { type: String },

  // 'taxApplicability' field: a boolean indicating whether the subcategory is subject to tax. Defaults to false.
  taxApplicability: { type: Boolean, default: false },

  // 'tax' field: a number indicating the tax rate or amount for the subcategory. Defaults to 0.
  tax: { type: Number, default: 0 },

  // 'categoryId' field: an ObjectId that references the 'Category' collection, indicating the parent category.
  // This field is required to establish a relationship between subcategories and their main category.
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
});

// Exporting the model so it can be used in other parts of the application.
// The model connects the 'SubCategory' schema to the MongoDB collection.
module.exports = mongoose.model('SubCategory', subCategorySchema);
