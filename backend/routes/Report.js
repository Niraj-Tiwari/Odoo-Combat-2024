// routes/Report.js
const express = require('express');
const router = express.Router();
const Report = require('../models/Report');
const authMiddleware = require('../middlewares/Auth');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/report', authMiddleware(['resident']), upload.single('photo'), async (req, res) => {
  const { description, location } = req.body;
  const report = new Report({
    description,
    photo: req.file.path,
    location: JSON.parse(location),
    status: 'pending'
  });
  await report.save();
  res.send(report);
});

router.get('/reports', authMiddleware(['admin']), async (req, res) => {
  const reports = await Report.find();
  res.send(reports);
});

module.exports = router;
