const Article = require('../models/article');

module.exports = {
    index,
    show,
    //new: newArticle
}

function index(req, res) {
    //Post.find({}, function(err, articles) {
      res.render('articles');
    };

function show(req, res) {
  Article.findById(req.params.id, function(err, article) {
    res.render('articles/show', { article, title: article.title })
  })
};

//function newArticle(req, res) {
  //res.render('articles/new')
//}