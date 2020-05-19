const express = require('express');
const auth = require('../middleware/auth');
const request = require('request');

const router = express.Router();
const aipKey = 'bd1876640c824a3ca28a2d6d16b93cd7'

router.post('/magazine', auth, (req, res) => {
    const options = {
        url: 'https://newsapi.org/v2/sources?apiKey=bd1876640c824a3ca28a2d6d16b93cd7' ,
        method: 'GET'
    }

    request(options, function(err, resB, body) {
        let json = JSON.parse(body);
        res.send(json.sources)
    })

})

router.post('/news-q', (req, res) => {
    const json_request_body = JSON.parse(JSON.stringify(req.body));
    const word = json_request_body.word
    var arr = []
    var len = 0
    var from = ""
    var to = ""

    console.log(req.body)
    if (json_request_body.from != " "&& json_request_body.to != "") {
        console.log("lol")
        from = "&from=" + json_request_body.from
        to = "&to=" + json_request_body.to
    }

    const options = {
        url: 'https://newsapi.org/v2/everything?q=' + word + '&sortBy=popularity' + from + to + '&apiKey=bd1876640c824a3ca28a2d6d16b93cd7' ,
        method: 'GET'
    }

    request(options, function(err, resB, body) {
        let json = JSON.parse(body);

        len = json.articles.length
        for (var i = 0; i < len; i++) {
            arr.push({
                id: i + 1,
                Tags: word,
                Title: json.articles[i].title,
                Link: json.articles[i].url,
                Image: json.articles[i].urlToImage,
                Desc: json.articles[i].description,
                Source: json.articles[i].source.name,
                Author: json.articles[i].author,
                Date: json.articles[i].publishedAt,
                Content: json.articles[i].content
            });
        }
        res.send(arr)
    });
});

router.post('/news-ct', (req, res) => {
    const json_request_body = JSON.parse(JSON.stringify(req.body));
    var arr = []
    var len = 0
    var country = json_request_body.country
    const options = {
        url: 'http://newsapi.org/v2/top-headlines?country=' + country + '&apiKey=bd1876640c824a3ca28a2d6d16b93cd7' ,
        method: 'GET'
    }

    request(options, function(err, resB, body) {
        let json = JSON.parse(body);

        len = json.articles.length
        for (var i = 0; i < len; i++) {
            arr.push({
                id: i + 1,
                Tags: [json_request_body.country],
                Title: json.articles[i].title,
                Link: json.articles[i].url,
                Image: json.articles[i].urlToImage,
                Desc: json.articles[i].description,
                Source: json.articles[i].source.name,
                Author: json.articles[i].author,
                Date: json.articles[i].publishedAt,
                Content: json.articles[i].content
            });
        }
        res.send(arr)
    });
});

module.exports = router;
