const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const request = require('request');

const options = {
  method: 'GET',
  url: 'https://api.coinranking.com/v2/coins',
  headers: {
    'x-access-token': ''
  }
};

request(options, (error, response) => {
  if (error) throw new Error(error);
  console.log(response.body);
});