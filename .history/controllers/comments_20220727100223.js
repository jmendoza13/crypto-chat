const Article = require('../models/article');

module.exports = {
    create,
}


function create(req, res) {
    Article.findById(req.params.id, function(err, article) {
        console.log(article))
        // article.comments.push(req.body);
        article.save(function(err) {
            res.redirect(`/articles`);
        });
    });
}


