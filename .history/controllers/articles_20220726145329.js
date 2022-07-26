const Article = require('../models/article');

module.exports = {
    index,
    show,
    new: newArticle,
    create
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

function create(req, res) {
  console.log("create", req.body)
  const newArticle = new Article(req.body)
  newArticle.save(function(err) {
    if (err) return res.redirect('/articles/new');
    console.log(newArticle);
    res.redirect('articles')
  });
}
// `${newArticle._id}`

function newArticle(req, res) {
  res.render("articles/new");
}
