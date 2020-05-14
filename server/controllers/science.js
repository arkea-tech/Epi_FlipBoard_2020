var axios = require('axios');

function parseNytDatas(articles, new_york_times)
{
    const docs = new_york_times.data.response.docs;
    var articleDate;

    for (const doc of docs) {
        docDate = new Date(doc.pub_date);
        articles.push({
            Tags: doc.new_desk,
            Desc: doc.abstract,
            Title: doc.headline.main,
            Source: doc.source,
            Link: doc.web_url,
            Author: doc.byline.original,
            Date: `${docDate.getDate()}/${docDate.getMonth() + 1}/${docDate.getFullYear()}`,
            Image: 'https://static01.nyt.com/' + doc.multimedia[0].url
        });
    }
}

exports.getArticles = (req, res, next) => {
    let articles = [];

    axios.all([
        axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Science")&sort=newest&api-key=SwuUJu3Hgbrr1qZDHCZzR4trZod9998z')
    ]).then(
        axios.spread((new_york_times) => {
            parseNytDatas(articles, new_york_times);
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
