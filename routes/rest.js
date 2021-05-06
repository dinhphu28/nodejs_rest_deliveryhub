var express = require('express');
var router = express.Router();

/**
 * Assign routers
 */
var demoRouter = require('./demo/demo');

/**
 * Routing
 */
router.use('/demo', demoRouter);

/**
 * Export
 */
module.exports = router;