const Article = require('../models/article');

module.exports = {
    create,
    delete: deleteComment,
}


function create(req, res) {
    req.body.userId= req.user._id;
    req.body.name= req.user.name;
    console.log(req.body, req.user)
    Article.findById(req.params.id, function(err, article) {
        article.comments.push(req.body);
        article.save(function(err) {
            res.redirect(`/articles/${article._id}`)
        });;
    });
}

// async function deleteComment(req, res) {
//     try {
//         const article = await Article.findOne({'comments._id': req.params.id, 'comments.user': req.user._id});
//         if (!article) throw new Error ('Will not work');
//         article.comments.remove(req.params.id);
//         await article.save();
//         res.redirect(`/articles/${article._id}`);
//     } catch (err) {
//         return next(err);
//     }
// }

async function deleteComment(req, res) {
    await Article.findOne({'comments._id': req.params.id})
    console.log("deleteComment")
    // await Article.deleteOne({_id : req.params.id})
    // await Article.save()
    res.redirect(`/articles/${req.params.id}`)
}
