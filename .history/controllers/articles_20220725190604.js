const Post = require('../models/post');

module.exports = {
    index
}

function index(req, res) {
    //Post.find({}, function(err, articles) {
      res.render('articles');
    };
  