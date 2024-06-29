// routes/admin.js
const express = require('express');
const router = express.Router();
const Report = require('../models/Report');
const authMiddleware = require('../middlewares/Auth');

router.post('/assign-task', authMiddleware(['admin']), async (req, res) => {
  const { reportId, userId } = req.body;
  const report = await Report.findById(reportId);
  report.assignedTo = userId;
  report.status = 'in-progress';
  await report.save();
  res.send(report);
});

router.get('/tasks', authMiddleware(['collector']), async (req, res) => {
  const reports = await Report.find({ assignedTo: req.user._id });
  res.send(reports);
});

module.exports = router;
