const express = require('express');
const router = express.Router();
const WorkoutLog = require('../models/WorkoutLog');
const { route } = require('./users');


// Add a workout log
router.post('/', async (req , res ) =>{
    try {
       const log = new WorkoutLog(req.body);
         await log.save(); 
            res.status(201).json(log);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})



// Get workouts by user//
router.get('/:userId', async (req, res) => {
  try {
    const logs = await WorkoutLog.find({ user: req.params.userId });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;