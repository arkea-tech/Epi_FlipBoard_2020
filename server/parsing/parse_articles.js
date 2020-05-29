function parseNytDatas(articles, new_york_times, id, tag)
{
    const docs = new_york_times.data.response.docs;
    var docDate;

    for (const doc of docs) {
        docDate = new Date(doc.pub_date);
        articles.push({
            Id: id,
            Tags: [tag, "US"],
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

function parseGuardianDatas(articles, the_guardian, id, tag)
{
    const docs = the_guardian.data.response.results;
    var docDate;

    for (const doc of docs) {
        docDate = new Date(doc.fields.lastModified);
        articles.push({
            Id: id,
            Tags: tag === "popular" ? [doc.sectionName, "US"] : [tag, "US"],
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

function parseNytPopularDatas(articles, new_york_times, id)
{
    const docs = new_york_times.data.results;
    var docDate;
    var media;

    for (const doc of docs) {
        docDate = new Date(doc.published_date);
        articles.push({
            Id: id,
            Tags: [doc.section, "US"],
            Desc: doc.abstract,
            Title: doc.title,
            Source: "New York Times",
            Link: doc.url,
            Author: doc.byline == "" ? "John Prime" : doc.byline,
            Date: `${docDate.getDate()}/${docDate.getMonth() + 1}/${docDate.getFullYear()}`,
            Image: doc.multimedia[2].url
        });
        id++;
    }
    return id;
}

function jsUcFirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
    parseGuardianDatas: parseGuardianDatas,
    parseNytDatas: parseNytDatas,
    jsUcFirst: jsUcFirst,
    parseNytPopularDatas: parseNytPopularDatas
}
