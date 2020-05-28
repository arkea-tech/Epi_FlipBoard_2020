const Article = require('../models/article');
const Tag = require('../models/tag')

exports.addArticle = (req, res, next) => {
    const article = new Article({
        Id: req.body.Id,
        Tag: req.body.Tag,
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
        Tag: req.body.tag
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
