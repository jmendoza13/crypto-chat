var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments');
var isLoggedIn = require('../config/auth');

router.post('/:id/comments',isLoggedIn, commentsCtrl.create)

router.delete('/:id',isLoggedIn, commentsCtrl.delete);


module.exports = router;