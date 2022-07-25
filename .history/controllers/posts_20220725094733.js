const Post = require('../models/post');

module.exports = {
    index
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('posts/index', { title: 'All posts', posts });
    });
  }