var axios = require('axios');
let parseArticles = require('../parsing/parse_articles');

exports.getArticles = (req, res, next) => {
    let articles = [];
    let id = 0;

    console.log(req.params.tag);
    axios.all([
        axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Science")&sort=newest&api-key=SwuUJu3Hgbrr1qZDHCZzR4trZod9998z'),
        axios.get('https://content.guardianapis.com/search?api-key=0dbaf7e0-8c75-4864-82ed-34fc14798075&show-fields=thumbnail,headline,trailText,publication,byline,lastModified&section=science')
    ]).then(
        axios.spread((new_york_times, the_guardian) => {
            id = parseArticles.parseNytDatas(articles, new_york_times, id, "Science");
            parseArticles.parseGuardianDatas(articles, the_guardian, id, "Science");
            res.status(200).json(articles);
        })
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}
