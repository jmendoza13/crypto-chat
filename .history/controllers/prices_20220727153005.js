const Post = require('../models/price');
const fetch = require('node-fetch');
const rootURL = 'https://api.coinranking.com/v2/coins?limit=10'

module.exports = {
    index,
}

// const options = {
//     method: 'GET',
//     headers: {
//       'x-access-token': 'coinrankingeb59dcc204ab245e9a856d5d67826fb4029523b0bf007038'
//     }
//   };

async function index(req, res) {
    const response = await fetch(`${rootURL}` , { method: "GET" });
    const values = await response.json();
    const cryptos = values.data.coins;
    res.render('cryptos/all', {cryptos})
    console.log(cryptos)
}


