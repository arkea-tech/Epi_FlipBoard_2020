const express = require('express');
const favoritesCtrl = require('../controllers/favorites');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/article', auth, favoritesCtrl.addArticle);
router.get('/tag/:id', auth, articlesCtrl.addTag);

module.exports = router;
