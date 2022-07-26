const Article = require('../models/article');

module.exports = {
    index,
    show,
    new: newArticle
}

function index(req, res) {
    Article.find({}, function(err, articles) {
      res.render('./articles/index', { articles });
    });
  }

function show(req, res) {
  Article.findById(req.params.id, function(err, article) {
    console.log(article)
    res.render('articles/show', { article  })
  })
};

function newArticle(req, res) {
  const newArticle = new Article(req.body, function);

res.render('articles/new', { article })
}
