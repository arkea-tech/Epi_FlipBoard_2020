const express = require('express');
const articlesCtrl = require('../controllers/articles');
const articlesPopularCtrl = require('../controllers/popular_articles');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/:section', auth, articlesCtrl.getArticles);
router.get('/popular', auth, articlesPopularCtrl.getArticles);

module.exports = router;
