const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const ProfileDetails = require('../models/ProfileDetails');

// Create or update profile based on authenticated user
router.post('/', async (req, res) => {
  try {
    const { user, ...rest } = req.body;
    const userId = new mongoose.Types.ObjectId(user);

    let profile = await ProfileDetails.findOne({ user: userId });

    if (profile) {
      Object.assign(profile, rest);
      await profile.save();
      return res.json(profile);
    }

    profile = new ProfileDetails({ user: userId, ...rest });
    await profile.save();
    res.json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Fetch profile by user ID
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(userId))
      return res.status(400).json({ error: 'Invalid user ID' });

    const profile = await ProfileDetails.findOne({ user: new mongoose.Types.ObjectId(userId) });
    if (!profile) return res.status(404).json({ error: 'Profile not found' });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
