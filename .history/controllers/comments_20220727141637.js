const Article = require('../models/article');

module.exports = {
    create,
    delete: deleteComment,
}


function create(req, res) {
    req.body.userId= req.user._id;
    req.body.name= req.user.name;
    console.log(req.body, req.user)
    Article.findById(req.params.id, function(err, article) {
        article.comments.push(req.body);
        article.save(function(err) {
            res.redirect(`/articles/${article._id}`)
        });;
    });
}

function deleteComment(req, res) {
    
    articles.comments.remove(req.params.id);
    res.redirect('/articles')
}
