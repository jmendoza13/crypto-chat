const Post = require('../models/price');

module.exports = {
    index
}

function index(req, res) {
    //Post.find({}, function(err, posts) {
      res.render('prices');
      const request = require('request');

const options = {
  method: 'GET',
  url: 'https://api.coinranking.com/v2/coins',
  headers: {
    'x-access-token': 'your-api-key'
  }
};

request(options, (error, response) => {
  if (error) throw new Error(error);
  console.log(response.body);
});
    };

    