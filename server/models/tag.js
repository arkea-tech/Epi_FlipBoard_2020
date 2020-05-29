const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
    id: { type: Number, required: true },
    Tag: { type: Array, required: true }
});

module.exports = mongoose.model('Tag', tagSchema);
