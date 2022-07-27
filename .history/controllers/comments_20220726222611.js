const Article = require('../models/article');

module.exports = {
    create,
    new: newComment
}

function newComment(req, res) {
    let articleId = req.params.id;
    res.render('articles/new', { articleID});
}

module.exports = mongoose.model('Comment', commentSchema)