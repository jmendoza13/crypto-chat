const Article = require('../models/article');

module.exports = {
    index,
    show,
    new: newArticle,
    create,
    delete: deleteArticle,
    update,
    edit,
}

function index(req, res) {
    Article.find({}, function(err, articles) {
      res.render('./articles/index', { articles });
    });
  }

function show(req, res) {
  Article.findById(req.params.id, function(err, article) {
    console.log(article.createdAt)
    res.render('articles/show', { article  })
  })
};

function create(req, res) {
  req.body.userId= req.user._id;
  // req.body.name= req.user.name;
  console.log("create", req.body)
  const newArticle = new Article(req.body)
  newArticle.save(function(err) {
    if (err) return res.redirect('/articles/new');
    console.log(newArticle);
    res.redirect('/articles')
  });
}


function newArticle(req, res) {
  res.render("articles/new");
}

async function deleteArticle(req, res, next) {
    try {
        await Article.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
        res.redirect('/articles');
    } catch (err) {
        return next(err);
    }
  }
  }

function edit(req, res, next) {
  Article.findById(req.params.id, function(err, article){
    res.render('articles/edit', { article })
  })
}

function update(req, res) {
  Article.findOneAndUpdate(
    {_id: req.params.id, user: req.user._id},
    req.body,
    {new: true},
    function(err, article) {
      if (err || !article) return res.redirect('/articles');
      res.redirect(`/articles/${article._id}`);
    }
  );
}
    

// function update(req, res) {
//   Post.findOne(
//     {'comments._id': req.params.id},
//     function(err, post) {
//       const commentSubdoc = post.comments.id(req.params.id);
//       if (!commentSubdoc.user.equals(req.user._id)) return res.redirect(`/posts/${post._id}`);
//       commentSubdoc.content = req.body.content;
//       post.save(function(err) {
//         res.redirect(`/posts/${post._id}`);
//       });  
//     }
//   );
// }

