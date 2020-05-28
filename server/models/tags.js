const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    Tag: { type: String, required: true }
});

module.exports = mongoose.model('Tags', serviceSchema);
