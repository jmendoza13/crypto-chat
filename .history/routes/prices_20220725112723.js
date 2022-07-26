var express = require('express');
var router = express.Router();
var pricesCtrl = require('../controllers/prices')

router.get('/', pricesCtrl.index);

module.exports = router;