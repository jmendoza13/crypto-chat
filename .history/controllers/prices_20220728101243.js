const Post = require('../models/price');
const fetch = require('node-fetch');
const rootURL = 'https://api.coinlore.net/api/tickers/?start=1&limit=100'

module.exports = {
    index,
}

const request = require('request');



async function index(req, res) {
    // const response = await fetch(`${rootURL}` , { method: "GET" });
    let data = await request(options, (error, response) => response);
    let cryptos = await data.json();
    res.render('articles/prices', {cryptos})
}


