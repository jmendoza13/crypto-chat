var express = require('express');
var router = express.Router();
var articlesCtrl = require('../controllers/articles')

router.get('/', articlesCtrl.index);
// router.get('/new', articlesCtrl.new);
router.get('/:id', articlesCtrl.show);

module.exports = router;