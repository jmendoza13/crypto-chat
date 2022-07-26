const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const articleSchema = new Schema({
    title: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: function() {
            let date = new Date();
            return date.now;
        }
    },
    description: {
        type: String,
    },
}, {
    timestamps: true
  }) 

module.exports = mongoose.model('Article', articleSchema);