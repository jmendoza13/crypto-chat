const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        timestamps: true
    },
    name: String,

    createdDate: {
        type: Date,
        default: function () {
            let date = new Date();
            return date;
        }
    },
    description: {
        type: String,
    },
})


const articleSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        timestamps: true
    },
    title: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: function () {
            let date = new Date();
            return date;
        }
    },
    description: {
        type: String,
    },
    comments: [commentSchema],
})


module.exports = mongoose.model('Article', articleSchema);