const express = require('express');
const favoritesCtrl = require('../controllers/favorites');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, favoritesCtrl.addFavoriteArticles);
//router.get('/:section', auth, articlesCtrl.getArticles);

module.exports = router;
