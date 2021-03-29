const mongoose = require('mongoose');
//var connection = mongoose.createConnection()
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn } = require('../../db');
const Schema = mongoose.Schema;

const keywordsSchema = new Schema({
    keyfile : String,
    eventDatetime: Date,
    eventDate:Date,
    agent :{keywordsme : String,
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
    createdAt:Date

    
});

//const model = mongoose.model('Keywords', asesoresSchema);
const keywordsSerFinanzaModel = SerFinanzaConn.model('Keywords', keywordsSchema);
const keywordsBancoColombiaModel = BancolombiaConn.model('Keywords', keywordsSchema);
const keywordsEnelChileModel = EnelChileConn.model('Keywords', keywordsSchema);
const keywordsIgsBanorteMXModel = IgsBanorteMXConn.model('Keywords', keywordsSchema);
const keywordsIgsBanistmoPAModel = IgsBanistmoPAConn.model('Keywords', keywordsSchema);
const keywordsBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Keywords', keywordsSchema);
const keywordsBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Keywords', keywordsSchema);

module.exports = {
    keywordsSerFinanzaModel,
    keywordsBancoColombiaModel,
    keywordsEnelChileModel,
    keywordsIgsBanorteMXModel,
    keywordsIgsBanistmoPAModel,
    keywordsBpogsBoldEnglishUSModel,
    keywordsBpogsHitesDespachoRetrioCOModel
};