import { Schema, model } from 'mongoose';

const ScooterSchema = new Schema({
  name: {
    type: String,
    requried: true
  },
  price: {
    type: Number,
    required: true
  },
  priceVAT: {
    type: Number,
    required: true
  },
  sku: {
    type: String
  },
  tags: {
    type: [String]
  },
  brand: {
    type: String
  },
  description: {
    type: String
  },
  itemNo: {
    type: String,
    required: true
  },
  categoryId: {
    type: String,
    default: ''
  },
  subCategoryId: {
    type: String,
    default: ''
  }
});

const Scooter = model('scooter', ScooterSchema);

module.exports = Scooter;
