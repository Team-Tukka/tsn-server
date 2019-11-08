import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 32
  },
  created: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date,
    default: Date.now
  },
  adminRole: {
    type: Boolean
  },
  address: {
    type: String,
    required: true
  },
  zipCode: {
    type: Number,
    required: true
  },
  phone: {
    type: Number
  }
});

const User = model("user", UserSchema);

module.exports = User;
