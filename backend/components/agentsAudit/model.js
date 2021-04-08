const mongoose = require('mongoose');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn } = require('../../db');

const Schema = mongoose.Schema;

const agentsAuditSchema = new Schema({
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


const agentsAuditSerFinanzaModel = SerFinanzaConn.model('Auditkeywords', agentsAuditSchema);
const agentsAuditBancoColombiaModel = BancolombiaConn.model('Auditkeywords', agentsAuditSchema);
const agentsAuditEnelChileModel = EnelChileConn.model('Auditkeywords', agentsAuditSchema);
const agentsAuditIgsBanorteMXModel = IgsBanorteMXConn.model('Auditkeywords', agentsAuditSchema);
const agentsAuditIgsBanistmoPAModel = IgsBanistmoPAConn.model('Auditkeywords', agentsAuditSchema);
const agentsAuditBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Auditkeywords', agentsAuditSchema);
const agentsAuditBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Auditkeywords', agentsAuditSchema);

module.exports = {
    agentsAuditSerFinanzaModel,
    agentsAuditBancoColombiaModel,
    agentsAuditEnelChileModel,
    agentsAuditIgsBanorteMXModel,
    agentsAuditIgsBanistmoPAModel,
    agentsAuditBpogsBoldEnglishUSModel,
    agentsAuditBpogsHitesDespachoRetrioCOModel
};