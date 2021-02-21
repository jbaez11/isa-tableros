const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const agentsSchema = new Schema({
    name : {
        type: String,
        required:true,
        uppercase: true,
    },
    
    identification:{
        type: String,
        unique:true,
        required:true,
    },
    gender: {
        type: String,
        required:true,
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
});

const model = mongoose.model('Agents', agentsSchema);

module.exports = model;