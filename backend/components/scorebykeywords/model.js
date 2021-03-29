const mongoose = require('mongoose');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn } = require('../../db');
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

//const model = mongoose.model('Auditscoringkeywords', scoreSchema);
const scoreSerFinanzaModel = SerFinanzaConn.model('Auditscoringkeywords', scoreSchema);
const scoreBancoColombiaModel = BancolombiaConn.model('Auditscoringkeywords', scoreSchema);
const scoreEnelChileModel = EnelChileConn.model('Auditscoringkeywords', scoreSchema);
const scoreIgsBanorteMXModel = IgsBanorteMXConn.model('Auditscoringkeywords', scoreSchema);
const scoreIgsBanistmoPAModel = IgsBanistmoPAConn.model('Auditscoringkeywords', scoreSchema);
const scoreBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Auditscoringkeywords', scoreSchema);
const scoreBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Auditscoringkeywords', scoreSchema);

module.exports = {
    scoreSerFinanzaModel,
    scoreBancoColombiaModel,
    scoreEnelChileModel,
    scoreIgsBanorteMXModel,
    scoreIgsBanistmoPAModel,
    scoreBpogsBoldEnglishUSModel,
    scoreBpogsHitesDespachoRetrioCOModel
}; 