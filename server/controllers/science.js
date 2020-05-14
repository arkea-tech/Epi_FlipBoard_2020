var axios = require('axios');

exports.getArticles = (req, res, next) => {
    // axios.all([
    //     axios.get()
    // ])
    // Thing.find().then(
    //     (things) => {
    //         res.status(200).json(things);
    //     }
    // ).catch(
    //     (error) => {
    //         res.status(400).json({
    //             error: error
    //         });
    //     }
    // );

    res.status(200).json({"good":"good"});
}
