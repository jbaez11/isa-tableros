const mongoose = require('mongoose');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
BpogsHitesDespachoRetrioCOConn } = require('../../db');

const Schema = mongoose.Schema;

const agentsSchema = new Schema({
    name : {
        type: String,
        required:true,
        uppercase: true,
    },
    
    identification:{
        type: String,
        unique:true,
        required:true,
    },
    gender: {
        type: String,
        required:true,
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
});

//const model = mongoose.model('BaseAgents', agentsSchema);
const agentsSerFinanzaModel = SerFinanzaConn.model('BaseAgents', agentsSchema);
const agentsBancoColombiaModel = BancolombiaConn.model('BaseAgents', agentsSchema);
const agentsEnelChileModel = EnelChileConn.model('BaseAgents', agentsSchema);
const agentsIgsBanorteMXModel = IgsBanorteMXConn.model('BaseAgents', agentsSchema);
const agentsIgsBanistmoPAModel = IgsBanistmoPAConn.model('BaseAgents', agentsSchema);
const agentsBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('BaseAgents', agentsSchema);
const agentsBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('BaseAgents', agentsSchema);

module.exports = {
    agentsSerFinanzaModel,
    agentsBancoColombiaModel,
    agentsEnelChileModel,
    agentsIgsBanorteMXModel,
    agentsIgsBanistmoPAModel,
    agentsBpogsBoldEnglishUSModel,
    agentsBpogsHitesDespachoRetrioCOModel
};
