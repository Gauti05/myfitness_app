const express = require('express');
const router = express.Router();
const MealLog = require('../models/MealLog');

//add a meal log
router.post('/', async (req , res)=>{
    try{
const log = new MealLog(req.body);
    await log.save();
    res.status(201).json(log);
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
})


// Get meals by user
router.get('/:userId', async (req, res) => {
  try {
    const logs = await MealLog.find({ user: req.params.userId });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;