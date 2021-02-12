const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const basePhrasesSchema = new Schema({
    phrase :{
        type: String,
        unique:true
    },
    module: String,
    category: String,
});

const model = mongoose.model('Basephrases', basePhrasesSchema);

module.exports = model;