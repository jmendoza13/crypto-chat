var express = require('express');
var router = express.Router();
var articlesCtrl = require('../controllers/articles')
var isLoggedIn = require('../config/auth');

router.get('/', articlesCtrl.index);
router.get('/new',isLoggedIn, articlesCtrl.new);
router.get('/:id', articlesCtrl.show);
router.get('/edit/:id',isLoggedIn, articlesCtrl.index);
router.post('/',isLoggedIn, articlesCtrl.create);
router.delete('/:id',isLoggedIn, articlesCtrl.delete);


module.exports = router;
