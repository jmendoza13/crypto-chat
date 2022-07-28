const Post = require('../models/price');
const fetch = require('node-fetch');
const rootUrl = 'https://api.coinranking.com/v2/coins'

module.exports = {
    index,
    coins,
}

const options = {
    method: 'GET',
    url: 'https://api.coinranking.com/v2/coins/',
    headers: {
      'x-access-token': 'coinrankingeb59dcc204ab245e9a856d5d67826fb4029523b0bf007038'
    }
  };

async function coins(req, res) {
    const response = await fetch(`${rootURL}coin` , {method: 'GET'});
    const give = await response.json();
    console.log(five)
}

async function index(req, res) {
    const response = await fetch(``)
      res.render('articles/prices');
    };
