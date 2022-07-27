var express = require('express');
var router = express.Router();
var articlesCtrl = require('../controllers/articles')
var isLoggedIn = require('../config/auth');

router.get('/',isLoggedIn, articlesCtrl.index);
router.get('/new',isLoggedIn, articlesCtrl.new);
router.get('/:id',isLoggedIn, articlesCtrl.show);
router.post('/',isLoggedIn, articlesCtrl.create);

module.exports = router;
