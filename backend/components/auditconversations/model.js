const mongoose = require('mongoose');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn,alkTestCOconn,BpogsBoldFrenchFRConn, IgsDaviplataCOConn, BpogsAMCCOCon,
IgsBancoDeOccidenteCOConn } = require('../../db');
const Schema = mongoose.Schema;

const auditconversationSchema = new Schema({
    eventDate:Date,
    agentsSummary :{
        type:Object,
        default:{}
    },
    recordingsSummary
    :{
        // aqui indicas que el tipo de dato es Array
        type: Object,
        // aqui lo inicializas por defecto como un array vacío
        default: {}
    },
    createdAt:Date

    
});


const auditconversationSerFinanzaModel = SerFinanzaConn.model('Auditconversations', auditconversationSchema);
const auditconversationBancoColombiaModel = BancolombiaConn.model('Auditconversations', auditconversationSchema);
const auditconversationEnelChileModel = EnelChileConn.model('Auditconversations', auditconversationSchema);
const auditconversationIgsBanorteMXModel = IgsBanorteMXConn.model('Auditconversations', auditconversationSchema);
const auditconversationIgsBanistmoPAModel = IgsBanistmoPAConn.model('Auditconversations', auditconversationSchema);
const auditconversationBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Auditconversations', auditconversationSchema);
const auditconversationBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Auditconversations', auditconversationSchema);
const auditconversationalkTestCOModel = alkTestCOconn.model('Auditconversations', auditconversationSchema);
const auditconversationBpogsBoldFrenchFRModel = BpogsBoldFrenchFRConn.model('Auditconversations', auditconversationSchema);
const auditconversationDaviplataCOModel = IgsDaviplataCOConn.model('Auditconversations', auditconversationSchema);
const auditconversationBpogsAMCCOModel = BpogsAMCCOCon.model('Auditconversations', auditconversationSchema);
const auditconversationIgsBancoDeOccidenteCOModel = IgsBancoDeOccidenteCOConn.model('Auditconversations', auditconversationSchema);


module.exports = {
    auditconversationDaviplataCOModel,
    auditconversationBpogsBoldFrenchFRModel,
    auditconversationSerFinanzaModel,
    auditconversationBancoColombiaModel,
    auditconversationEnelChileModel,
    auditconversationIgsBanorteMXModel,
    auditconversationIgsBanistmoPAModel,
    auditconversationBpogsBoldEnglishUSModel,
    auditconversationBpogsHitesDespachoRetrioCOModel,
    auditconversationalkTestCOModel,
    auditconversationBpogsAMCCOModel,
    auditconversationIgsBancoDeOccidenteCOModel,
};

