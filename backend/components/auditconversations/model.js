const mongoose = require('mongoose');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn } = require('../../db');
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

module.exports = {
    auditconversationSerFinanzaModel,
    auditconversationBancoColombiaModel,
    auditconversationEnelChileModel,
    auditconversationIgsBanorteMXModel,
    auditconversationIgsBanistmoPAModel,
    auditconversationBpogsBoldEnglishUSModel,
    auditconversationBpogsHitesDespachoRetrioCOModel
};

