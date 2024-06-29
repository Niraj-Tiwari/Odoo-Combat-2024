// models/Schedule.js
const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  day: { type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], required: true },
  time: { type: String, required: true }
});

const Schedule = mongoose.model('Schedule', scheduleSchema);
module.exports = Schedule;
