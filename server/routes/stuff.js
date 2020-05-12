const express = require('express');
const stuffCtrl = require('../controllers/stuff');
const auth = require('../middleware/auth');
const request = require('request');

const router = express.Router();
const aipKey = 'bd1876640c824a3ca28a2d6d16b93cd7'

router.get('/', auth, stuffCtrl.getAllStuff);
router.post('/', auth, stuffCtrl.createThing);
router.get('/:id', auth, stuffCtrl.getOneThing);
router.put('/:id', auth, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);



router.post('/news', (req, res) => {
    const json_request_body = JSON.parse(JSON.stringify(req.body));
    const word = json_request_body.word

    const options = {
        url: 'https://newsapi.org/v2/everything?q=' + word + '&sortBy=popularity&country=fr&apiKey=bd1876640c824a3ca28a2d6d16b93cd7' ,
        method: 'GET'
    }

    request(options, function(err, resB, body) {
        let json = JSON.parse(body);
        res.send(json)
    });
});

router.post('/magazine', (req, res) => {
    const json_request_body = JSON.parse(JSON.stringify(req.body));

    const options = {
        url: 'http://newsapi.org/v2/top-headlines?country=fr&apiKey=bd1876640c824a3ca28a2d6d16b93cd7' ,
        method: 'GET'
    }

    request(options, function(err, resB, body) {
        let json = JSON.parse(body);
        res.send(json)
    });
});

module.exports = router;
