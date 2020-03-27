const router = require('express').Router();
const path = require('path');

// collect all api endpoints
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
