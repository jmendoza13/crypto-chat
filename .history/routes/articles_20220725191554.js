var express = require('express');
var router = express.Router();
var articlesCtrl = require('../controllers/articles')

router.get('/', articlesCtrl.index);
router.get('/:id', articlesCtrl.show)

module.exports = router;