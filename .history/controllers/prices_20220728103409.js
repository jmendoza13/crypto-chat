const Post = require('../models/price');
const fetch = require('node-fetch');
const rootURL = 'https://api.coinlore.net/api/tickers/?&limit=50'

module.exports = {
    index,
}

const request = require('request');



async function index(req, res) {
    const response = await fetch(`${rootURL}manga` , {method: 'GET'});
    const jsonApi = await response.json();
    const cryptos = jsonApi.data;
    res.render('articles/prices', {cryptos})
}

