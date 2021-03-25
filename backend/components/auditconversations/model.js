const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const asesoresSchema = new Schema({
    eventDate:Date,
    detailOfAgent :{
        type:Object,
        default:{}
    },
    callDetailByAgent
    :{
        // aqui indicas que el tipo de dato es Array
        type: Object,
        // aqui lo inicializas por defecto como un array vacío
        default: {}
    },
    createdAt:Date

    
});

const model = mongoose.model('Auditkeywords', asesoresSchema);

module.exports = model;