import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  name: {
    type: String,
    requried: true
  },
  stock: {
    type: Number,
    required: true
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
