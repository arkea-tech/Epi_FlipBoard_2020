const express = require('express');
const scienceCtrl = require('../controllers/science');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', scienceCtrl.getArticles);
// router.post('/', auth, nytCtrl.createThing);
// router.get('/:id', auth, nytCtrl.getOneThing);
// router.put('/:id', auth, nytCtrl.modifyThing);
// router.delete('/:id', auth, nytCtrl.deleteThing);

module.exports = router;
