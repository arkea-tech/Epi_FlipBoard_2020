const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    Id: { type: Number, required: true },
    Tag: { type: String, required: true },
    Title: { type: String, required: true },
    Link: { type: String, required: true },
    Image: { type: String, required: true},
    Desc: { type: String, required: true },
    Source: { type: String, required: true },
    Author: { type: String, required: true },
    Date: { type: String, required: true }
});

module.exports = mongoose.model('Article', serviceSchema);
