var express = require('express');
var router = express.Router();

router.post('/articles/:id/comments', commentsCtrl.create)

module.exports = router;