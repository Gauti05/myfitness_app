const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Progress = require('../models/Progress'); // Your Mongoose model for progress

// Add or create new progress entry for a user
router.post('/', async (req, res) => {
  try {
    const { user, date, weight, notes } = req.body;

    // Validate required fields as needed

    const userId = new mongoose.Types.ObjectId(user);

    const newProgress = new Progress({
      user: userId,
      date: new Date(date),
      weight,
      notes,
    });

    const savedProgress = await newProgress.save();

    res.status(201).json(savedProgress);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Fetch all progress entries for a user sorted by latest date first
router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: 'Invalid user ID format' });
    }

    const progressList = await Progress.find({ user: new mongoose.Types.ObjectId(userId) })
      .sort({ date: -1 });

    res.json(progressList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
