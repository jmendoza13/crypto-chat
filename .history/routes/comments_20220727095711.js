var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/:id/comments', commentsCtrl.create)

module.exports = router;