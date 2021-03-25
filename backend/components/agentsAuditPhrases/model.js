const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const asesoresPhrasesSchema = new Schema({
    eventDate:Date,
    detailOfAgent :{
        type:Object,
        default:{}
    },
    callDetailByAgent:{
        // aqui indicas que el tipo de dato es Array
        type: Object,
        // aqui lo inicializas por defecto como un array vacío
        default: {}
    },
    createdAt:Date

    
});

const model = mongoose.model('Auditphrases', asesoresPhrasesSchema);

module.exports = model;