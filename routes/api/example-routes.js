const router = require('express').Router();
const exampleController = require('../../controllers/exampleController');

// Matches with "/api/example"
router
  .route('/')
  .get(exampleController.findAll)
  .post(exampleController.create);

module.exports = router;
