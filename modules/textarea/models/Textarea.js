import { Schema, model } from "mongoose";

const TextareaSchema = new Schema({
  text: {
    type: String,
    required: true
  }
});

const Textarea = model("text", TextareaSchema);

module.exports = Textarea;
