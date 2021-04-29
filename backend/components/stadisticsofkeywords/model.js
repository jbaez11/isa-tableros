const mongoose = require('mongoose');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn } = require('../../db');

const Schema = mongoose.Schema;

const stadisticOfKeywordsSchema = new Schema({
    eventDate:Date,
    required :{
        type:Object,
        default:{}
    },
    notAllowed
    :{
        // aqui indicas que el tipo de dato es Array
        type: Object,
        // aqui lo inicializas por defecto como un array vacío
        default: {}
    },
    recommendation :{
        type:Object,
        default:{}
    },
    createdAt:Date

    
});


const stadisticOfKeywordsSerFinanzaModel = SerFinanzaConn.model('StadisticsOfKeywords', stadisticOfKeywordsSchema);
const stadisticOfKeywordsBancoColombiaModel = BancolombiaConn.model('StadisticsOfKeywords', stadisticOfKeywordsSchema);
const stadisticOfKeywordsEnelChileModel = EnelChileConn.model('StadisticsOfKeywords', stadisticOfKeywordsSchema);
const stadisticOfKeywordsIgsBanorteMXModel = IgsBanorteMXConn.model('StadisticsOfKeywords', stadisticOfKeywordsSchema);
const stadisticOfKeywordsIgsBanistmoPAModel = IgsBanistmoPAConn.model('StadisticsOfKeywords', stadisticOfKeywordsSchema);
const stadisticOfKeywordsBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('StadisticsOfKeywords', stadisticOfKeywordsSchema);
const stadisticOfKeywordsBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('StadisticOfKeywords', stadisticOfKeywordsSchema);

module.exports = {
    stadisticOfKeywordsSerFinanzaModel,
    stadisticOfKeywordsBancoColombiaModel,
    stadisticOfKeywordsEnelChileModel,
    stadisticOfKeywordsIgsBanorteMXModel,
    stadisticOfKeywordsIgsBanistmoPAModel,
    stadisticOfKeywordsBpogsBoldEnglishUSModel,
    stadisticOfKeywordsBpogsHitesDespachoRetrioCOModel
};