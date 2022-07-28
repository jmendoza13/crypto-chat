const Post = require('../models/price');

module.exports = {
    index
}

const options = {
    method: 'GET',
    url: 'https://api.coinranking.com/v2/coins/',
    headers: {
      'x-access-token': 'coinrankingeb59dcc204ab245e9a856d5d67826fb4029523b0bf007038'
    }
  };

function index(req, res) {
    //Post.find({}, function(err, posts) {
      res.render('articles/prices');
    };
