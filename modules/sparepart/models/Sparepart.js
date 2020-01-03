import { Schema, model } from 'mongoose';

const SparepartSchema = new Schema({
  itemNo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  priceVAT: {
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

const Sparepart = model('sparepart', SparepartSchema);

module.exports = Sparepart;
