const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  points: {
    type: Number
  },
  assists: {
    type: Number
  },
  rebounds: {
    type: Number
  },
  steals: {
    type: Number
  },
  blocks: {
    type: Number
  },
});

module.exports = Item = mongoose.model('item', ItemSchema);