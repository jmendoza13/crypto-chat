const Post = require('../models/post');

module.exports = {
    index
}

function index(req, res) {
    Flight.find({}, function(err, posts) {
      res.render('posts/index', { title: 'All posts', posts });
    });
  }