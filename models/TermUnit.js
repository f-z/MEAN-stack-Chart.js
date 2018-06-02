const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let TermUnit = new Schema({
  unit_name: {
    type: String
  },
  unit_year: {
    type: Number
  },
  unit_count: {
    type: Number
  }
}, {
    collection: 'termunits'
  });

module.exports = mongoose.model('TermUnit', TermUnit);
