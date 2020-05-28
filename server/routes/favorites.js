const express = require('express');
const favoritesCtrl = require('../controllers/favorites');
const modifyFavoritesCtrl = require('../controllers/modify_favorites');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/article', auth, favoritesCtrl.addArticle);
router.post('/tag', auth, favoritesCtrl.addTag);
router.get('/articles', auth, favoritesCtrl.getArticles);
router.get('/tags', auth, favoritesCtrl.getTags);
router.delete('/article/:id', auth, modifyFavoritesCtrl.deleteArticle);
router.delete('/tag/:id', auth, modifyFavoritesCtrl.deleteTag);

module.exports = router;
