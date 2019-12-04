import { Schema, model } from 'mongoose';

const MailSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  email: {
    type: String,
    requried: true
  },
  phone: {
    type: Number
  },
  message: {
    type: String,
    required: true
  }
});

const Mail = model('mail', MailSchema);

module.exports = Mail;
