const express = require('express');
const articlesCtrl = require('../controllers/articles');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/:section', articlesCtrl.getArticles);

module.exports = router;
