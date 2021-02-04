const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const baseKeywordsSchema = new Schema({
    keyword : String,
    module: String,
    category: String,
});

const model = mongoose.model('Basekeywords', baseKeywordsSchema);

module.exports = model;