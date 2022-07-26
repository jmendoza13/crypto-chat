const Post = require('../models/post');

module.exports = {
    index,
    show
}

function index(req, res) {
    //Post.find({}, function(err, articles) {
      res.render('articles');
    };

function show(req, res) {
  res.render('/post/articles', { ti} )
}