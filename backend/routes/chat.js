const express = require('express');
const router = express.Router();
const ChatMessage = require('../models/ChatMessage');
const { route } = require('./users');

// Add a chat message
router.post('/', async (req , res) =>{
    try{
        const msg = new ChatMessage(req.body);
        await msg.save();
        res.status(201).json(msg);
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
})


// Get chat messages by user
router.get('/:userId', async (req, res) => {
  try {
    const messages = await ChatMessage.find({ user: req.params.userId });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;