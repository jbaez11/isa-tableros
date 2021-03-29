const mongoose = require('mongoose');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn } = require('../../db');
const Schema = mongoose.Schema;

const scoringkeywordsSchema = new Schema({
    keyfile : String,
    eventDatetime: Date,
    eventDate:Date,
    agent :{
        name : String,
        identification: String,
        gender:String,
    },
    contents:{
        // aqui indicas que el tipo de dato es Array
        type: Object,
        // aqui lo inicializas por defecto como un array vacío
        default: {}
    },
    createdAt:Date

    
});

//const model = mongoose.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsSerFinanzaModel = SerFinanzaConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsBancoColombiaModel = BancolombiaConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsEnelChileModel = EnelChileConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsIgsBanorteMXModel = IgsBanorteMXConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsIgsBanistmoPAModel = IgsBanistmoPAConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Scoringkeywords', scoringkeywordsSchema);

module.exports = {
    scoringkeywordsSerFinanzaModel,
    scoringkeywordsBancoColombiaModel,
    scoringkeywordsEnelChileModel,
    scoringkeywordsIgsBanorteMXModel,
    scoringkeywordsIgsBanistmoPAModel,
    scoringkeywordsBpogsBoldEnglishUSModel,
    scoringkeywordsBpogsHitesDespachoRetrioCOModel
}; 