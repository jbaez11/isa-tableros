const mongoose = require('mongoose');
//var connection = mongoose.createConnection()

const Schema = mongoose.Schema;

const conversationsSchema = new Schema({
    keyfile : String,
    eventDatetime: Date,
    eventDate:Date,
    agent :{
        name : String,
        identification: String,
        gender:String,
        
    },
    conversation:{
        // aqui indicas que el tipo de dato es Array
        type: Object,
        // aqui lo inicializas por defecto como un array vacío
        default: {}
    },
    createdAt:Date

    
});

const model = mongoose.model('Conversations', conversationsSchema);


module.exports = model;