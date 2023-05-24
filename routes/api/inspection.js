const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Inspection = require('../../models/Inspection');

// @route    GET api/inspection
// @desc     Get all inspections
// @access   private
router.get('/', auth, async (req, res) => {
  try {
    const inspections = await Inspection.find();
    res.json(inspections);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
