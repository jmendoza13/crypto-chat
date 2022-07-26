const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const articlesSchema = new Schema({
    title: {
        type: String,
    },
    createdAt: {
        type: Date,
    },
    description: {
        type: String,
    },
}) 

module.exports = mongoose.model('article', articlesSchema);