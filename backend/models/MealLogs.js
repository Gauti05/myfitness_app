
const mongoose = require('mongoose');

const MealLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  breakfast: String,
  lunch: String,
  dinner: String,
});


module.exports = mongoose.model('MealLog', MealLogSchema);