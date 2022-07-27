var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/articles/:id/', commentsCtrl.create)

module.exports = router;