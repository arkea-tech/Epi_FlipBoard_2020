const express = require('express');
const favoritesCtrl = require('../controllers/favorites');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/article', auth, favoritesCtrl.addArticles);
//router.get('/:section', auth, articlesCtrl.getArticles);

module.exports = router;
