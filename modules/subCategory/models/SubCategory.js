import { Schema, model } from 'mongoose';

const SubCategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  categoryId: {
    type: String
  },
  imagePath: {
    type: String
  }
});

const SubCategory = model('subCategory', SubCategorySchema);

module.exports = SubCategory;
