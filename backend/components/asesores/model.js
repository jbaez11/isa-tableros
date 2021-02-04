const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const asesoresSchema = new Schema({
    keyfile : String,
    agent :{
        name : String,
        identification: String,
        gender:String,
    },
    keyword:{
        // aqui indicas que el tipo de dato es Array
        type: Array,
        // aqui lo inicializas por defecto como un array vacío
        default: []
    }

    
});

const model = mongoose.model('Keywords', asesoresSchema);

module.exports = model;