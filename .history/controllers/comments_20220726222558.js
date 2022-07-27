const Article = require('../models/article');

module.exports = {
    create,
    new: newComment
}



module.exports = mongoose.model('Comment', commentSchema)