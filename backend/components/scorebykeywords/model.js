const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    eventDate:Date,
    agentsSummary :{
        type:Object,
        default:{}
    },
    recordingsSummary:{
        // aqui indicas que el tipo de dato es Array
        type: Object,
        // aqui lo inicializas por defecto como un array vacío
        default: {}
    },
    createdAt:Date

    
});

const model = mongoose.model('Auditscoringkeywords', scoreSchema);

module.exports = model;