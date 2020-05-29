const axios = require('axios');

const Article = require('../models/article');
const Tag = require('../models/tag');

exports.addArticle = (req, res, next) => {
    const article = new Article({
        id: req.body.id,
        Tags: req.body.Tag,
        Title: req.body.Title,
        Link: req.body.Link,
        Image: req.body.Image,
        Desc: req.body.Desc,
        Source: req.body.Source,
        Author: req.body.Author,
        Date: req.body.Date
    });

    article.save().then(
        () => {
            res.status(201).json({
                message: 'Article saved successfully !'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.addTag = (req, res, next) => {
    const tag = new Tag({
        id: req.body.id,
        Tag: req.body.Tag
    });

    tag.save().then(
        () => {
            res.status(201).json({
                message: 'Tag saved successfully !'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.getArticles = (req, res, next) => {
    Article.find().then(
        (articles) => {
            res.status(200).json(articles);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

function fetchArticlesByTag(tags, articles, res)
{
    let promises = [];

    for (const tag of tags) {
        promises.push(
            axios.get(`http://localhost:3000/api/articles/${tag.Tag}`, {
                headers: {
                    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZWM0ZGRkZTM2OTYxNDllOWUyNDFhOGIiLCJpYXQiOjE1OTA2NzgwMzIsImV4cCI6MTU5MDc2NDQzMn0.EwoPbBjFkFl1YV8HGEQnQqnKOpvYQjL46iByQ3pizXc'
                }
            }).then(response => {
                for (const article of response.data) {
                    articles.push(article);
                }
            }).catch(
                error => {
                    res.status(400).json({
                        error: error
                    });
                }
            )
        );
    }
    Promise.all(promises).then(() =>
        res.status(200).json({
            Tags: tags,
            Articles: articles
        })
    );
}

exports.getTags = (req, res, next) => {
    let articles = [];
    let promises = [];

    Tag.find().then(
        (tags) => {
            fetchArticlesByTag(tags, articles, res);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}
