const express = require("express")
const router = express.Router()
const ArticleController = require('../controllers/article.controller.js')

router.post('/article',ArticleController.createArticle)
router.get('/articles', ArticleController.getArticle)
router.get('/article/:id', ArticleController.getByOneArticle)
router.put('/article/:id', ArticleController.editeArticle)
router.delete('/article/:id', ArticleController.deleteArticle)

module.exports=router