const Article = require('../models/article');

module.exports = {
    index,
    show
}

function index(req, res) {
    //Post.find({}, function(err, articles) {
      res.render('articles');
    };

function show(req, res) {
  Article.findById(req.params.id)
  res.render('/post/articles', { article } )
};