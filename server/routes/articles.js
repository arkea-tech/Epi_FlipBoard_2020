const express = require('express');
const articlesCtrl = require('../controllers/articles');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/:section', articlesCtrl.getArticles);
// router.post('/', auth, nytCtrl.createThing);
// router.get('/:id', auth, nytCtrl.getOneThing);
// router.put('/:id', auth, nytCtrl.modifyThing);
// router.delete('/:id', auth, nytCtrl.deleteThing);

module.exports = router;
