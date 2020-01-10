/* Er endnu ikke udviklet til brug hverken på server eller i klient */

import { Schema, model } from 'mongoose';

const InvoiceSchema = new Schema({
  orderId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  number: {
    type: Number,
    required: true
  },
  sellerVATNummer: {
    type: String,
    required: true
  },
  sellerName: {
    type: String,
    required: true,
    default: 'Top Scooter Nordic A/S'
  },
  sellerAddress: {
    type: String,
    required: true,
    default: 'Håndværkervej 25a, 4160'
  },
  buyerName: {
    type: String,
    required: true
  },
  buyerAddress: {
    type: String,
    required: true
  },
  buyerVAT: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  VATSize: {
    type: Number,
    required: true
  }
});

const Invoice = model('invoice', InvoiceSchema);

module.exports = Invoice;
