const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const baseKeywordsSchema = new Schema({
    keyword :{
        type: String,
        unique:true
    },
    module: String,
    category: String,
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
});

const model = mongoose.model('Basekeywords', baseKeywordsSchema);

module.exports = model;