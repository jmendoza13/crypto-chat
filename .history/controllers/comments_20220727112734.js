const Article = require('../models/article');

module.exports = {
    create,
    delete,
}


function create(req, res) {
    req.body.userId= req.user._id;
    req.body.name= req.user.name;
    console.log(req.body, req.user)
    Article.findById(req.params.id, function(err, article) {
        article.comments.push(req.body);
        article.save(function(err) {
            res.redirect(`/articles/${article._id}`);
        });
    });
}

function delete(req, res) {
    res.redirect('/articles');
}


