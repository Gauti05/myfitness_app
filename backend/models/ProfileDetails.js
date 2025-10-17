
const mongoose = require('mongoose');
const ProfileDetailsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  age: Number,
  height: Number,
  weight: Number,
  gender: String,
  goal: String,
  healthIssues: [String],
  diet: String,
  workoutPreference: String,
  workoutDuration: String
});
module.exports = mongoose.model('ProfileDetails', ProfileDetailsSchema);