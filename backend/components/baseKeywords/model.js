const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const baseKeywordsSchema = new Schema({
    keyword :{
        type: String,
        unique:true,
        lowercase: true
    },
    module: {
        type: String,
        lowercase: true
    },
    category: {
        type: String,
        lowercase: true
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
});

const model = mongoose.model('Basekeywords', baseKeywordsSchema);

module.exports = model;