var axios = require('axios');

function parseNytDatas(articles, new_york_times, id)
{
    const docs = new_york_times.data.response.docs;
    var articleDate;

    for (const doc of docs) {
        docDate = new Date(doc.pub_date);
        articles.push({
            Id: id,
            Tags: doc.new_desk,
            Desc: doc.abstract,
            Title: doc.headline.main,
            Source: doc.source,
            Link: doc.web_url,
            Author: doc.byline.original,
            Date: `${docDate.getDate()}/${docDate.getMonth() + 1}/${docDate.getFullYear()}`,
            Image: 'https://static01.nyt.com/' + doc.multimedia[0].url
        });
        id++;
    }
    return id;
}

function parseGuardianDatas(articles, the_guardian, id)
{
    const docs = the_guardian.data.response.results;
    var articleDate;

    for (const doc of docs) {
        docDate = new Date(doc.fields.lastModified);
        articles.push({
            Id: id,
            Tags: doc.sectionName,
            Desc: doc.fields.trailText,
            Title: doc.fields.headline,
            Source: doc.fields.publication,
            Link: doc.webUrl,
            Author: doc.fields.byline,
            Date: `${docDate.getDate()}/${docDate.getMonth() + 1}/${docDate.getFullYear()}`,
            Image: doc.fields.thumbnail
        });
        id++;
    }
}

exports.getArticles = (req, res, next) => {
    let articles = [];
    let id = 0;

    axios.all([
        axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Science")&sort=newest&api-key=SwuUJu3Hgbrr1qZDHCZzR4trZod9998z'),
        axios.get('https://content.guardianapis.com/search?api-key=0dbaf7e0-8c75-4864-82ed-34fc14798075&show-fields=thumbnail,headline,trailText,publication,byline,lastModified&section=science')
    ]).then(
        axios.spread((new_york_times, the_guardian) => {
            id = parseNytDatas(articles, new_york_times, id);
            parseGuardianDatas(articles, the_guardian, id);
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
