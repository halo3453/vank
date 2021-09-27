const mongoose = require('mongoose'); 
const { Schema, Types } = mongoose;

const currencies = ['USD', 'EUR', 'CLP'];

const CustomerSchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  internalCode: {
    type: String,
    required: true,
  },
  taxId: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    enum: currencies,
    required: true,
  },
  requestsLimit: {
    type: Number,
    required: true,
  },
  bancks: {
    type: [Number],
    required: true,
  },
});


module.exports = mongoose.model('Customer', CustomerSchema);