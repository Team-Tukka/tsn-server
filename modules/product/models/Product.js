import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  name: {
    type: String,
    requried: true
  },
  sku: {
    type: String
  },
  tags: {
    type: String
  },
  brand: {
    type: String
  },
  description: {
    type: String
  },
  itemNo: {
    type: Number,
    required: true
  },
  categoryId: {
    type: String
  },
  subCategoryId: {
    type: String
  }
});

const Product = model("product", ProductSchema);

module.exports = Product;
