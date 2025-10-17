const ChatMessageSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text: String,
  type: String, // 'user' | 'bot'
  date: { type: Date, default: Date.now }
});
module.exports = mongoose.model('ChatMessage', ChatMessageSchema);