const Post = require('../models/price');
const fetch = require('node-fetch');
const rootURL = 'https://api.coinranking.com/v2/coins?limit=10'

module.exports = {
    index,
}

const request = require('request');

const options = {
  method: 'GET',
  url: 'https://api.coinranking.com/v2/coins',
  headers: {
    'x-access-token': 'coinrankingeb59dcc204ab245e9a856d5d67826fb4029523b0bf007038'
  }
};

request(options, (error, response) => {
  if (error) throw new Error(error);
  console.log(response.body);
});


async function index(req, res) {
    // const response = await fetch(`${rootURL}` , { method: "GET" });
    let data = await request(options);
    let json = await data.json();
    console.log(json)
    const values = await response.json();
    const cryptos = values.data;
    res.render('articles/prices', {cryptos})
}


