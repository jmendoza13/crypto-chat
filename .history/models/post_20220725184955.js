const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const postSchema = new Schema({
    title: {
        type: String,
        
    }
}) 

module.exports = mongoose.model('Post', postSchema);