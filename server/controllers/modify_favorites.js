const Article = require('../models/article');
const Tag = require('../models/tag');

exports.deleteArticle = (req, res, next) => {
    Article.deleteOne({id: req.params.id}).then(
        () => {
            res.status(200).json({ message: 'Article Deleted !'});
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.deleteTag = (req, res, next) => {
    Tag.deleteOne({id: req.params.id}).then(
        () => {
            res.status(200).json({ message: 'Tag Deleted !'});
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}
