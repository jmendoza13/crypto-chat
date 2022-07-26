const Post = require('../models/price');

module.exports = {
    index
}

function index(req, res) {
    //Post.find({}, function(err, posts) {
      res.render('price');
    };