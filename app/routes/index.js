var path = require('path');
var router = require('express').Router();

// Import all route groups
router.use('/auth', require('./auth.routes'));
router.use('/recipients', require('./recipient.routes'));
router.use('/facts', require('./fact.routes'));
router.use('/conversations', require('./conversation.routes'));
router.use('/webhook', require('./webhook.routes'));

module.exports = router;