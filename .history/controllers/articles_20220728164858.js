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
      const article = await Article.findOne({ 'articles._id': req.params.id, 'articles.userId': req.user._id }  );
      console.log(article.userId)
      if (!article) throw new Error ('Will not work');
      article.remove(req.params.id);
      await article.save();
      res.redirect('/articles');
  } catch (err) {
      return next(err);
  }
}

function edit(req, res, next) {
  Article.findById(req.params.id, function(err, article){
    res.render('articles/edit', { article })
  })
}

function update(req, res) {
  
}