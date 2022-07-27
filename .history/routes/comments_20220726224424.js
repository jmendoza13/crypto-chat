var express = require('express');
var router = express.Routher();

router.post('/articles/:id/comments', commentsCtrl.create)

module.exports = router;