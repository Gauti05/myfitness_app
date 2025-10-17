const WorkoutLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  exercises: [String]
});
module.exports = mongoose.model('WorkoutLog', WorkoutLogSchema);