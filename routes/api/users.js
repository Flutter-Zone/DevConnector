const express = require('express');

const router = express.Router();


// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.route('/test')
.get((req, res) => res.status(200).json({
  msg: "Users works"
}));

module.exports = router;