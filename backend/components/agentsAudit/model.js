const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const asesoresSchema = new Schema({
    keyfile : String,
    eventDatetime: Date,
    eventDate:Date,
    agent :{
        name : String,
        identification: String,
        gender:String,
        createdAt:Date,
    },
    keywords:{
        // aqui indicas que el tipo de dato es Array
        type: Object,
        // aqui lo inicializas por defecto como un array vacío
        default: {}
    },
    createAt:Date

    
});

const model = mongoose.model('Keywords', asesoresSchema);

module.exports = model;