var express = require('express');
var router = express.Router();
var postsCtrl = require('../controllers/prices')

router.get('/', pricesCtrl.index);

module.exports = router;