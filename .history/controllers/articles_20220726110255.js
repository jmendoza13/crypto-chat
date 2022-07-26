const article = require('../models/article');
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
  const newArticle = new Article(req.body);
    article.save(function(err) {
      if (err) return res.redirect('/articles/new');
      console.log(flight);
      res.render('articles/new', { article })
  });
}
