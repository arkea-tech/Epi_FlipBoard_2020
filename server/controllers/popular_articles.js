var axios = require('axios');
let parseArticles = require('../parsing/parse_articles');

exports.getArticles = (req, res, next) => {
    let articles = [];
    let id = 0;

    axios.all([
        axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=SwuUJu3Hgbrr1qZDHCZzR4trZod9998z`),
        axios.get(`https://content.guardianapis.com/search?api-key=0dbaf7e0-8c75-4864-82ed-34fc14798075&show-fields=thumbnail,headline,trailText,publication,byline,lastModified&order-by=relevance`)
    ]).then(
        axios.spread((new_york_times, the_guardian) => {
            id = parseArticles.parseNytPopularDatas(articles, new_york_times, id);
            parseArticles.parseGuardianDatas(articles, the_guardian, id, "popular");
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
