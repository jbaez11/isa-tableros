const {agentsAuditSerFinanzaModel,
    agentsAuditBancoColombiaModel,
    agentsAuditEnelChileModel,
    agentsAuditIgsBanorteMXModel,
    agentsAuditIgsBanistmoPAModel,
    agentsAuditBpogsBoldEnglishUSModel,
    agentsAuditBpogsHitesDespachoRetrioCOModel} = require('./model');


async function getAsesores(filterAgentsAudit,nameDB){
    let filter = {};
    
    if(filterAgentsAudit != null){
        filter = {
            eventDate:filterAgentsAudit
        };
    }

    var agentsAudit ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            agentsAudit = await agentsAuditSerFinanzaModel.find();
            return agentsAudit;

        case 'igsBancolombiaCO':
            agentsAudit = await agentsAuditBancoColombiaModel.find();
            return agentsAudit ;

        case 'igsEnelCL':
            agentsAudit = await agentsAuditEnelChileModel.find();
            return agentsAudit;
        case 'igsBanorteMX' :
            agentsAudit = await agentsAuditIgsBanorteMXModel.find();
            return agentsAudit;
        case 'igsBanistmoPA' :
            agentsAudit = await agentsAuditIgsBanistmoPAModel.find();
            return agentsAudit;
        case 'bpogsBoldEnglishUS' :
            agentsAudit = await agentsAuditBpogsBoldEnglishUSModel.find();
            return agentsAudit;
        case 'bpogsHitesDespachoRetrioCO' :
            agentsAudit = await agentsAuditBpogsHitesDespachoRetrioCOModel.find();
            return agentsAudit;            
        }
    //return asesores;
}

module.exports = {
    list:getAsesores,
    // add: addAgents,
    // updateText: updateAgents,
    // remove:removeAgents,
}

