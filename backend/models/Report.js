// models/Report.js
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  description: String,
  photo: String,
  location: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true }
  },
  status: { type: String, enum: ['pending', 'in-progress', 'resolved'], default: 'pending' },
  
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }
});

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;
