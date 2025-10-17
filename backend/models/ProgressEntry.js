const mongoose = require('mongoose');

const ProgressEntrySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  weight: Number,
  workoutDone: Boolean,
  streak: Number
});
module.exports = mongoose.model('ProgressEntry', ProgressEntrySchema);