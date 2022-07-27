var express = require('express');
var router = express.Router();
const articlesCtrl = require('../controllers/comments');

router.get('/flights/:id/comments/new', commentsCtrl.new)
router.post('/flights/:id/comments', commentsCtrl.create);

module.exports = router;