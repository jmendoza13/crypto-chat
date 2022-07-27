const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    title: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: function () {
            let date = new Date();
            return date.now;
        }
    },
    description: {
        type: String,
    },
    
})


const articleSchema = new Schema({
    title: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: function () {
            let date = new Date();
            return date.now;
        }
    },
    description: {
        type: String,
    },
}, {
    comments: [commentSchema],
})


module.exports = mongoose.model('Article', articleSchema);