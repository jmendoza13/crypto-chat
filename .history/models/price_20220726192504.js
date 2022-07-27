const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const request = require('request');

const options = {
  method: 'GET',
  url: 'https://api.coinranking.com/v2/coins?limit=1',
  headers: {
    'x-access-token': 'coinrankingeb59dcc204ab245e9a856d5d67826fb4029523b0bf007038'
  }
};

request(options, (error, response) => {
  if (error) throw new Error(error);
  console.log(response.body);
});