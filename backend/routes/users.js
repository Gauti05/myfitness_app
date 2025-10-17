const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const ProfileDetails = require('../models/ProfileDetails');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    // Create default profile for user
    const profile = new ProfileDetails({
      user: user._id,
      age: null,
      height: null,
      weight: null,
      gender: '',
      goal: ''
    });
    await profile.save();

    res.status(201).json({ _id: user._id, username: user.username, email: user.email });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login route (for completeness)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: 'Invalid credentials' });

    res.json({ user: { _id: user._id, username: user.username, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
