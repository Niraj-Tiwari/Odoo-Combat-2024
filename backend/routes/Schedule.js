// routes/schedule.js
const express = require('express');
const router = express.Router();
const Schedule = require('../models/Schedule');
const authMiddleware = require('../middlewares/Auth');

router.get('/schedules', authMiddleware(), async (req, res) => {
  const schedules = await Schedule.find();
  res.send(schedules);
});

router.post('/schedule', authMiddleware(['admin']), async (req, res) => {
  const { day, time } = req.body;
  const schedule = new Schedule({ day, time });
  await schedule.save();
  res.send(schedule);
});

module.exports = router;
