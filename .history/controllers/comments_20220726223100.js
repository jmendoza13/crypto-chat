const Article = require('../models/article');

module.exports = {
    create,
    new: newComment
}

function newComment(req, res) {
    let articleId = req.params.id;
    res.render('articles/new', { articleID});
}

function create(req, res) {
    req.body.article = req.params.id;
    comment.create(req.body, function(err, ticket){
        res.redirect('/articles/${req.params.id}');
    });
}

