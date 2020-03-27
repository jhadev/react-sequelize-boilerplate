// import router
const router = require('express').Router();

// import api route files
const exampleRoutes = require('./example-routes');

// set up and prepend api routes from imported files
router.use('/example', exampleRoutes);

// export packaged routes
module.exports = router;
