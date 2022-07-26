var express = require('express');
var router = express.Router();
var articlesCtrl = require('../controllers/articles')

router.get('/', articlesCtrl.index);
router.get('/articles', articlesCtrl.show)

module.exports = router;