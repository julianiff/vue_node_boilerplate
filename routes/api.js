const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.json({test: "The Frontend and Backend connection works"});
});

module.exports = router;
