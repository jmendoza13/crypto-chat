var express = require('express');
var router = express.Router();
var pricesCtrl = require('../controllers/prices')

router.get('/', pricesCtrl.index);

app.get("/prices",)

module.exports = router;