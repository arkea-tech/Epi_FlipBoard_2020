const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
    Id: { type: Number, required: true },
    Tag: { type: String, required: true }
});

module.exports = mongoose.model('Tag', tagSchema);
