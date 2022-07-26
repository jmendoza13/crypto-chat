const Post = require('../models/prices');

module.exports = {
    index
}

function index(req, res) {
    //Post.find({}, function(err, posts) {
      res.render('price');
    };