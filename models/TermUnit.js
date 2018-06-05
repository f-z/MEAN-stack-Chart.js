const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let TermUnit = new Schema({
  term: {
    type: String
  },
  date: {
    type: Number
  },
  count: {
    type: Number
  }
}, {
    collection: 'termunits'
  });

module.exports = mongoose.model('TermUnit', TermUnit);
