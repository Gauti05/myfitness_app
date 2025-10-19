const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const ChatMessage = require('../models/ChatMessage');

// Add a chat message
router.post('/', async (req, res) => {
  try {
    // If you want to validate user id, do it here
    const { user, message, sender } = req.body;
    if (!mongoose.Types.ObjectId.isValid(user))
      return res.status(400).json({ error: 'Invalid user ID format' });

    const msg = new ChatMessage({ user, message, sender });
    await msg.save();
    res.status(201).json(msg);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get chat messages by user
router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    if (!mongoose.Types.ObjectId.isValid(userId))
      return res.status(400).json({ error: 'Invalid user ID format' });
    // Now query using ObjectId type
    const messages = await ChatMessage.find({ user: new mongoose.Types.ObjectId(userId) })
      .sort({ createdAt: 1 }); // oldest first (use -1 for latest first)
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
