// Import the mongoose library to define and interact with MongoDB schemas
const mongoose = require('mongoose');

// Define the schema for the 'Item' collection in MongoDB
const itemSchema = new mongoose.Schema({
  // Field to store the item name, which is a required string
  name: { type: String, required: true },
  
  // Field to store an optional image URL for the item
  image: { type: String },
  
  // Field to store an optional description of the item
  description: { type: String },
  
  // Field to indicate if tax is applicable to the item, defaulting to 'false'
  taxApplicability: { type: Boolean, default: false },
  
  // Field to store the tax rate for the item, defaulting to '0'
  tax: { type: Number, default: 0 },
  
  // Field to store the base price of the item, which is a required number
  baseAmount: { type: Number, required: true },
  
  // Field to store any discount applied to the item, defaulting to '0'
  discount: { type: Number, default: 0 },
  
  // Field to store the total amount for the item (including tax and discounts)
  totalAmount: { type: Number },
  
  // Field to store the parent ID of the item, referencing an ObjectId
  // This field is required and likely refers to the category or sub-category the item belongs to
  parentId: { type: mongoose.Schema.Types.ObjectId, required: true },
});

// Export the model to use it in other parts of the application
// The model is based on the 'itemSchema' and will interact with the 'Item' collection in the database
module.exports = mongoose.model('Item', itemSchema);
