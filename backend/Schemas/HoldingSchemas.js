
const { Schema } = require('mongoose');

const holdingSchema = new Schema(
  {
    name:   { type: String, required: true },
    qty:    { type: Number, required: true },
    avg:    Number,
    price:  Number,
    net:    String,
    day:    String,
    isLoss: Boolean,
  },
  { timestamps: true }
);

module.exports = holdingSchema;      