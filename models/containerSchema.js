const mongoose = require('mongoose');

const containerSchema = new mongoose.Schema({
  containerId: { type: Number, required: true },
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model('Container', containerSchema);
