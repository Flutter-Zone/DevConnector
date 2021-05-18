const express = require('express');

const router = express.Router();

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.route('/test')
.get((req, res) => res.status(200).json({
  msg: "Profile works"
}));

module.exports = router;