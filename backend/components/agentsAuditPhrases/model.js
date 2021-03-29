const mongoose = require('mongoose');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn } = require('../../db');
const Schema = mongoose.Schema;

const auditPhrasesSchema = new Schema({
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

const auditPhrasesSerFinanzaModel = SerFinanzaConn.model('Auditphrases', auditPhrasesSchema);
const auditPhrasesBancoColombiaModel = BancolombiaConn.model('Auditphrases', auditPhrasesSchema);
const auditPhrasesEnelChileModel = EnelChileConn.model('Auditphrases', auditPhrasesSchema);
const auditPhrasesIgsBanorteMXModel = IgsBanorteMXConn.model('Auditphrases', auditPhrasesSchema);
const auditPhrasesIgsBanistmoPAModel = IgsBanistmoPAConn.model('Auditphrases', auditPhrasesSchema);
const auditPhrasesBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Auditphrases', auditPhrasesSchema);
const auditPhrasesBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Auditphrases', auditPhrasesSchema);

module.exports = {
    auditPhrasesSerFinanzaModel,
    auditPhrasesBancoColombiaModel,
    auditPhrasesEnelChileModel,
    auditPhrasesIgsBanorteMXModel,
    auditPhrasesIgsBanistmoPAModel,
    auditPhrasesBpogsBoldEnglishUSModel,
    auditPhrasesBpogsHitesDespachoRetrioCOModel
};
